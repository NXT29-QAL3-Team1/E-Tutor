import {
  Box,
  Typography,
  Button,
  TextField,
  Divider,
  Container,
  Paper,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AddIcon from "@mui/icons-material/Add";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useState } from "react";

export default function AdvancedInformation({ onChange }) {

  const [additional, setAdditional] = useState({
    thumbnail: '',
    trailer: '',
    details: '',
    for: '',
    requirement: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updated = { ...additional, [name]: value };
    setAdditional(updated);

    // send updated object to parent
    onChange(updated);
  };

  return (
    <Paper elevation={0} sx={{ p: 4, borderRadius: 3 }}>
      {/* ---------- Upload Section ---------- */}
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1030px", // ✅ أقصى عرض
          mx: "auto",
          mt: 0,
          mb: 6,
          px: 2,
        }}
      >
        {/* Wrapper Flex container */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // ✅ علشان ينزلوا تحت بعض على الشاشات الصغيرة
            gap: "2.5rem",
            justifyContent: "space-between",
          }}
        >

          {/* thumbnail */}
          <Box
            sx={{
              flex: "1 1 48%", // ✅ عمودين في الشاشات الكبيرة
              minWidth: { xs: "100%", sm: "48%" }, // ✅ عمود واحد في الموبايل
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, fontSize: "18px", mb: 1 }}
            >
              Course Thumbnail
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, // ✅ مرن
                alignItems: "flex-start",
                gap: 2,
                width: "100%",
              }}
            >
              {/* Upload Box */}
              <Box
                sx={{
                  border: "1px dashed #ccc",
                  borderRadius: 2,
                  textAlign: "center",
                  p: 3,
                  backgroundColor: "#F5F7FA",
                  minWidth: { xs: "100%", sm: "140px" },
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <CloudUploadIcon sx={{ fontSize: 50, color: "#ccc" }} />
              </Box>

              {/* Description + Button */}
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", color: "text.secondary" }}
                  mb={1}
                >
                  Upload your course Thumbnail here.{" "}
                  <strong>Important guidelines:</strong> 1200×800px or 12:8
                  Ratio. Supported format: <strong>.jpg, .jpeg, .png</strong>
                </Typography>

                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    mt: 2,
                    textTransform: "none",
                    backgroundColor: "#FFEEE8",
                    color: "#ff5b1a",
                    fontSize: "12px",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: ".8rem",
                    width: "fit-content",
                    "&:hover": { backgroundColor: "#FFD2C5" },
                  }}
                >
                  Upload Image
                  <UploadFileIcon />
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    name="thumbnail"
                    onChange={(e) => handleChange({
                      target: {
                        name: "thumbnail",
                        value: e.target.files[0]
                      }
                    })}
                  />
                </Button>
              </Box>
            </Box>
          </Box>

          {/* Video Upload */}
          <Box
            sx={{
              flex: "1 1 48%",
              minWidth: { xs: "100%", sm: "48%" },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, fontSize: "18px", mb: 1 }}
            >
              Course Trailer
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "flex-start",
                gap: 2,
                width: "100%",
              }}
            >
              {/* Upload Box */}
              <Box
                sx={{
                  border: "1px dashed #ccc",
                  borderRadius: 2,
                  textAlign: "center",
                  p: 3,
                  backgroundColor: "#F5F7FA",
                  minWidth: { xs: "100%", sm: "140px" },
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <PlayCircleOutlineIcon sx={{ fontSize: 50, color: "#ccc" }} />
              </Box>

              {/* Description + Button */}
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", color: "text.secondary" }}
                  mb={1}
                >
                  Students who watch a well-made promo video are 5× more likely
                  to enroll in your course.
                </Typography>

                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    mt: 2,
                    textTransform: "none",
                    backgroundColor: "#FFEEE8",
                    color: "#ff5b1a",
                    fontSize: "12px",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: ".8rem",
                    width: "fit-content",
                    "&:hover": { backgroundColor: "#FFD2C5" },
                  }}
                >
                  Upload Video
                  <UploadFileIcon />
                  <input
                    type="file"
                    hidden
                    accept="video/*"
                    name="trailer"
                    onChange={(e) => handleChange({
                      target: {
                        name: "trailer",
                        value: e.target.files[0]
                      }
                    })}
                  />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* ---------- Course Description ---------- */}
      <Box mt={3}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "600",
            fontSize: "18px",
            marginBottom: "1px",
          }}
        >
          Course Description
        </Typography>
        <TextField
          multiline
          fullWidth
          rows={5}
          placeholder="Enter your course descriptions"
          variant="outlined"
          name="details"
          value={additional.details}
          onChange={handleChange}
        />
      </Box>

      <Divider sx={{ my: 4, backgroundColor: "#E9EAF0" }} />

      {/* ---------- What You Will Teach ---------- */}
      <Box mb={2}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "1rem 0px",
          }}
        >
          <Typography variant="subtitle1" fontSize={14} fontWeight={600}>
            Who this course is for
          </Typography>
          <Button startIcon={<AddIcon />} sx={{ mt: 1, color: "#FF6F3C" }}>
            Add new
          </Button>
        </Box>
        <TextField
          fullWidth
          placeholder="Who this course is for..."
          variant="outlined"
          name="for"
          value={additional.for}
          onChange={handleChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              height: "40px",
              fontSize: "14px",
              "& fieldset": {
                borderColor: "#ccc", // color border
              },
              "&:hover fieldset": {
                borderColor: "#999",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#ff5b1a", // color border hover
              },
            },
            "& .MuiOutlinedInput-input": {
              border: "none",
              outline: "none",
              padding: "0px 12px",
              fontSize: "14px",
              "&::placeholder": {
                fontSize: "13px",
                color: "#9e9e9e",
                opacity: 1,
              },
            },
          }}
        />
      </Box>

      <Divider sx={{ my: 4, backgroundColor: "#E9EAF0" }} />

      {/* ---------- Target Audience ---------- */}
      <Box mb={2}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "1rem 0px",
          }}
        >
          <Typography variant="subtitle1" fontSize={14} fontWeight={600}>
            Course requirements
          </Typography>
          <Button startIcon={<AddIcon />} sx={{ mt: 1, color: "#FF6F3C" }}>
            Add new
          </Button>
        </Box>
        <TextField
          fullWidth
          placeholder="Course requirements..."
          variant="outlined"
          name="requirement"
          value={additional.requirement}
          onChange={handleChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              height: "40px",
              fontSize: "14px",
              "& fieldset": {
                borderColor: "#ccc", // color border
              },
              "&:hover fieldset": {
                borderColor: "#999",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#ff5b1a", // color border hover
              },
            },
            "& .MuiOutlinedInput-input": {
              border: "none",
              outline: "none",
              padding: "0px 12px",
              fontSize: "14px",
              "&::placeholder": {
                fontSize: "13px",
                color: "#9e9e9e",
                opacity: 1,
              },
            },
          }}
        />
      </Box>
      <Divider sx={{ my: 4, backgroundColor: "#E9EAF0" }} />

    </Paper>
  );
}
