import React from 'react'
import ProjectCard from "./projectCard.jsx";

const ProjectCollection = ({ projects }) => {
    return (
        <div className="container mx-auto p-2">
            <div className="grid grid-cols-3 gap-5 justify-items-center">
                {projects.map((item, key) => (
                    <div className={key === 3 ? "col-start-2" : ""}>
                        <ProjectCard {...item} key={key} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectCollection;
