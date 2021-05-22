import React from 'react';

export function Resume() {
    return <div className="cv">
        <p>
            <h1>Experience</h1>
        </p>
        <p>
            <h2>Jetbrains</h2>
        </p>
        <div className="container">
            <div className="flexed-name">
                <h3>Intern Software Engineering</h3>
            </div>
            <div className="flexed-date">
                Feb 2020 - Today
            </div>

        </div>
        <p>
            <li>
                Improved built time of the toolbox app with over 500 thousand users
            </li>
            <li>
                Developed Backend in Kotlin
            </li>
        </p>
        <p>
            <h2>NTT-Data</h2>

            <div className="container">
                <div className="flexed-name">
                    <h3>Intern DevSecOps</h3>
                </div>
                <div className="flexed-date">
                    March 2019 - Sep 2019
                </div>

            </div>
            <p>
                <li>
                    Showcased vulnerabilities in Containers by setting up azure environments
                </li>
                <li>
                    Created a smart sheduler in kubernetes for neuvector that collects and processes container logs
                </li>
                <li>
                    Set up a notary service in kubernetes
                </li>
            </p>
            <p>
                <h2>PAYBACK</h2>
            </p>
            <div className="container">
                <div className="flexed-name">
                    <h3>Intern IT OPS</h3>
                </div>
                <div className="flexed-date">
                    Oct 2016 - Oct 2018
                </div>

            </div>
            <p>
                <li>
                    Developed and documented various automation tools in python and ocassionally in VBA to improve the
                    daily workflow
                </li>
                <li>
                    Used SQL to retreive information in the Oracle Database of the company
                </li>
                <li>
                    Developed a tool with working GUI that saved the company over 50 000 € worth of bookings for a
                    single fraud scheme
                </li>
            </p>
            <p>
                <h1>Education</h1>

            </p>
            <div className="container">
                <div className="flexed-name">
                    <h3>Technical University of Munich</h3>
                </div>
                <div className="flexed-date">
                    Munich, Germany
                </div>

            </div>
            <div className="container">
                <div className="flexed-name">
                    M.Sc. Computer Science with Specialisation in Machine Learning
                </div>
                <div className="flexed-date">
                    Oct 2019 - Present
                </div>

            </div>
            <div className="container">
                <div className="flexed-name">
                    B.Sc. Computer Science with Minor in Maths
                </div>
                <div className="flexed-date">
                    Oct 2015 - Oct 2019
                </div>

            </div>
            <br/>
            <div className="container">
                <div className="flexed-name">
                    <h3>Chalmers University of Technology</h3>
                </div>
                <div className="flexed-date">
                    Gothenburg, Sweden
                </div>

            </div>
            <div className="container">
                <div className="flexed-name">
                    Semester abroad as part of the ERASMUS program
                </div>
                <div className="flexed-date">
                    Sep 2019 - Feb 2020
                </div>

            </div>
        </p>
    </div>
}