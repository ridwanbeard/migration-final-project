import './App.css';
import "../src/eNno/assets/vendor/bootstrap/css/bootstrap.min.css"
import "../src/eNno/assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../src/eNno/assets/vendor/boxicons/css/boxicons.min.css"
import "../src/eNno/assets/vendor/glightbox/css/glightbox.min.css"
import "../src/eNno/assets/vendor/swiper/swiper-bundle.min.css"
import "../src/eNno/assets/css/style.css"
// import Home from './View/Home';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Footer from './Components/footer';
// import Navbar from './Components/navbar';
// import React, {useState} from 'react'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';


// function App() {
//   const [joblist, setJoblist] = useState([]);

//     const fetchData = () => {
//         return fetch("http://127.0.0.1:5000/getjoboncriteria")
//             .then((response) => response.json())
//             .then((json)=> {
//                 console.log(json)
//                 setJoblist(json)
//             });
//     };

//     return (
//         <div>
//             Test<br/>
//             <button onClick={fetchData}>Fetch API</button>
//             <br/>
//             {JSON.stringify}
//         </div>
//     );
// }


// export default App;import React from 'react'import React from 'react'

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