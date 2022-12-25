import React from 'react'

function JSNavbar() {
    return (
        <div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">

                    <h1 className="logo"><a href="index.html">Laborlab</a></h1>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="JSProfile">Profile</a></li>
                            <li><a className="nav-link scrollto" href="jSApplications.html">My Application</a></li>
                            <li>
                                <button type="button" className="btn btn-primary" onclick="logout()">Logout</button>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default JSNavbar