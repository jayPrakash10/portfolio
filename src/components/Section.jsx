import { Box, Container } from "@mui/material";

const Section = ({ id, bgImage, children }) => {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        py: { xs: 6, md: 0 },
        "&::after": bgImage && {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          filter: "blur(4px)",
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="xl">
        {children}
      </Container>
    </Box>
  );
};

export default Section;
