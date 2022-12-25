import React from 'react'

function Empprofilecomp() {
    return (
        <div>
            <ul style={{ listStyleType: "none" }}>
                <li>
                    <div>
                        <label className="form-label">Username : <span id="username"></span></label>
                    </div>
                </li>
                <li>
                    <div>
                        <label className="form-label">Company Name : <span id="name"></span></label>
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

export default Empprofilecomp