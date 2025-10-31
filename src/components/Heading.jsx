import React from "react";
import DescriptionIcon from "@mui/icons-material/Description"; 
import { Button } from "@mui/material";
export default function Heading({ handleOpen }) {
  return (
    <div className="heading">
      <h2>2. Sign up in Webflow</h2>
      <p className="date">
        Last updated: <span>Oct 19,2025</span>
      </p>
      <div className="description">
        <h3>Lecture Description</h3>
        <p>
          We cover everything you need to build your first website. From
          creating your first page through to uploading your website to the
          internet. We’ll use the world’s most popular (and free) web design
          tool called Visual Studio Code.
        </p>
        <p>
          If that all sounds a little too fancy - don’t worry, this course is
          aimed at people new to web design and who have never coded before.
          We’ll start right at the beginning and work our way through step by
          step.
        </p>
      </div>
      <div className="attach-file">
        <h3>Lecture Files (01)</h3>
        <div className="file">
          <div className="details-file">
            <DescriptionIcon className="icon-file" />
            <p>Create account on webflow.pdf</p>
            <span>12.6 MB</span>
          </div>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF6636",
              width: "fit-content",
              padding: "8px 12px",
              fontSize: "14px",
              "&:hover": { backgroundColor: "#e45a2d" },
            }}
          >
            Download File
          </Button>
        </div>
      </div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FF6636",
          width: "fit-content",
          padding: "8px 12px",
          fontSize: "14px",
          "&:hover": { backgroundColor: "#e45a2d" },
        }}
        onClick={handleOpen}
      >
        Write A Review
      </Button>
    </div>
  );
}
