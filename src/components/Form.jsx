import React from 'react';
import Table from './Table';
import axios from 'axios';
import ModalAdd from './ModalAdd';
import ModalEdit from './ModalEdit';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            todo: "",
            location: "",
            note: "",
            selectedIdx: null,
            todoList: []
        }
    }

    // untuk menjalankan sebuah fungsi secara otomatis, pertama kali saat component atau page react js di render
    componentDidMount() {
        // fungsi yang digunakan untuk melakukan request data pertama kali ke backend
        this.getData();
    }

    getData = () => {
        // AXIOS : melakukan request data ke backend atau API
        axios.get(`http://localhost:2000/todoList`)
            .then((response) => {
                // Masuk kedalam then ketika berhasil mendapat response dari json-server
                console.log(response.data)
                // Menyimpan data response kedalam state
                this.setState({ todoList: response.data })
            }).catch((err) => {
                // Masuk kedalam catch ketika gagal mendapat response dari json-server
                console.log(err)
            })
    }

    btSubmit = () => {
        let { date, todo, location, note, } = this.state //desctructure
        // axios
        axios.post(`http://localhost:2000/todoList`, {
            date, todo, location, note, status: "On going"
        }).then((response) => {
            // memanggil data terbaru untuk memperbarui data pada state
            this.getData()
            this.setState({
                date: "",
                todo: "",
                location: "",
                note: ""
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    // btDelete = (index) => {
    //     let temp = [...this.state.todoList]
    //     temp.splice(index, 1)
    //     this.setState({ todoList: temp })
    // }

    btEdit = (idx) => {
        this.setState({ selectedIdx: idx })
    }

    btSave = () => {
        let { date, todo, location, note, todoList, selectedIdx } = this.state
        console.log(date,todo,location,note)
        let editData = {
            date: date == ""? todoList[selectedIdx].date : date,
            todo: todo == ""? todoList[selectedIdx].todo : todo,
            location: location == ""? todoList[selectedIdx].location : location,
            note: note == ""? todoList[selectedIdx].note : note
        }
        axios.patch(`http://localhost:2000/todoList/${todoList[selectedIdx].id}`, editData)
        .then((response) => {
            this.getData()
            this.setState({
                date: "",
                todo: "",
                location: "",
                note: "",
                selectedIdx: null
            })
        }).catch((err) => {
           console.log(err) 
        })
    }

    btnDelete = (index) => {
        let { todoList, selectedIdx } = this.state
        selectedIdx =  index
        
        // // console.log(date, todo, location, note)
        
        axios.delete(`http://localhost:2000/todoList/${todoList[selectedIdx].id}`)
        .then((response) => {
            this.getData()
        }).catch((err) => {
           console.log(err) 
        })

    }


    printData = () => {
        return this.state.todoList.map((value, index) => {
            return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{value.date}</td>
                    <td>{value.todo}</td>
                    <td><img src={value.location} width="50%" alt="..." /></td>
                    <td>{value.note}</td>
                    <td>{value.status}</td>
                    <td>
                        <button className="btn btn-danger" type="button" onClick={() => this.btnDelete(index)}>Delete</button>
                        <button className="btn btn-warning" type="button" onClick={() => this.btEdit(index)} data-toggle="modal" data-target="#editModal">Edit</button>
                    </td>
                </tr>
            )
        })
    }

    // CARA KEDUA MENDAPATKAN VALUE
    handleInput = (value, propState) => {
        console.log(value, propState)
        this.setState({ [propState]: value })
    }

    // CARA PERTAMA MENDAPATKAN VALUE
    // handleInputTodo = (event) => {
    //     let value = event.target.value
    //     console.log(value)
    //     this.setState({ todo: value })
    // }


    render() {
        return (
            <div className="m-auto p-4">
                <ModalAdd
                    handleInput={this.handleInput}
                    date={this.state.date}
                    todo={this.state.todo}
                    location={this.state.location}
                    note={this.state.note}
                    btSubmit={this.btSubmit}
                />
                {/* Modal Edit */}
               
                {
                    this.state.todoList.length > 0 && this.state.selectedIdx != null ?
                        <ModalEdit
                            date={this.state.todoList[this.state.selectedIdx].date}
                            todo={this.state.todoList[this.state.selectedIdx].todo}
                            location={this.state.todoList[this.state.selectedIdx].location}
                            handleInput={this.handleInput}
                            note={this.state.todoList[this.state.selectedIdx].note}
                            btCancel={() => this.setState({ selectedIdx: null })}
                            btSave={this.btSave}
                        />
                        : null
                }
                <div className="container-fluid">
                    <Table cetak={this.printData()} />
                    
                </div>
            </div>
        );
    }
}

export default Form;

