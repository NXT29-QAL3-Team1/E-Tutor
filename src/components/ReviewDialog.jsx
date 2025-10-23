import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Rating,
  Typography,
  TextField,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ReviewDialog({ open, onClose }) {
  const [rating, setRating] = useState(4.5);
  const [feedback, setFeedback] = useState("");

  return (
    <Dialog open={open} onClose={onClose} sx={{maxWidth: "450px", margin: " 0 auto"}} fullWidth>
      {/* Title with Close Icon */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={2}
        py={1}
      >
        <DialogTitle sx={{ m: 0, p: 0 }}>Write a Review</DialogTitle>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent>
        {/* Rating Display */}
        <Box textAlign="center" my={2}>
          <Typography variant="h6">
            {rating} <span style={{ color: "#777" }}>(Good/Amazing)</span>
          </Typography>
          <Rating
            value={rating}
            precision={0.5}
            onChange={(e, newValue) => setRating(newValue)}
            sx={{ fontSize: "2rem", color: "#FF6636" }}
          />
        </Box>

        {/* Feedback Input */}
        <Typography variant="body2" sx={{ mb: 1 }}>
          Feedback
        </Typography>
        <TextField
          placeholder="Write down your feedback here..."
          multiline
          rows={4}
          fullWidth
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </DialogContent>

      {/* Buttons */}
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FF6636",
            "&:hover": { backgroundColor: "#e45a2d" },
          }}
        >
          Submit Review ➤
        </Button>
      </DialogActions>
    </Dialog>
  );
}
