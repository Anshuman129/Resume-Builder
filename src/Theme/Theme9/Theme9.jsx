import React, { useContext } from "react";
import { Box, Heading, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import ResumeContext from "../../Context/ResumeContext";
import "./theme9.css";

const Theme9 = ({ componentRef, themeData }) => {
    const {
        name,
        profile,
        phone,
        email,
        address,
        github,
        website,
        summary,
        skill,
        profileImage,
    } = themeData.personalData;

    const { checkProj, checkWork, checkAward } = useContext(ResumeContext);
    const { projectTitles, projectDesc } = themeData.projectData;
    const { educationTitles, educationDesc } = themeData.educationData;
    const { workTitles, workDesc } = themeData.workData;
    const { awards } = themeData.awardData;

    return (
        <Box ref={componentRef} className="theme9-container">
            <Box className="left-panel">
                {/* Profile */}
                <Box className="profile-img-wrapper" display="flex" justifyContent="center" alignItems="center" mb={4}>
                    <Image
                        id="resume-avatar"
                        borderRadius="full"
                        boxSize="130px"
                        src={profileImage}
                        alt="Profile Picture"
                        objectFit="cover"
                        border="3px solid white"
                    />
                </Box><Box className="profile-section">
                    <Text className="name">{name}</Text>
                    <Text className="title">{profile}</Text>
                </Box>


                {/* Contact Info */}
                <Box className="section">
                    <Heading size="sm" className="section-heading">Contact Details</Heading>
                    <Text>{email}</Text>
                    <Text>{phone}</Text>
                    <Text>{address}</Text>
                </Box>



                {/* Skills */}
                <Box className="section">
                    <Heading size="sm" className="section-heading">Skills</Heading>
                    {skill.split(",").map((s, i) => (
                        <li key={i}>{s}</li>
                    ))}
                </Box>
            </Box>

            <Box className="right-panel">
                {/* Experience */}
                {!checkWork && (
                    <Box className="section">
                        <Heading size="md" className="section-heading">Experience</Heading>
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
                )}

                {/* Education */}
                <Box className="section">
                    <Heading size="md" className="section-heading">Education</Heading>
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

                <Box className="section">
                    <Heading size="md" className="section-heading">Projects</Heading>
                    {
                        Object.entries(projectTitles).map((element, index) => {
                            return (
                                <Box key={index} className="mt-1">
                                    <Heading fontSize='md' className='my-2'>{element[1]}</Heading>
                                    <Box className='sub-details'>
                                        {
                                            (Object.entries(projectDesc)[index] === undefined)
                                                ?
                                                null
                                                :
                                                Object.entries(projectDesc)[index][1].split(',').map((element, index) => {
                                                    return <li key={index}>{element}</li>
                                                })
                                        }
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Box>

                {/* Certifications */}
                {!checkAward && (
                    <Box className="section">
                        <Heading size="md" className="section-heading">Certifications</Heading>
                        {awards.split(",").map((cert, i) => (
                            <Text key={i}>◇ {cert}</Text>
                        ))}
                    </Box>
                )}


            </Box>
        </Box>
    );
};

export default Theme9;
