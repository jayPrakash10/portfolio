import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Divider,
} from "@mui/material";

// Material Icons
import {
  Code,
  ContactMail,
  Download,
  Menu as MenuIcon,
  Person,
  Work,
} from "@mui/icons-material";

// Misc
import { resumeData } from "../data/resumeData";
import Logo from "../assets/JPL.png";

const handleClick = (to) => {
  const element = document.querySelector(to);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const Navigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (to) => {
    to && handleClick(to);
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        className="bg-slate-100 dark:bg-zinc-800 text-black dark:text-white"
      >
        <Toolbar sx={{ justifyContent: "space-between", py: { xs: 1, md: 2 } }}>
          {/* Left section - Logo */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 0 }}>
            <img src={Logo} alt="Logo" width={40} height={40} />
          </Box>

          {/* Center section - Navigation Links */}
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Box sx={{ display: "flex", gap: 4 }}>
              <NavItem to="#about">About</NavItem>
              <NavItem to="#experience">Experience</NavItem>
              <NavItem to="#projects">Projects</NavItem>
              <NavItem to="#contact">Contact</NavItem>
            </Box>
          </Box>

          {/* Right section */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <DownloadButton url={resumeData.links.resume} />
          </Box>

          {/* Mobile menu button */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              color="inherit"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={open}
              onClose={() => handleClose()}
              slotProps={{
                paper: {
                  sx: {
                    width: 200,
                    borderRadius: 2,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                    mt: 1,
                  },
                },
              }}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MItem onClick={() => handleClose("#about")} to="#about">
                <Person sx={{ fontSize: 20 }} />
                About
              </MItem>
              <MItem
                onClick={() => handleClose("#experience")}
                to="#experience"
              >
                <Work sx={{ fontSize: 20 }} />
                Experience
              </MItem>
              <MItem onClick={() => handleClose("#projects")} to="#projects">
                <Code sx={{ fontSize: 20 }} />
                Projects
              </MItem>
              <MItem onClick={() => handleClose("#contact")} to="#contact">
                <ContactMail sx={{ fontSize: 20 }} />
                Contact
              </MItem>
              <Divider />
              <MItem onClick={handleClose} to={resumeData.links.resume}>
                <Download sx={{ fontSize: 20 }} />
                Resume
              </MItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar
        sx={{ justifyContent: "space-between", py: { xs: 1, md: 4.4 } }}
      />
    </>
  );
};

const NavItem = ({ to, children }) => {
  return (
    <Link to={to} onClick={() => handleClick(to)}>
      <Typography
        variant="h6"
        sx={{
          fontSize: "1.5rem",
          fontWeight: 500,
          transition: "all 0.3s ease",
          "&:hover": {
            color: "primary.light",
            transform: "translateY(-2px)",
          },
        }}
      >
        {children}
      </Typography>
    </Link>
  );
};

const MItem = ({ to, children, onClick }) => (
  <MenuItem
    onClick={onClick}
    component={Link}
    to={to}
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1.5,
      px: 2,
      "&:hover": {
        bgcolor: "rgba(33, 150, 243, 0.1)",
      },
    }}
  >
    {children}
  </MenuItem>
);

const DownloadButton = ({ url }) => (
  <Button
    className="rounded-full"
    variant="contained"
    color="primary"
    startIcon={<Download />}
    sx={{
      textTransform: "none",
      fontSize: "15px",
      px: 3,
      "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: "0 4px 12px rgba(33, 150, 243, 0.3)",
      },
    }}
    component={Link}
    to={url}
  >
    Resume
  </Button>
);

export default Navigation;
