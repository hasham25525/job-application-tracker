
import React from 'react'

function Add() {
    document.getElementById("myForm").style.display = "block";
}

const Nav = () => {
    return (
        <>

            <nav className="navbar  navbar-light bg-body-tertiary " >
                <div className="container-fluid">
                    <a className="navbar-brand">
                        Job Application Tracker
                    </a>
                    <a className="d-flex" >

                        <button className="btn btn-light form-control me-2" onClick={Add} >Add Job</button>
                    </a>
                    <form class="d-flex">
             <input class="form-control me-2" type="text" placeholder="Search" />
                    <button class="btn btn-light" type="button">Search</button>
            </form>
                </div>
            </nav>
           
        </>
    )

}

export default Nav