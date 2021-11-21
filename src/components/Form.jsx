import React from 'react';
import Table from './Table';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                {
                    id: 1,
                    todo: "Intro ReactJS",
                    date: "20/11/2021",
                    location: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
                    note: "Prepare VSCode, Node js and CRA",
                    status: "Done",
                }
            ]
        }
    }

    btSubmit = () => {
        let toDoList=this.state.todoList
        toDoList.push({
            date:this.refs.date.value,
            todo:this.refs.todo.value,
            location:this.refs.location.value,
            note:this.refs.note.value,
            status:"Done"
        })
        this.setState({toDoList})
    }

    printData = () => {
        return this.state.todoList.map((value, index) => {
            return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{value.date}</td>
                    <td>{value.todo}</td>
                    <td><img src={value.location} width="20%" alt="..." /></td>
                    <td>{value.note}</td>
                    <td>{value.status}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <div className="d-flex flex-column justify-items-center">
                            Date
                            <input id="date" type="text" ref="date" placeholder="hh/bb/tttt" />
                            To Do
                            <input id="todo" type="text" ref="todo" />
                            Location
                            <input id="todo" type="text" ref="location" />
                            Note
                            <textarea name="note" id="note" cols="30" rows="10" ref="note"></textarea>
                            <button className="btn btn-primary" onClick={this.btSubmit}>Submit</button>
                        </div>
                    </div>
                    <div className="col-10">
                        <Table cetak={this.printData()}/>
                    </div>

                </div>
            </div>
        );
    }
}

export default Form;