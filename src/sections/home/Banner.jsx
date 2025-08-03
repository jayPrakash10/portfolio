import { TypeAnimation } from "react-type-animation";
import { Box, Grid, Typography, Stack, IconButton } from "@mui/material";

// Material Icons
import { Download, GitHub, LinkedIn } from "@mui/icons-material";

// Custom Components
import Section from "../../components/Section";
import SocialButton from "../../components/SocialButton";

// Misc
import BG from "../../assets/bg-dev.jpg";
import { resumeData } from "../../data/resumeData";

const Banner = () => {
  const { personalInfo, links } = resumeData;

  return (
    <Section id="home" bgImage={BG}>
      <Grid container spacing={{ xs: 8, lg: 4 }} sx={{ py: { xs: 4, md: 0 } }} alignItems="center">
        {/* Left Section - Content */}
        <Grid
          size={{ xs: 12, lg: 6 }}
          display={{ xs: "flex", lg: "block" }}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="p"
              component="p"
              sx={{
                mb: 2,
                color: "white",
                fontSize: { xs: "1.75rem", sm: "2rem", md: "3rem" },
              }}
            >
              Hi,
            </Typography>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: "white",
                fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
                lineHeight: 1.2,
              }}
            >
              <span className="text-3xl lg:text-4xl font-normal">I'm</span>{" "}
              {personalInfo.name.firstName}
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: "info.main",
                mb: 3,
                fontWeight: 500,
                fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
              }}
            >
              <TypeAnimation
                sequence={[
                  1000,
                  "Frontend Developer",
                  1000,
                  "Backend Developer",
                  1000,
                  "Web Developer",
                ]}
                preRenderFirstString={true}
                repeat={Infinity}
              />
            </Typography>
          </Box>

          {/* Social Links */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ mb: 4 }}
            width={"fit-content"}
          >
            <SocialButton link={links.github} children={<GitHub />} />
            <SocialButton link={links.linkedin} children={<LinkedIn />} />
            <IconButton
              component="a"
              href={links.resume}
              rel="noopener noreferrer"
              color="primary"
              sx={{
                gap: 1,
                px: 2,
                borderRadius: "50px",
                backgroundColor: "primary.main",
                color: "white",
                "&:hover": {
                  backgroundColor: "primary.dark",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.2s ease-in-out",
                boxShadow: "0 4px 12px rgba(33, 150, 243, 0.3)",
              }}
            >
              <Download fontSize="small" /> <p className="text-lg leading-none font-semibold">Resume</p>
            </IconButton>
          </Stack>
        </Grid>

        {/* Right Section - Profile Image */}
        <Grid size={{ xs: 12, lg: 6 }}>
          {personalInfo.profileImage && (
            <Box
              sx={{
                position: "relative",
                maxWidth: { xs: "200px", sm: "300px", lg: "450px" },
                mx: "auto",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  border: "2px solid",
                  borderColor: "primary.main",
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                  top: "20px",
                  left: "20px",
                  zIndex: 1,
                  transition: "all 0.3s ease",
                  "@media (max-width: 600px)": {
                    top: "10px",
                    left: "10px",
                  },
                },
                "&:hover::before": {
                  top: "15px",
                  left: "15px",
                  "@media (max-width: 600px)": {
                    top: "5px",
                    left: "5px",
                  },
                },
              }}
            >
              <Box
                component="img"
                src={personalInfo.profileImage}
                alt={personalInfo.fullName}
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                  position: "relative",
                  zIndex: 2,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  border: "5px solid white",
                  objectFit: "cover",
                  aspectRatio: "1/1",
                }}
              />
            </Box>
          )}
        </Grid>
      </Grid>
    </Section>
  );
};

export default Banner;
