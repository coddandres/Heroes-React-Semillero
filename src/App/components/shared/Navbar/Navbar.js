import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import A_64 from '../../../../assets/img/A-64.png'
import { withRouter } from "react-router-dom";

const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark bg-faded">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>


            <Link className="navbar-brand" to="/home">
                <img src={A_64} width="30" height="30" alt="Logo" />
            </Link>



            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/home" > Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/heroes"> Heroes</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/about"> About</NavLink>
                    </li>
                </ul>



            </div>


        </nav>

    )
}

export default withRouter(Navbar)