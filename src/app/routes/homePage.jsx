import React from 'react'
import NavBar from "../components/navBar.jsx";
// Using a more explicit import path
import artImage from "../../app/assets/art.jpg";


const HomePage = () => {
    return (
        <div>
            <NavBar />

            <div className="flex">

                {/*     Left side of the page           */}
                <div className="flex font-mono flex-col justify-center">
                    <span className="ms-30 text-4xl text-sky-50 font-large">Hi! I'm <text className="font-bold text-sky-500 italic underline">Luis</text>,</span>
                    <span className="ms-32 p-2 text-2xl text-sky-50 font-medium">Software Developer & Tech Fanatic </span>

                    <div className="ms-35 py-10 text-sm w-100 text-sky-50 font-md">

                        <text>
                            I'm a 22-year-old <text className="font-bold text-lrg text-sky-0 italic"> aspiring Software Developer</text>. <p>Rowan University graduate with a B.S.</p> <p>in Computer Science. I am skilled in:</p>
                            <br></br>
                            <ul className="ms-10 list-disc">
                                <li><span className="text-sky-50 font-bold">Java</span></li>
                                <li><span className="text-sky-50 font-bold">React</span></li>
                                <li><span className="text-sky-50 font-bold">Spring Boot</span></li>
                                <li><span className="text-sky-50 font-bold">Python</span></li>
                                <li><span className="text-sky-50 font-bold">AWS</span></li>
                                <li><span className="text-sky-50 font-bold">Docker</span></li>
                                <li><span className="text-sky-50 font-bold">SQL</span></li>
                            </ul>
                            <br></br>
                            <text className="text-medium">My experience spans full-stack deployment.<br></br> I've led a team of 3 front-end devs create a YouTube clone using the AWS infrastructure, delivering
                                an app which allowed for users to sign up using Cognito and upload videos & browse other users' videos. I have also worked on embedded systems, creating a weather station. <br></br>
                                <br></br>
                                I working on learning all tech!
                            </text>

                        </text>
                    </div>
                </div>


                {/*     Right side of the page           */}
                <div className="flex flex-col justify-center">
                    <img src={artImage} className="ms-30 w-100  shadow-2xl rounded-lg h-75" alt="Art" />
                </div>
            </div>
        </div>
    )
}
export default HomePage
