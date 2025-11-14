import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ProgressBar() {
  const progress = 60; // Example: 60%

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          my: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="progress-head"
      >
        {/* ✅ Heading rendered correctly */}
        <Typography variant="h6" component="h2">
          Course Content
        </Typography>

        {/* ✅ Progress text */}
        <Typography variant="body2" component="span">
          <strong>{progress}% Completed</strong>
        </Typography>
      </Box>

      {/* ✅ Progress bar with custom color */}
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#23BD33",
          },
          backgroundColor: "#dcdcdc",
        }}
      />
    </Box>
  );
}
