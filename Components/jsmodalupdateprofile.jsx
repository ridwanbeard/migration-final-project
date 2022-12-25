import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


class Modaljsupdateprofile extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    handleModal() {
        this.setState({ show: !this.state.show })
    }
    render() {
        return (
            <div>
                <Button onClick={() => { this.handleModal() }}>
                    Update Profile
                </Button>

                <Modal show={this.state.show} onHide={() => { this.handleModal() }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicUserName">
                                <Form.Label>Username </Form.Label>
                                <Form.Control type="" placeholder="Enter Username" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicFullName">
                                <Form.Label>Full Name </Form.Label>
                                <Form.Control type="" placeholder="Enter Full Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicGender">
                                <Form.Label>Gender </Form.Label>
                                <Form.Control type="" placeholder="Enter Gender" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEducation">
                                <Form.Label>Education </Form.Label>
                                <Form.Control type="" placeholder="Enter Education" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicMajor">
                                <Form.Label>Major </Form.Label>
                                <Form.Control type="" placeholder="Enter Major" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email </Form.Label>
                                <Form.Control type="" placeholder="Enter Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicBio">
                                <Form.Label>Bio </Form.Label>
                                <Form.Control type="" placeholder="Enter Bio" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button>
                            Update
                        </Button>
                        <Button onClick={() => { this.handleModal() }}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Modaljsupdateprofile;