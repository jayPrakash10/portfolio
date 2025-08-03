import { Box, Button, Grid, Stack } from "@mui/material";

// Custom Components
import ProjectCard from "../../components/ProjectCard";
import Section from "../../components/Section";
import SectionHeader from "../../components/SectionHeader";

// Misc
import { resumeData } from "../../data/resumeData";

const Projects = () => {
  const { projects } = resumeData;

  return (
    <Section id="projects">
      <SectionHeader title="Projects" />

      <Stack mt={10}>
        <Grid container spacing={2}>
          {projects.slice(0, 6).map((project) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Stack>

      {projects.length > 6 && (
        <Box sx={{ textAlign: "center" }}>
          <Button
            component={"a"}
            href="project"
            variant="contained"
            color="primary"
            sx={{ mt: 10 }}
          >
            View All Projects
          </Button>
        </Box>
      )}
    </Section>
  );
};

export default Projects;
