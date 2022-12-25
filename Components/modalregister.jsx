import React from 'react'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modalregister() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div class="modal fade" id="exampleModa2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <form action="#" id="form-signup">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Register</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="mb-1 row">
                                    <label for="#">Register As</label>
                                </div>
                                <div class="mb-1 row">
                                    <select class="form-select" aria-label="Default select example" id="role" name="role"
                                        onchange="roleSelectorName()">
                                        <option selected disabled>Choose your role</option>
                                        <option value="employer">employer</option>
                                        <option value="jobseeker">Job Seeker</option>
                                    </select>
                                </div>
                                <div class="mb-1 row">
                                    <label class="col-sm-2 col-form-label">Username</label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" id="username" />
                                    </div>
                                </div>
                                <div class="mb-1 row">
                                    <label class="col-sm-2 col-form-label">Password</label>
                                    <div class="col-sm-6">
                                        <input type="password" class="form-control" id="password" />
                                    </div>
                                </div>
                                <div class="mb-1 row">
                                    <label class="col-sm-2 col-form-label" id="signup-fullnamelabel">Full Name</label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" id="name" />
                                    </div>
                                </div>
                                <div class="mb-1 row">
                                    <label class="col-sm-2 col-form-label">email</label>
                                    <div class="col-sm-6">
                                        <input type="email" class="form-control" id="email" />
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" onClick="register()"
                                    data-bs-dismiss="modal">Register</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Register Account
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

render(<Modalregister />);

export default Modalregister
