import React from "react";
import { json } from "react-router-dom";

// function joblisting() {
//     const [joblist, setJoblist] = useState([]);

//     const fetchData = () => {
//         return fetch("http://127.0.0.1:5000/getjoboncriteria")
//             .then((response) => response.json())
//             .then(x => {
//                 setJoblist(x)
//             })
//     }

//     useEffect(() => {
//         fetchData();
//     }, [])

//     const list = joblist.map(y => {
//         return (
        
//         )
//     }

//     return (
//         <section id="joblistingall">
//             <div className="album py-5 bg-light">
//                 <div className="container mb-4 text-center" id="titleMostVisitHotel">
//                     <h2>Most Visited Hotels</h2>
//                     <p>The hotel with the highest number of bookings. Could be one of your choices.</p>
//                 </div>

//                 <div className="container">
//                     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
//                         {joblist}
//                     </div>
//                 </div>

//             </div>
//         </section>
//   )
// }
// Fetching

// }

function joblisting() {
    const [joblist, setJoblist] = useState([]);

    const fetchData = () => {
        return fetch("http://127.0.0.1:5000/getjoboncriteria")
            .then((response) => response.json())
            .then((json)=> {
                console.log(json)
                setJoblist(json)
            });
    };

    return (
        <div>
            Test<br/>
            <button onClick={fetchData}>Fetch API</button>
            <br/>
            {JSON.stringify(joblist)}
        </div>
    );
}

export default joblisting;