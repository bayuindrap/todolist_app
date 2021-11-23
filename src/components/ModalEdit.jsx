import React from 'react';

class ModalEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="editModalLabel">Modal Edit</h5>
                                <button type="button" className="btn btn-outline-secondary close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form >
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Date</label>
                                        <input type="date" className="form-control" id="exampleInputPassword1"
                                            defaultValue={this.props.date} onChange={(event) => this.props.handleInput(event.target.value, "date")}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">To Do</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1"
                                            defaultValue={this.props.todo} onChange={(event) => this.props.handleInput(event.target.value, "todo")}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Location</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1"
                                            defaultValue={this.props.location} onChange={(event) => this.props.handleInput(event.target.value, "location")}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Note</label>
                                        <textarea className="form-control" id="exampleInputPassword1"
                                            defaultValue={this.props.note} onChange={(event) => this.props.handleInput(event.target.value, "note")}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.btCancel}>Cancel</button>
                                <button type="button" className="btn btn-primary" onClick={this.props.btSave}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalEdit;