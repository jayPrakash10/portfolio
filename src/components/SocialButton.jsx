import { IconButton } from "@mui/material";

const SocialButton = ({ link, children }) => {
  return (
    <IconButton
      component="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      color="primary"
      sx={{
        border: "2px solid",
        borderColor: "primary.light",
        color: "primary.light",
        "&:hover": {
          transform: "translateY(-2px)",
        },
        transition: "all 0.2s ease-in-out",
      }}
    >
      {children}
    </IconButton>
  );
};

export default SocialButton;
