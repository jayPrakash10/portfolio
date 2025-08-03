import { Box, Typography } from "@mui/material";

const SkillCard = ({ name, icon }) => {
  return (
    <Box
      sx={{
        p: { xs: 1, sm: 2 },
        borderRadius: 2,
        border: "2px solid #ccc",
        textAlign: "center",
        boxShadow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        width: { xs: 100, sm: "auto" },
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 3,
        },
      }}
    >
      <Box
        component="img"
        src={icon}
        alt={name}
        sx={{
          width: "auto",
          height: { xs: 30, sm: 40, md: 50 },
          mb: 1,
          objectFit: "contain",
        }}
      />
      <Typography
        variant="body2"
        sx={{ fontWeight: 500 }}
        fontSize={{ xs: 12, sm: 16, md: 20 }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default SkillCard;
