import { Document, Page, pdfjs } from "react-pdf";
import React, { useState } from "react";
import pdf from "/resume.pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';


// Correct worker setup


function ResumePreview() {
    return (
        <div style={{ height: 800 } }>
            <br></br>
            <iframe
                src="/resume.pdf"
                title="Resume"
                width="500"
                allow={"fullscreen"}
                height="700"
                style={{ border: "none" }}
            />
            <br></br>
            <button className={ "btn btn-primary hover:bg-sky-800 rounded-xl w-45 h-15 rounded-2xl bg-sky-900"}>
                <a href="/resume.pdf" download><p className=" font-mono-mono text-2xl">Download</p></a>
            </button>
        </div>
    );
}

export default ResumePreview;
