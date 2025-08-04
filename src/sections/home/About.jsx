import { Box, Grid, Typography } from "@mui/material";

// Material Icons
import {
  CalendarMonth,
  Email,
  LocationOn,
  Person,
  Phone,
} from "@mui/icons-material";

// Custom Components
import Section from "../../components/Section";
import ClickToCopy from "../../components/ClickToCopy";
import SkillCard from "../../components/SkillCard";
import SectionHeader from "../../components/SectionHeader";

// Common functions
import { calculateTimePeriod } from "../../utils/dateUtils";

// Misc
import { resumeData } from "../../data/resumeData";

// Hooks
import useThemeDetector from "../../hooks/useThemeDetector";

const About = () => {
  const isDarkTheme = useThemeDetector();

  const { personalInfo, skills, services } = resumeData;

  const age = calculateTimePeriod(personalInfo.dob);

  return (
    <Section id="about">
      <Box sx={{ pt: { xs: 2, md: 12 } }}>
        <SectionHeader title="About" />
        <Grid
          container
          columnSpacing={{ xs: 8, lg: 4 }}
          rowSpacing={{ xs: 8, xl: 12 }}
          pt={{ xs: 4, xl: 10 }}
          alignItems="start"
        >
          {/* Left Column - Summary */}
          <Grid size={{ xs: 12, xl: 6 }}>
            <Grid container sx={{ my: { xs: 2, xl: 4 }, px: 2 }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem" },
                }}
                dangerouslySetInnerHTML={{ __html: personalInfo.summary }}
              />
            </Grid>
          </Grid>

          {/* Right Column - Skills */}
          <Grid size={{ xs: 12, xl: 6 }} pt={{ xs: 6, xl: 0 }}>
            <Box px={{ xs: 0, lg: 6 }} my={4}>
              <Grid container gap={2} justifyContent="center">
                <Grid
                  size={4}
                  display="flex"
                  flexDirection="column"
                  gap={2}
                  width={{ xs: "fit-content", sm: "100%" }}
                  minWidth={"max-content"}
                  maxWidth={180}
                >
                  {skills.technical?.slice(0, 4).map((skill, index) => (
                    <SkillCard
                      key={index}
                      name={skill.name}
                      icon={isDarkTheme ? skill.icon.dark : skill.icon.light}
                    />
                  ))}
                </Grid>
                <Grid
                  size={4}
                  display="flex"
                  flexDirection="column"
                  gap={2}
                  width={{ xs: "fit-content", sm: "100%" }}
                  minWidth={"max-content"}
                  maxWidth={180}
                  sx={{ transform: "translateY(-65px)" }}
                >
                  {skills.technical?.slice(4, 8).map((skill, index) => (
                    <SkillCard
                      key={index}
                      name={skill.name}
                      icon={isDarkTheme ? skill.icon.dark : skill.icon.light}
                    />
                  ))}
                </Grid>
                <Grid
                  size={4}
                  display="flex"
                  flexDirection="column"
                  gap={2}
                  width={{ xs: "fit-content", sm: "100%" }}
                  minWidth={"max-content"}
                  maxWidth={180}
                >
                  {skills.technical?.slice(8).map((skill, index) => (
                    <SkillCard
                      key={index}
                      name={skill.name}
                      icon={isDarkTheme ? skill.icon.dark : skill.icon.light}
                    />
                  ))}
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* </Grid>

        Info
        <Grid
          container
          spacing={{ xs: 8, lg: 4 }}
          pt={{ xs: 2, xl: 6 }}
          alignItems="start"
        > */}
          {/* Left Column - Personal Info */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 4, p: 2 }}
            >
              {[
                {
                  icon: (
                    <Person
                      color="primary"
                      sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" } }}
                    />
                  ),
                  label: "Name",
                  value: personalInfo.name.fullName,
                },
                {
                  icon: (
                    <Email
                      color="primary"
                      sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" } }}
                    />
                  ),
                  label: "Email",
                  value: personalInfo.email,
                  clickToCopy: personalInfo.email,
                },
                {
                  icon: (
                    <Phone
                      color="primary"
                      sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" } }}
                    />
                  ),
                  label: "Phone",
                  value: personalInfo.phone.phoneNumber,
                  clickToCopy: personalInfo.phone.number,
                },
                {
                  icon: (
                    <CalendarMonth
                      color="primary"
                      sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" } }}
                    />
                  ),
                  label: "Age",
                  value: age.years,
                },
                {
                  icon: (
                    <LocationOn
                      color="primary"
                      sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" } }}
                    />
                  ),
                  label: "Location",
                  value: personalInfo.address.fullAddress,
                },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: { xs: 36, md: 44 },
                      aspectRatio: "1/1",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        lineHeight: 1.2,
                        mb: 0.5,
                        fontSize: "1rem",
                      }}
                    >
                      {item.label}
                    </Typography>
                    {item.clickToCopy ? (
                      <ClickToCopy
                        label={item.value}
                        copyText={item.clickToCopy}
                      />
                    ) : (
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 500,
                          fontSize: "1.2rem",
                        }}
                      >
                        {item.value}
                      </Typography>
                    )}
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Column - Services */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                mb: 4,
                textAlign: "center",
                textDecoration: "underline",
                textUnderlineOffset: "10px",
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              Things I can do
            </Typography>
            <Grid container spacing={3} sx={{ mt: 2 }}>
              {services.map((service, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <Box
                    sx={{
                      height: "100%",
                      maxWidth: { xs: 350, md: "100%" },
                      p: 3,
                      mx: "auto",
                      borderRadius: 2,
                      transition: "transform 0.3s, box-shadow 0.3s",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        mt: 1,
                        fontSize: {
                          xs: "1.5rem",
                          md: "1.5rem",
                          lg: "1.3rem",
                        },
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      fontSize={{ xs: "1.2rem", md: "1.2rem", lg: "1rem" }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Section>
  );
};

export default About;
