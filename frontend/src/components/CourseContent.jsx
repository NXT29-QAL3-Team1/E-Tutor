import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  Checkbox,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const CourseSection = ({
  id,
  title,
  lectures,
  duration,
  progress,
  expanded,
  onChange,
}) => {
  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      sx={{
        borderRadius: 0,
        boxShadow: "none",
        borderBottom: "1px solid #eee",
        "&:before": { display: "none" },
      }}
    >
      <AccordionSummary
        sx={{
          flexDirection: "row",
          borderRadius: 0,
          backgroundColor: "#F5F7FA",
          height: "50px",
          "& .MuiAccordionSummary-content": {
            width: "100%",
            margin: 0,
            alignItems: "center",
          },
        }}
      >
        <Stack direction="row" alignItems="center" sx={{ flexGrow: 1 }}>
          <ExpandMoreIcon sx={{ color: "#ff6636", fontSize: "25px" }} />
          <Typography
            variant="subtitle1"
            sx={{ color: "#FF6636", fontWeight: 600, fontSize: "14px" }}
          >
            {title}
          </Typography>
        </Stack>

        {/* الجزء اليمين */}
        <Typography
          variant="body2"
          sx={{
            color: "#6c6c6c",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "14px",
          }}
        >
          <strong>▶ {lectures} lectures</strong> <strong>⏱ {duration}</strong>{" "}
          <strong>✅ {progress}% finish</strong>
        </Typography>
      </AccordionSummary>

      <AccordionDetails sx={{ padding: 0 }}>
        <List sx={{ padding: 0 }}>
          {[
            { title: "1. What is Webflow?", time: "07:31", done: true },
            { title: "2. Sign up in Webflow", time: "07:31", playing: true },
            { title: "3. Teaser of Webflow", time: "07:31" },
            { title: "4. Figma Introduction", time: "07:31" },
          ].map((item, idx) => (
            <ListItem
              key={idx}
              sx={{
                backgroundColor: item.playing ? "#FFF4F0" : "transparent",
                borderRadius: "6px",
                padding: "8px 12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Checkbox
                checked={item.done}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 20,
                  },
                  "&.Mui-checked": {
                    color: "#FF6636",
                  },
                }}
              />
              <Typography sx={{ flexGrow: 1, fontSize: "14px" }}>
                {item.title}
              </Typography>
              <IconButton sx={{ fontSize: 20 }}>
                {item.playing ? <PauseIcon /> : <PlayArrowIcon />}
              </IconButton>
              <Typography sx={{ fontSize: "14px" }}>{item.time}</Typography>
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default function CourseContent() {
  // بيانات الأقسام
  const sections = [
    { title: "Getting Started", lectures: 4, duration: "51m", progress: 25 },
    {
      title: "Secret of Good Design",
      lectures: 52,
      duration: "5h 49m",
      progress: 0,
    },
    {
      title: "Practice Design Like an Artist",
      lectures: 43,
      duration: "51m",
      progress: 0,
    },
    { title: "What's Next", lectures: 7, duration: "1h 17m", progress: 0 },
  ];

  // نتحكم أي panel مفتوح؛ القيمة الافتراضية = "panel0" (أول واحد مفتوح)
  const [expandedPanel, setExpandedPanel] = React.useState("panel0");

  const handleChange = (panelId) => (event, isExpanded) => {
    // لو isExpanded true --> افتح هذا الPanel، وإلا اغلق الكل (set to false/null)
    setExpandedPanel(isExpanded ? panelId : false);
  };

  return (
    <div>
      {sections.map((sec, index) => {
        const panelId = `panel${index}`;
        return (
          <CourseSection
            key={panelId}
            id={panelId}
            title={sec.title}
            lectures={sec.lectures}
            duration={sec.duration}
            progress={sec.progress}
            expanded={expandedPanel === panelId}
            onChange={handleChange(panelId)}
          />
        );
      })}
    </div>
  );
}
