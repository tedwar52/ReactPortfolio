import React from "react";
import Container from "../Container/index";

function NavBar() {
    return(
        <Container fluid>
            <div>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" a href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/portfolio">Portfolio</a>
                    </li>
                </ul>
            </div>
        </Container>
    )
}

export default NavBar;