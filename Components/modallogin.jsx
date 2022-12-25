import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


class Modallogin extends React.Component {
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
          Login
        </Button>

        <Modal show={this.state.show} onHide={() => { this.handleModal() }}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button>
              Login
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

export default Modallogin;