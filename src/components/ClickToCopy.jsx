import { useState } from "react";
import { Alert, Snackbar, Tooltip, Typography } from "@mui/material";

const ClickToCopy = ({ label, copyText }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setSnackbar({
        open: true,
        message: `Copied to clipboard!`,
        severity: "success",
      });
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Failed to copy to clipboard",
        severity: "error",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      <Tooltip title="Click to Copy">
        <Typography
          color="inherit"
          underline="hover"
          sx={{
            display: "block",
            fontWeight: 500,
            fontSize: "1.2rem",
            width: "fit-content",
            textDecoration: "underline",
            textUnderlineOffset: "6px",
            cursor: "pointer",
          }}
          onClick={() => copyToClipboard()}
        >
          {label}
        </Typography>
      </Tooltip>

      {/* Snackbar for copy notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ClickToCopy;
