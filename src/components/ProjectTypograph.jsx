import { Typography } from "@mui/material";

const Header = ({ children }) => {
  return (
    <Typography
      variant="h4"
      fontWeight="bold"
      sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
    >
      {children}
    </Typography>
  );
};

const Paragraph = ({ children }) => {
  return (
    <Typography
      variant="body1"
      sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
    >
      {children}
    </Typography>
  );
};

const Ul = ({ children }) => {
  return <ul className="space-y-2 list-disc pl-6">{children}</ul>;
};

const Li = ({ children }) => {
  return (
    <li>
      <Typography
        variant="body1"
        sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
      >
        {children}
      </Typography>
    </li>
  );
};

export { Header, Paragraph, Li, Ul };
