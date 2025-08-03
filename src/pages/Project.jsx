import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";

// Material Icons
import {
  GitHub,
  Link as LinkIcon,
  NavigateBefore,
  NavigateNext,
  OpenInNew,
} from "@mui/icons-material";

// Misc
import { resumeData } from "../data/resumeData";

const Project = () => {
  const { projects } = resumeData;

  const { id } = useParams();

  const project = projects.find((project) => project.id === id);

  return (
    <Box
      sx={{ minHeight: "100vh", py: { xs: 6, lg: 10 }, px: { xs: 2, sm: 4 } }}
    >
      {project.logo ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={project.logo}
            alt={project.name}
            className="h-[50px] lg:h-[100px] drop-shadow-[0_0_60px_#000000] drop-shadow-black dark:drop-shadow-white"
          />
        </Box>
      ) : (
        <Typography
          variant="h3"
          textAlign="center"
          className="drop-shadow-[0_0_60px_#000000] drop-shadow-black dark:drop-shadow-white"
          sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
        >
          {project.name}
        </Typography>
      )}

      <Box
        sx={{
          py: { xs: 6, md: 8 },
        }}
      >
        {/* Image Carousel */}
        <Carousel
          autoPlay
          infiniteLoop
          interval={2000}
          showIndicators={false}
          showStatus={false}
          renderArrowPrev={(clickHandler) => (
            <Button
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                minWidth: "fit-content",
              }}
              onClick={clickHandler}
            >
              <NavigateBefore fontSize="large" />
            </Button>
          )}
          renderArrowNext={(clickHandler) => (
            <Button
              sx={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                minWidth: "fit-content",
              }}
              onClick={clickHandler}
            >
              <NavigateNext fontSize="large" />
            </Button>
          )}
          emulateTouch
          renderThumbs={(image) =>
            project.images.map((image) => (
              <img
                key={image}
                src={image}
                alt={project.name}
                className="h-[50px] !w-auto"
              />
            ))
          }
        >
          {project.images.map((image) => (
            <div key={image}>
              <img
                src={image}
                alt={project.name}
                className="h-[200px] sm:h-[300px] lg:h-[600px] !w-auto"
              />
            </div>
          ))}
        </Carousel>
      </Box>

      <Container container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
        <Stack direction="row" gap={4} flexWrap="wrap">
          {project.technologies.frontend ? (
            <Technologies
              label="Frontend"
              tech={project.technologies.frontend}
            />
          ) : null}
          {project.technologies.styling ? (
            <Technologies label="Styling" tech={project.technologies.styling} />
          ) : null}
          {project.technologies.backend ? (
            <Technologies label="Backend" tech={project.technologies.backend} />
          ) : null}
          {project.technologies.database ? (
            <Technologies label="Database" tech={project.technologies.database} />
          ) : null}
        </Stack>

        <br />

        {project.website || project.github ? (
          <Stack
            direction="row"
            gap={2}
            alignItems="center"
            justifyContent="space-around"
            sx={{ py: 2 }}
          >
            {project.website ? (
              <URLButton
                url={project.website}
                label="Visit Website"
                icon={
                  <LinkIcon sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }} />
                }
              />
            ) : null}
            {project.github ? (
              <URLButton
                url={project.github}
                label="Source Code"
                icon={
                  <GitHub sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }} />
                }
              />
            ) : null}
          </Stack>
        ) : null}

        <br />

        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
        >
          {project.description}
        </Typography>
      </Container>
    </Box>
  );
};

const Technologies = ({ label, tech }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <Typography variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}>
      {label}:
    </Typography>{" "}
    <Typography
      variant="body1"
      color="secondary"
      sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
    >
      {tech}
    </Typography>
  </Box>
);

const URLButton = ({ url, label, icon }) => (
  <Link
    href={url}
    target="_blank"
    color="primary"
    sx={{ fontSize: { xs: "1rem", md: "1.5rem" }, textDecoration: "none" }}
    rel="noopener noreferrer"
  >
    <Stack direction="row" alignItems="center" gap={1}>
      {icon}
      {label}
      <OpenInNew fontSize="small" />
    </Stack>
  </Link>
);

export default Project;
