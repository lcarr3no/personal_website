import React from 'react'
import {Card, Flex, Text} from "@aws-amplify/ui-react"
import {Link} from "react-router";
import TechStack from "./TechStack.jsx";

const ProjectCard = (Project) => {
    return (
        <Card
            className = "bg-gray-800  rounded-2xl  hover:bg-gray-600 box-shadow-lg"
            variation={"elevated"}
            width={"400px"}
            height={"400px"}
            border={"1px solid gray"}>

            <Flex direction={"column"} align={"center"}>
                <Text
                    isTruncated={true}
                    fontSize={"1.1rem"}
                    padding-left={"10px"}

                    className=" p-3 text-md font-bold"
                >
                    {Project.title}
                </Text>

                <Text className=" text-md italic p-2" fontWeight={"bold"}>
                    {Project.description}
                </Text>


                    <Text className=" text-base" fontWeight={"bold"}>
                       Role: {Project.role}
                    </Text>


                <TechStack stack={Project.stack}/>

                <Text >
                     Repo: <Link to={Project.repo}>{Project.repo}</Link>
                </Text>
            </Flex>
        </Card>
    )
}
export default ProjectCard
