import React, { useContext } from "react";
import {
    Box,
    Text,
    Heading,
    Grid,
    List,
    ListItem,
    Divider,
} from "@chakra-ui/react";
import "./theme6.css";
import ResumeContext from "../../Context/ResumeContext";

const Theme6 = ({ componentRef, themeData }) => {
    const {
        name,
        summary,
        profile,
        address,
        phone,
        email,
        skill,
    } = themeData.personalData;

    const { checkProj, checkWork, checkAward } = useContext(ResumeContext);
    const { projectTitles, projectDesc } = themeData.projectData;
    const { educationTitles, educationDesc } = themeData.educationData;
    const { workTitles, workDesc } = themeData.workData;
    const { awards } = themeData.awardData;

    return (
        <Box ref={componentRef} className="theme6-container">
            <Grid templateColumns="1fr 2fr" gap={10}>
                {/* LEFT SIDE */}
                <Box className="theme6-left">
                    <Heading size="lg" className="theme6-name">
                        {name?.toUpperCase()}
                    </Heading>
                    <Text className="theme6-title">{profile}</Text>
                    <Divider className="theme6-divider" />

                    <Box className="theme6-section">
                        <Text className="section-title">Contact</Text>
                        <Text className="contact-item">📞 {phone}</Text>
                        <Text className="contact-item">✉️ {email}</Text>
                        <Text className="contact-item">📍 {address}</Text>
                    </Box>

                    <Box className="theme6-section">
                        <Text className="section-title">Skills</Text>
                        <List spacing={1}>
                            {skill.split(",").map((s, i) => (
                                <ListItem key={i}>• {s.trim()}</ListItem>
                            ))}
                        </List>
                    </Box>

                    <Box className="theme6-section">
                        <Text className="section-title">Languages</Text>
                        <Text>English (Fluent)</Text>
                    </Box>


                </Box>

                {/* RIGHT SIDE */}
                <Box className="theme6-right">
                    <Box className="theme6-section">
                        <Box className="icon-title">
                            <span className="icon">👤</span>
                            <Text className="section-title">Profile</Text>
                        </Box>
                        <Text className="section-text">{summary}</Text>
                    </Box>

                    {!checkWork && (
                        <Box className="theme6-section">
                            <Box className="icon-title">
                                <span className="icon">💼</span>
                                <Text className="section-title">Work Experience</Text>
                            </Box>
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
                    )}

                    {!checkProj && (
                        <Box className="theme6-section">
                            <Box className="icon-title">
                                <span className="icon">🛠️</span>
                                <Text className="section-title">Projects</Text>
                            </Box>
                            {
                                Object.entries(projectTitles).map((element, index) => {
                                    return (
                                        <Box key={index} className="subBox">
                                            <Text className='sub-title'>{element[1]}</Text>
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
                    )}

                    <Box className="theme6-section">
                        <Box className="icon-title">
                            <span className="icon">🎓</span>
                            <Text className="section-title">Education</Text>
                        </Box>
                        {
                            Object.entries(educationTitles).map((element, index) => {
                                return (
                                    <Box key={index} className="subBox">
                                        <Text className='sub-title'>{element[1]}</Text>
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

                    {!checkAward && (
                        <Box className="theme6-section">
                            <Box className="icon-title">
                                <span className="icon">🏆</span>
                                <Text className="section-title">Awards</Text>
                            </Box>
                            <List spacing={1}>
                                {awards.split(",").map((award, idx) => (
                                    <ListItem key={idx}>• {award.trim()}</ListItem>
                                ))}
                            </List>
                        </Box>
                    )}
                </Box>
            </Grid>
        </Box>
    );
};

export default Theme6;
