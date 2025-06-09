import React from "react";
import {
    Box,
    Text,
    Heading,
    Grid,
    VStack,
    List,
    ListItem,
    ListIcon,
    Divider,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import "./theme5.css";

const Theme5 = ({ componentRef, themeData }) => {
    const { personalData, educationData, workData } = themeData || {};

    const {
        name = "Your Name",
        profile = "Your Profile",
        address = "Your Address",
        phone = "1234567890",
        email = "email@example.com",
        summary = "Profile summary goes here.",
        skill = "",
        language = "",
    } = personalData || {};

    const educationTitles = educationData?.educationTitles || {};
    const educationDesc = educationData?.educationDesc || {};

    const workTitles = workData?.workTitles || {};
    const workDesc = workData?.workDesc || {};

    const sectionBoxStyle = {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        width: "100%",
        backgroundColor: "white",
    };

    return (
        <Box
            id="section-to-print"
            ref={componentRef}
            className="theme5-container"
            p={6}
            bg="#f9f9f9"
        >
            {/* Header */}
            <Box textAlign="center" mb={6}>
                <Heading as="h1" size="xl" fontWeight="bold">
                    {name}
                </Heading>
                <Text fontSize="lg" color="gray.600">
                    {profile}
                </Text>
            </Box>

            <Grid templateColumns={["1fr", null, "1fr 2fr"]} gap={8}>
                {/* Left Column */}
                <VStack align="stretch" spacing={6}>
                    {/* Contact */}
                    <Box {...sectionBoxStyle}>
                        <Heading size="sm" mb={3}>
                            Contact
                        </Heading>
                        <List spacing={2} fontSize="sm">
                            <ListItem>
                                <ListIcon as={MdPhone} /> {phone}
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdEmail} /> {email}
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdLocationOn} /> {address}
                            </ListItem>
                        </List>
                    </Box>

                    {/* Education */}
                    <Box {...sectionBoxStyle}>
                        <Heading size="sm" mb={3}>
                            Education
                        </Heading>
                        {Object.entries(educationTitles).map(([key, title], index) => (
                            <Box key={index} mt={2}>
                                <Text fontWeight="bold">{title}</Text>
                                <Text fontSize="sm">{educationDesc[key] || ""}</Text>
                            </Box>
                        ))}
                    </Box>

                    {/* Skills */}
                    <Box {...sectionBoxStyle}>
                        <Heading size="sm" mb={3}>
                            Skills
                        </Heading>
                        <List spacing={1} fontSize="sm">
                            {skill?.split(",").map((item, index) => (
                                <ListItem key={index}>• {item.trim()}</ListItem>
                            ))}
                        </List>
                    </Box>
                </VStack>

                {/* Right Column */}
                <VStack align="stretch" spacing={6}>
                    {/* Profile Summary */}
                    <Box {...sectionBoxStyle}>
                        <Heading size="sm" mb={3}>
                            Profile Summary
                        </Heading>
                        <Text fontSize="sm">{summary}</Text>
                    </Box>

                    {/* Work Experience */}
                    <Box {...sectionBoxStyle}>
                        <Heading size="sm" mb={3}>
                            Work Experience
                        </Heading>
                        {
                            Object.entries(workTitles).map((element, index) => {
                                return (
                                    <Box key={index} className="subBox">
                                        <Text className='sub-title'>{element[1]}</Text>
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
                </VStack>
            </Grid>
        </Box>
    );
};

export default Theme5;
