import React from "react";
import Container from "../Container/index";
import { Link } from "react-router-dom";

function NavBar() {
    return(
        <Container fluid>
            <div>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link to="/" class="nav-link" aria-current="page">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/portfolio" class="nav-link">Portfolio</Link>
                    </li>
                </ul>
            </div>
        </Container>
    )
}

export default NavBar;