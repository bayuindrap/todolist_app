import React from 'react';

class ModalAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" style={{ float: "right" }} data-toggle="modal" data-target="#exampleModal">
                    Add Product
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Product</h5>
                                <button type="button" className="btn btn-outline-secondary close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form >
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Date</label>
                                        <input type="date" className="form-control" id="exampleInputPassword1"
                                            value={this.props.date} onChange={(event) => this.props.handleInput(event.target.value, "date")}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">To Do</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1"
                                            value={this.props.todo} onChange={(event) => this.props.handleInput(event.target.value, "todo")}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Location</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1"
                                            value={this.props.location} onChange={(event) => this.props.handleInput(event.target.value, "location")}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Note</label>
                                        <textarea className="form-control" id="exampleInputPassword1"
                                            value={this.props.note} onChange={(event) => this.props.handleInput(event.target.value, "note")}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.props.btSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalAdd;