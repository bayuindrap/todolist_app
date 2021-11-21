import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">To Do</th>
                            <th scope="col">Location</th>
                            <th scope="col">Note</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cetak}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;