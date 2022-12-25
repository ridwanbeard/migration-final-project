import React from 'react'

function JSprofilecomp() {
    return (
      <div>
         <ul style={{listStyleType: "none"}}>
          <li>
              <div>
                  <label className="form-label">Username : <span id="username"></span></label>
              </div>
          </li>
          <li>
              <div>
                  <label className="form-label">Name : <span id="name"></span></label>
              </div>
          </li>
          <li>
              <div>
                  <label className="form-label">Gender : <span id="gender"></span></label>
              </div>
          </li>
          <li>
              <div>
                  <label className="form-label">Education : <span id="education"></span></label>
              </div>
          </li>
          <li>
              <div>
                  <label className="form-label">Major : <span id="major"></span></label>
              </div>
          </li>
          <li>
              <div>
                  <label className="form-label">Email : <span id="email"></span></label>
              </div>
          </li>
          <li>
              <div>
                  <label className="form-label">Bio : <span id="bio"></span></label>
              </div>
                  </li>
      </ul>
          <div>
              <button>
                  Update Profile
              </button>
              <button>
                  Delete Profile
              </button>
          </div>
      </div>
     
                )
}

export default JSprofilecomp