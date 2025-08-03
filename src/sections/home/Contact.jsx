import { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Alert,
  Snackbar,
  Grid,
  Stack,
  Link,
} from "@mui/material";

// Material Icons
import { GitHub, LinkedIn, PhoneAndroid, WhatsApp, Send } from "@mui/icons-material";

// Custom Components
import Section from "../../components/Section";
import SectionHeader from "../../components/SectionHeader";

// Misc
import { resumeData } from "../../data/resumeData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const { personalInfo, links } = resumeData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll just simulate a successful submission
      console.log("Form submitted:", formData);

      // Simulate API call delay
      // await new Promise((resolve) => setTimeout(resolve, 1500));

      setOpenSnackbar({
        open: true,
        message: "Email Service not available, Try contacting through call or Whatsapp.",
        severity: "info",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setOpenSnackbar({
        open: true,
        message: "Failed to send message. Please try again later.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const slotProps = {
    input: { className: "text-black dark:text-white/80" },
    inputLabel: { className: "text-black dark:text-white/50" },
  };

  return (
    <Section id="contact">
      <SectionHeader title="Contact" />
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 10 } }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <Stack>
                <TextField
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  margin="normal"
                  slotProps={slotProps}
                />
                <TextField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  margin="normal"
                  slotProps={slotProps}
                />
                <TextField
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={6}
                  variant="outlined"
                  margin="normal"
                  slotProps={slotProps}
                />
                <Button
                  loading={loading}
                  loadingPosition="center"
                  type="submit"
                  variant="contained"
                  endIcon={!loading && <Send />}
                  sx={{
                    mt: 2,
                    py: 1.5,
                    maxWidth: "250px",
                    "&:hover": {
                      boxShadow: 3,
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack gap={2} py={6} width={"max-content"} mx="auto">
              <ContactLink
                icon={<PhoneAndroid sx={{ fontSize: "2rem" }} />}
                label="Call"
                href={personalInfo.phone.callURL}
              />
              <ContactLink
                icon={<WhatsApp sx={{ fontSize: "2rem" }} />}
                label="WhatsApp"
                href={personalInfo.phone.whatsappURL}
              />
              <ContactLink
                icon={<GitHub sx={{ fontSize: "2rem" }} />}
                label="GitHub"
                href={links.github}
              />
              <ContactLink
                icon={<LinkedIn sx={{ fontSize: "2rem" }} />}
                label="LinkedIn"
                href={links.linkedin}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={openSnackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={openSnackbar.severity}
          sx={{ width: "100%" }}
        >
          {openSnackbar.message}
        </Alert>
      </Snackbar>
    </Section>
  );
};

const ContactLink = ({ icon, label, href }) => {
  return (
    <Link
      href={href}
      target="_blank"
      color="secondary"
      sx={{
        width: "fit-content",
        fontSize: "1.75rem",
        textDecoration: "none",
      }}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        {icon}
        {label}
      </Stack>
    </Link>
  );
};

export default Contact;
