import React from 'react'
import { Flex, Button} from '@aws-amplify/ui-react'
import { Link } from 'react-router'


const NavBar = () => {
    const handleClick = () => {
        window.location.href = 'mailto:luis.carr3no.web@gmail.com?subject=Portfolio reach out&body=I saw your portfolio and wanted to connect.';
    };

    return (
        <div className={"flex justify-center font-mono p-6"}>
            <div dir="ltr">
                <Link to={"/"} className={"ms-35 hover:drop-shadow-xl"}>
                    <Button type={"button"} variation="primary" className={"px-10"}>
                        <h1 className={"text-sky-100"}>Home</h1>
                    </Button>
                </Link>

                <Link to={"/about"}>
                    <Button type={"button"} variation="primary" className={"px-10"}>
                        <h1 className={"text-gray-100"}>About Me</h1>
                    </Button>
                </Link>

                <Link to={"/projects"}>
                    <Button type={"button"} variation="primary" className={"px-10"}>
                        <h1 className={"text-gray-100"}>Projects</h1>
                    </Button>
                </Link>

                <Link to={"/resume"}>
                    <Button type={"button"} variation="primary" className={"px-10"}>
                        <h1 className={"text-gray-100"}>Resume</h1>
                    </Button>
                </Link>
            </div>

            <div dir="ltr">
                <Button type={"button"} variation="info" className={"ms-30 ph-10 w-38 px-10 pt-1 pb-1 bg-sky-700 shadow-md rounded-md"} onClick={handleClick}>
                    <h1 className={"text-gray-100 text-sm"}>Contact Me</h1>
                </Button>
            </div>
        </div>
    )
}


export default NavBar
