import React from 'react'
import NavBar from "../components/navBar.jsx";
import selfImage from "../../app/assets/selfie.jpeg";

const AboutPage = () => {
    return (
        <div className="">
            <NavBar />
            <div className="flex items-center justify-center flex-col font-mono">
                <span className="text-2xl text-bold uppercase">About Me</span>
                <br></br>
                <img src={selfImage} className="w-1/2 w-auto h-50 rounded-lg" alt="selfie"/>


                <div>
                    <text className="flex items-center text-sm justify-center w-190">
                        <br></br>
                        <br></br>
                        Hi, I'm Luis Carreno — a passionate software developer based in Clayton, NJ. <br></br> <br></br>
                        I recently graduated Summa Cum Laude from Rowan University with a B.S. in Computer Science, where I led projects like a YouTube-style platform built on AWS and a Super Bowl history explorer using Spring Boot and React.
                        I thrive on solving complex problems and crafting clean, scalable solutions with tools like Java, Python, Docker, and AWS. <br></br> <br></br>
                        Beyond the code, I bring leadership and communication skills from my experience in security operations at Target, where I earned recognition for crisis response and team mentorship.
                        I have worked in investigations concerning theft and have dealt with all levels of leadership, detailing them on improvements and solutions. I have worked on projects for the team,
                        a routine based tracker that right-sized our daily completion of routines, while also ensuring that the tasks are evenly distributed amongst the team. <br></br><br></br>
                        Whether I'm building full-stack applications or assembling PCs, I love turning ideas into reality and learning something new every day.
                    </text>
                </div>

            </div>
        </div>
    )
}
export default AboutPage
