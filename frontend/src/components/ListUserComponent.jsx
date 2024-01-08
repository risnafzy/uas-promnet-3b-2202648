import React, { Component } from 'react';
import Swal from 'sweetalert2';
import UserService from '../services/UserService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

class ListUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            search: '',
        };

        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    deleteUser(id) {
        UserService.deleteUser(id).then((res) => {
            this.setState({
                users: this.state.users.filter((user) => user.id !== id),
            });
        });
    }

    confirmDeleteUser(id) {
        Swal.fire({
            title: 'Anda yakin?',
            text: 'Anda tidak akan dapat mengembalikan data ini!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ya',
            cancelButtonText: 'Tidak',
        }).then((result) => {
            if (result.isConfirmed) {
                this.deleteUser(id);
            }
        });
    }

    viewUser(id) {
        this.props.history.push(`/view-user/${id}`);
    }

    editUser(id) {
        this.props.history.push(`/add-user/${id}`);
    }

    handleSearchChange(event) {
        this.setState({ search: event.target.value });
    }

    componentDidMount() {
        UserService.getUsers().then((res) => {
            if (res.data == null) {
                this.props.history.push('/add-user/_add');
            }
            this.setState({ users: res.data });
        });
    }

    addUser() {
        this.props.history.push('/add-user/_add');
    }

    render() {
        const filteredUsers = this.state.users.filter((user) =>
            Object.values(user)
                .join('')
                .toLowerCase()
                .includes(this.state.search.toLowerCase())
        );

        return (
            <div>
                <h2 className="text-center">List Transaction Dinamik-18</h2>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-secondary me-md-2" type="button" onClick={this.addUser}>
                        Add Transaction
                    </button>
                </div>
                <Navbar bg="light">
                    <Form className="d-flex">
                        <FormControl
                            type="text"
                            placeholder="Search receiver...."
                            value={this.state.search}
                            onChange={this.handleSearchChange}
                        />
                    </Form>
                </Navbar>
                <div className="container">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Receiver</th>
                                <th>Jenis Kelamin</th>
                                <th>No Telpon</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.date}</td>
                                    <td>{user.description}</td>
                                    <td>{user.amount}</td>
                                    <td>{user.status}</td>
                                    <td>{user.receiver}</td>
                                    <td>{user.jk}</td>
                                    <td>{user.no_telp}</td>
                                    <td>{user.address}</td>
                                    <td>
                                        <Button
                                            onClick={() => this.editUser(user.id)}
                                            variant="info"
                                        >
                                            Update
                                        </Button>
                                        <Button
                                            style={{ marginLeft: '10px' }}
                                            onClick={() => this.confirmDeleteUser(user.id)}
                                            variant="danger"
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            style={{ marginLeft: '10x' }}
                                            onClick={() => this.viewUser(user.id)}
                                            variant="info"
                                        >
                                            View
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListUserComponent;
