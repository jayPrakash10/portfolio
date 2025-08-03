import { Typography } from "@mui/material";

const SectionHeader = ({ title }) => {
  return (
    <Typography
      variant="h4"
      component="h2"
      sx={{
        mb: { xs: 2, md: 4 },
        fontWeight: 600,
        mx: "auto",
        textAlign: "center",
        fontSize: { xs: "2rem", sm: "3rem", lg: "4rem" },
        width: "fit-content",
        position: "relative",
        "&::after": {
          content: '" "',
          display: "inline-block",
          position: "absolute",
          bottom: -6,
          left: 0,
          width: { xs: "50px", sm: "70px", lg: "100px" },
          height: { xs: "5px", sm: "7px", lg: "10px" },
          backgroundColor: "error.dark",
          borderRadius: "0 5px 5px 0",
        },
      }}
    >
      {title}
    </Typography>
  );
};

export default SectionHeader;
