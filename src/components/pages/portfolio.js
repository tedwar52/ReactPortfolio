import React from "react";
import Container from "../Container/index";
import Project from "../Project/index";
import Col from "../Column/index";

function Portfolio() {
    return (
        <Container>
            <div className="row">
                <div class="col-md-6">
                    <Project title="It's Raining Playlists" link="https://carolinem15.github.io/FirstProject/" image="assets/images/rainingplaylists.png" />
                    <Project title="Weather Dashboard" link="https://tedwar52.github.io/Weather-Dashboard/" image="assets/images/weather.png" />
                </div>
            </div>
            <div className="row">
                <div class="col-md-6">
                    <Project title="Doctor's Connect" link="https://github.com/tedwar52/Project-2" image="assets/doctor.png" />
                    <Project title="Note Taker" link="https://github.com/tedwar52/Note-Taker" image="assets/images/notes.png" />
                </div>
            </div>
            <div className="row">
                <div class="col-md-6">
                    <Project title="Eat-Da-Burger" link="https://github.com/tedwar52/Eat-Da-Burger" image="assets/images/burger.png" />
                    <Project title="Readme Generator" link="https://github.com/tedwar52/Readme-Generator" image="assets/images/commandline.png" />
                </div>
            </div>
        </Container>
    );
}

export default Portfolio;