import React, { useContext } from "react";
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import ResumeContext from "../../Context/ResumeContext";
import "./theme7.css";

const Theme7 = ({ componentRef }) => {
  const { themeData } = useContext(ResumeContext);
  const { name, address, phone, email, profile, summary, skill } = themeData.personalData;
  const { educationTitles, educationDesc } = themeData.educationData;
  const { workTitles, workDesc } = themeData.workData;
  const { projectTitles, projectDesc } = themeData.projectData;

  return (
    <Box ref={componentRef} className="theme7-main">
      {/* Header */}
      <Box className="theme7-header">
        <Box>
          <Heading fontSize="3xl" fontWeight="normal">{
            name?.split(" ")[0] || "YOUR NAME"
          }</Heading>
          
        </Box>
        <Box className="theme7-contact">
          <Text>{address}</Text>
          <Text>{phone}</Text>
          <Text>{email}</Text>
          <Text>{profile}</Text>
        </Box>
      </Box>

      {/* Objective */}
      <Box className="theme7-section">
        <Text className="theme7-icon">☷</Text>
        <Heading className="theme7-title">OBJECTIVE</Heading>
        <Text>{summary}</Text>
      </Box>

      {/* Education */}
      <Box className="theme7-section">
        <Text className="theme7-icon">✎</Text>
        <Heading className="theme7-title">EDUCATION</Heading>
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

      {/* Experience */}
      <Box className="theme7-section">
        <Text className="theme7-icon">⚒</Text>
        <Heading className="theme7-title">EXPERIENCE</Heading>
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

      {/* Skills */}
      <Box className="theme7-section">
        <Text className="theme7-icon">⚙</Text>
        <Heading className="theme7-title">SKILLS</Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={2}>
          {skill.split(",").map((s, idx) => (
            <GridItem key={idx}>
              <Text fontSize="sm">• {s.trim()}</Text>
            </GridItem>
          ))}
        </Grid>
      </Box>

      {/* Activities (Projects) */}
      <Box className="theme7-section">
        <Text className="theme7-icon">✦</Text>
        <Heading className="theme7-title">PROJECTS</Heading>
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
    </Box>
  );
};

export default Theme7;

