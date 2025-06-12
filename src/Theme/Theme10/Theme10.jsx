import React, { useContext } from "react";
import {
    Box,
    Text,
    Heading,
    HStack,
    VStack,
    Divider,
    Link,
    UnorderedList,
    ListItem,
} from "@chakra-ui/react";
import "./Theme10.css";
import ResumeContext from "../../Context/ResumeContext";

const Theme10 = (props) => {
    const { componentRef, themeData } = props;
    const { name, address, phone, email, profile, summary, skill } =
        themeData.personalData;

    const { checkProj, checkWork, checkAward } = useContext(ResumeContext);
    const { projectTitles, projectDesc } = themeData.projectData;
    const { educationTitles, educationDesc } = themeData.educationData;
    const { workTitles, workDesc } = themeData.workData;
    const { awards } = themeData.awardData;

    return (
        <Box ref={componentRef} className="theme10" padding={10} fontFamily="serif">
            <VStack spacing={1} textAlign="center">
                <Heading as="h1" size="xl">{name}</Heading>
                <Text fontSize="sm">
                    {phone} | {email}

                </Text>
            </VStack>

            <Divider my={4} />

            <Box mb={5}>
                <Heading as="h2" size="md" textTransform="uppercase" mb={2}>
                    Education
                </Heading>
                {
                    Object.entries(educationTitles).map((element, index) => {
                        return (
                            <Box key={index} className="mt-3">
                                <Heading fontSize='md' className='my-2'>{element[1]}</Heading>
                                <Box className='sub-details'>
                                    {
                                        (Object.entries(educationDesc)[index] === undefined)
                                            ?
                                            null
                                            :
                                            Object.entries(educationDesc)[index][1].split(',').map((element, index) => {
                                                return <li key={index}>{element}</li>
                                            })
                                    }
                                </Box>
                            </Box>
                        )
                    })
                }
            </Box>

            <Box mb={5}>
                <Heading as="h2" size="md" textTransform="uppercase" mb={2}>
                    Experience
                </Heading>
                {
                    Object.entries(workTitles).map((element, index) => {
                        return (
                            <Box key={index} className="mt-1">
                                <Heading fontSize='md' className='my-2'>{element[1]}</Heading>
                                <Box className='sub-details'>
                                    {
                                        (Object.entries(workDesc)[index] === undefined)
                                            ?
                                            null
                                            :
                                            Object.entries(workDesc)[index][1].split(',').map((element, index) => {
                                                return <li key={index}>{element}</li>
                                            })
                                    }
                                </Box>
                            </Box>
                        )
                    })
                }
            </Box>

            <Box mb={5}>
                <Heading as="h2" size="md" textTransform="uppercase" mb={2}>
                    Projects
                </Heading>
                {Object.entries(projectTitles).map((element, index) => {
                    return (
                        <Box key={index} className="mt-1">
                            <Heading fontSize="md" fontFamily='serif' className="my-2">
                                {element[1]}
                            </Heading>
                            <Box className="sub-details">
                                {Object.entries(projectDesc)[index] === undefined
                                    ? null
                                    : Object.entries(projectDesc)
                                    [index][1].split(",")
                                        .map((element, index) => {
                                            return <li key={index}>{element}</li>;
                                        })}
                            </Box>
                        </Box>
                    );
                })}
            </Box>

            <Box>
                <Heading as="h2" size="md" textTransform="uppercase" mb={2}>
                    Technical Skills
                </Heading>
                <UnorderedList fontSize="sm">
                    {skill.split(",").map((item, index) => (
                        <ListItem key={index}>{item.trim()}</ListItem>
                    ))}
                </UnorderedList>
            </Box>
        </Box>
    );
};

export default Theme10;
