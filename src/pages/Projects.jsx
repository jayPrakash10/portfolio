import { lazy } from "react";
import { Box, Grid, Stack } from "@mui/material";

// Custom Components
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";

// Misc
import { resumeData } from "../data/resumeData";

// Lazy load Sections
const Contact = lazy(() => import("../sections/home/Contact"));

const Projects = () => {
  const { projects } = resumeData;

  return (
    <>
      <Section id="all-projects">
        <Box sx={{ py: { xs: 2, md: 12 } }}>
          <SectionHeader title="Projects" />

          <Stack mt={10}>
            <Grid container spacing={2}>
              {projects.map((project) => (
                <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <ProjectCard project={project} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Box>
      </Section>
      <Contact />
    </>
  );
};

export default Projects;
