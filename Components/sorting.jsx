import React from 'react'

function Sorting() {
  return (
    <div>
        <section id="sectionSorting" style={{paddingTop: "100pt"}} >
            <div className="container">
            <div className="row">
                <div className="col">
                <div>
                    <label for="jobtitle" style={{fontWeight: "bold", color: "#444444"}}>Job Title</label>
                    <input type="text" className="form-control" id="inputJobTitle" placeholder="" style={{width: "225px"}}/>
                </div>
                </div>
                <div className="col">
                <div>
                    <label for="category" style={{fontWeight: "bold", color: "#444444"}}>Category</label>
                    <input type="text" className="form-control" id="inputCategory" placeholder="" style={{width: "225px"}}/>
                </div>
                </div>
                <div className="col">
                <div>
                    <label for="salary" style={{fontWeight: "bold", color: "#444444"}}>Salary</label>
                    <input type="text" className="form-control" id="inputSalary" placeholder="" style={{width: "225px"}}/>
                </div>
                </div>
                <div className="col">
                <div>
                    <label for="area" style={{fontWeight: "bold", color: "#444444"}}>Area</label>
                    <input type="text" className="form-control" id="inputArea" placeholder="" style={{width: "225px"}}/>
                </div>
                </div>
                <div className="col-1" style={{paddingTop: "17pt"}}>
                <button type="submit" className="btn btn-primary" onclick="findJob()">Search</button>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Sorting