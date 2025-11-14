import React from 'react'
import {Flex, Text} from "@aws-amplify/ui-react";

const TechStack = ( {stack} ) => {
    return (
        <Text className="text-md p-2 font-bold" fontWeight={"bold"}>
            Tech Stack:
            <Flex direction={"column"} align={"center"}>
                {stack.map((item, index) => (
                    <Text className="font-bold"  key={index}>-{item}</Text>
                ))}
            </Flex>
        </Text>
    )
}
export default TechStack
