import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

const ProjectCard = ({ project }) => {
  return (
    <Card
      component="a"
      href={`project/${project.id}`}
      rel="noopener noreferrer"
      sx={{
        borderRadius: 4,
        display: "block",
        height: "100%",
        cursor: "pointer",
      }}
      className="bg-zinc-50 dark:bg-neutral-900 text-black dark:text-white group/pCard"
    >
      <Box sx={{ mx: 2, mt: 2 }} className="overflow-hidden rounded-t-lg">
        <CardMedia
          component="img"
          image={project.images[0]}
          alt={project.name}
          sx={{
            height: { xs: 200, lg: 250, xl: 300 },
          }}
          className="group-hover/pCard:scale-110 transition-all duration-300"
        />
      </Box>
      <CardContent>
        <Stack gap={2}>
          <Typography variant="h5" component="div" color="info.light" fontWeight={600}>
            {project.name}
          </Typography>
          {project.shortDescription && (
            <Typography variant="body1" component="div" className="line-clamp-2">
              {project.shortDescription}
            </Typography>
          )}
          <Stack direction="row" gap={2} flexWrap="wrap">
            {Object.entries(project.technologies).map(([key, value]) => (
              <Chip key={key} label={value} color="secondary" />
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
