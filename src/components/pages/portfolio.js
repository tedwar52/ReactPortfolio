import React from "react";
import Container from "../Container/index";
import Project from "../Project/index";

function Portfolio() {
    return (
        <Container>
            <div className="row">
                <div class="col-md-6">
                    <Project title="It's Raining Playlists" git="https://github.com/carolinem15/FirstProject" deployed="https://carolinem15.github.io/FirstProject/" image={require("../assets/images/rainingplaylists.png")} />
                    <Project title="Weather Dashboard" git="https://github.com/tedwar52/Weather-Dashboard" deployed="https://tedwar52.github.io/Weather-Dashboard/" image={require("../assets/images/weather.png")} />
                </div>
            </div>
            <div className="row">
                <div class="col-md-6">
                    <Project title="Doctor's Connect" git="https://github.com/tedwar52/Project-2" deployed="https://creepy-treat-09091.herokuapp.com/" image={require("../assets/images/doctor.png")} />
                    <Project title="Note Taker" git="https://github.com/tedwar52/Note-Taker" deployed="http://blooming-lake-16321.herokuapp.com/" image={require("../assets/images/notes.png")} />
                </div>
            </div>
            <div className="row">
                <div class="col-md-6">
                    <Project title="Eat-Da-Burger" git="https://github.com/tedwar52/Eat-Da-Burger" deployed="https://warm-wave-56497.herokuapp.com/" image={require("../assets/images/burger.png")} />
                    <Project title="Readme Generator" git="https://github.com/tedwar52/Readme-Generator" deployed="https://drive.google.com/file/d/1PxhD1x1OXDWWZhgPwFaTL3OSBtacoJsQ/view" image={require("../assets/images/commandline.png")} />
                </div>
            </div>
        </Container>
    );
}

export default Portfolio;