
import React from 'react'
import Form from 'react-bootstrap/Form';

function Empfindjs(){
    return(
        <div>
            <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Label>Username </Form.Label>
                    <Form.Control type="" placeholder="Enter Username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCompanyName">
                    <Form.Label>Company Name </Form.Label>
                    <Form.Control type="" placeholder="Enter Company Name" />
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
            </div>
            <div>
                <button>
                    Find Jobseeker
                </button>
            </div>
            
        </div>
    )
}

export default Empfindjs;