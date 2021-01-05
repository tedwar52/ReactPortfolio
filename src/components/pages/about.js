import React from "react";
const face = require("../assets/images/itsme.jpg");

function About() {
    return (
        <div class="container-fluid">
            <img src={face} />
            <div class="card w-75 bg-secondary">
                <div class="card-body">
                    <h5 class="card-title">Taylor Edwards</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content</p>
                    <a href="https://github.com/tedwar52" class="btn btn-primary">Github</a>
                    <a href="https://linkedin.com/in/tayloredwards52" class="btn btn-primary">LinkedIn</a>
                    <a href="https://docs.google.com/document/d/1_o_bHpLxQG_DaSBcwx0yceL4g5eJyNJjd1Sr6bis-iE/edit?usp=sharing" class="btn btn-primary">Current Resume</a>
                    <br></br>
                    <p>Email Address: tedwar52@gmail.com</p>
                    <p>Contact Phone Number: (704)-608-9590</p>
                </div>
            </div>
        </div>
    );
}

export default About;