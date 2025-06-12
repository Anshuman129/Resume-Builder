import React, { useContext } from "react";
import {
  Box,
  Text,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import "./theme8.css";
import ResumeContext from "../../Context/ResumeContext";

const Theme8 = (props) => {
  const { componentRef, themeData } = props;
  const { name, address, phone, email, profile, summary, skill, github, website } =
    themeData.personalData;

  const { checkProj, checkWork, checkAward } = useContext(ResumeContext);
  const { projectTitles, projectDesc } = themeData.projectData;
  const { educationTitles, educationDesc } = themeData.educationData;
  const { workTitles, workDesc } = themeData.workData;
  const { awards } = themeData.awardData;

  return (
    <Box id="section-to-print" ref={componentRef}>
      <Box id="theme8" paddingBlock={10} paddingInline={20}>
        {/* Header */}
        <header className="text-center d-flex justify-content-between align-items-center">
          <Box className="info-text text-start">
            <Heading as="h2" size="2xl" color="teal.700" fontFamily="serif">
              {name}
            </Heading>
            <Text fontWeight="600" fontSize="md" fontFamily="serif">
              {profile}
            </Text>
            <Box className="mt-2">
              <Text fontSize="sm">{address}</Text>
              <Text fontSize="sm">{phone}</Text>
              <Text fontSize="sm">{email}</Text>
              {github && <Text fontSize="sm">GitHub: {github}</Text>}
              {website && <Text fontSize="sm">Website: {website}</Text>}
            </Box>
          </Box>
        </header>

        <div className="w-100 border m-auto my-3"></div>

        {/* Summary */}
        <Box display="flex" className="w-full my-4">
          <Heading as="h3" size="md" minWidth={175} fontFamily="serif">
            Summary
          </Heading>
          <Box marginLeft={25}>
            <Text fontSize="sm" className="summary-text">
              {summary}
            </Text>
          </Box>
        </Box>

        {/* Work Experience */}
        {!checkWork && (
          <>
            <div className="w-100 border m-auto"></div>
            <Box display="flex" className="w-full my-4">
              <Heading as="h3" size="md" minWidth={175} fontFamily="serif">
                Experience
              </Heading>
              <Box marginLeft={25} width="100%">
                {Object.entries(workTitles).map((element, index) => (
                  <Box key={index} className="mt-1">
                    <Heading fontSize="md" fontFamily="serif" className="my-2">
                      {element[1]}
                    </Heading>
                    {Object.entries(workDesc)[index] &&
                      Object.entries(workDesc)[index][1].split(",").map((item, idx) => (
                        <p key={idx}>{item}</p>
                      ))}
                  </Box>
                ))}
              </Box>
            </Box>
          </>
        )}

        {/* Education */}
        <div className="w-100 border m-auto"></div>
        <Box display="flex" className="w-full my-4">
          <Heading as="h3" size="md" minWidth={175} fontFamily="serif">
            Education
          </Heading>
          <Box marginLeft={25} width="100%">
            {Object.entries(educationTitles).map((element, index) => (
              <Box key={index} className="mb-4">
                <Heading fontSize="md" fontFamily="serif" className="mb-2">
                  {element[1]}
                </Heading>
                {Object.entries(educationDesc)[index] &&
                  Object.entries(educationDesc)[index][1].split(",").map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Projects */}
        {!checkProj && (
          <>
            <div className="w-100 border m-auto"></div>
            <Box display="flex" className="w-full my-4">
              <Heading as="h3" size="md" minWidth={175} fontFamily="serif">
                Projects
              </Heading>
              <Box marginLeft={25} width="100%">
                {Object.entries(projectTitles).map((element, index) => (
                  <Box key={index} className="mt-1">
                    <Heading fontSize="md" fontFamily="serif" className="my-2">
                      {element[1]}
                    </Heading>
                    <Box className="sub-details">
                      {Object.entries(projectDesc)[index] &&
                        Object.entries(projectDesc)[index][1].split(",").map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </>
        )}

        {/* Skills */}
        <div className="w-100 border m-auto"></div>
        <Box display="flex" className="w-full my-4">
          <Heading as="h3" size="md" minWidth={175} fontFamily="serif">
            Skills
          </Heading>
          <Box marginLeft={25} width="100%">
            <Grid templateColumns="repeat(2, 1fr)" gap={5}>
              {skill.split(",").map((item, index) => (
                <GridItem key={index}>
                  <Box display="flex" alignItems="center">
                    <div
                      style={{
                        background: "black",
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        marginRight: "5px",
                      }}
                    ></div>
                    <p className="mx-1" fontFamily="serif">
                      {item}
                    </p>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Achievements */}
        {!checkAward && (
          <>
            <div className="w-100 border m-auto"></div>
            <Box display="flex" className="w-full my-4">
              <Heading as="h3" size="md" minWidth={175} fontFamily="serif">
                Achievements
              </Heading>
              <Box marginLeft={25} width="100%">
                <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                  {awards.split(",").map((item, index) => (
                    <GridItem key={index}>
                      <Box display="flex" alignItems="center">
                        <div
                          style={{
                            background: "black",
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            marginRight: "5px",
                          }}
                        ></div>
                        <p className="mx-1" fontFamily="serif">
                          {item}
                        </p>
                      </Box>
                    </GridItem>
                  ))}
                </Grid>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Theme8;
