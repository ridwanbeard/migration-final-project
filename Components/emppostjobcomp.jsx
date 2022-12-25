import React from 'react'
import Form from 'react-bootstrap/Form';

function Emppostjob(){
    return(
        <div>
            <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicJobTitle">
                    <Form.Label>Job Title </Form.Label>
                    <Form.Control type="" placeholder="Enter Job Title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicJobDescription">
                    <Form.Label>Job Description </Form.Label>
                    <Form.Control type="" placeholder="Enter Job Description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRequirement">
                    <Form.Label>Job Requirement </Form.Label>
                    <Form.Control type="" placeholder="Enter Job Requirement" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSalary">
                    <Form.Label>Salary </Form.Label>
                    <Form.Control type="" placeholder="Enter Salary per Mounth" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicJobCategory">
                    <Form.Label>Job Category </Form.Label>
                    <Form.Control type="" placeholder="Enter Job Category" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicArea">
                    <Form.Label>Placement Area </Form.Label>
                    <Form.Control type="" placeholder="Enter Placement Area" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicExpire">
                    <Form.Label>Expire Date </Form.Label>
                    <Form.Control type="" placeholder="Enter Expire Date" />
                </Form.Group>
            </Form>
            </div>
            <div>
                <button>
                    Post Job
                </button>
            </div>
            
        </div>
    )
}

export default Emppostjob;