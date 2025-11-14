import React from 'react'
import NavBar from "../components/navBar.jsx";
import ResumePreview from "../components/resumePreview.jsx";
import {Flex} from "@aws-amplify/ui-react";
import { pdfjs } from "react-pdf";



const ResumePage = () => {
    return (
        <div>
         <NavBar/>
            <div className="flex items-center justify-center font-mono">
                <Flex direction={"column"} align={"center"}>
                    <span className="text-2xl uppercase">Resume</span>
                    <br></br>
                    <ResumePreview/>
                </Flex>
            </div>
        </div>
    )
}
export default ResumePage
