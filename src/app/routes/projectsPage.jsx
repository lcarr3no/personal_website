import React from 'react'
import NavBar from "../components/navBar.jsx";
import ProjectCollection from "../components/projectCollection.jsx";
import {View} from "@aws-amplify/ui-react";
import projects from "../assets/data.js";

const ProjectsPage = () => {
    return (
        <View width={"100%"} height={"100%"}>

            <NavBar />

            <div className="flex items-center justify-center font-mono">
                <span className="text-2xl uppercase">Projects</span>
            </div>
            <br></br>
            <ProjectCollection projects = {projects}/>


        </View>
    )
}
export default ProjectsPage
