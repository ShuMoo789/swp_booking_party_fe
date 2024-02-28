import { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Data from "./asked.json";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const BoxWithPadding = styled(Box)({
  padding: "0 20px", // Thêm padding 20px ở cả hai bên trái và phải
});

export default function ContentPage1() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Typography
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "2.5rem",
          paddingTop: "30px",
          marginTop: "40px",
        }}
      >
        Frequently Asked Questions
      </Typography>
      <BoxWithPadding style={{ paddingBottom: "50px" }}>
        {Data.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${item.id}`}
            onChange={handleChange(`panel${item.id}`)}
          >
            <AccordionSummary
              aria-controls={`panel${item.id}d-content`}
              id={`panel${item.id}d-header`}
            >
              <Typography style={{ fontWeight: "bold" }}>
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ textAlign: "left" }}>{item.des}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </BoxWithPadding>
    </div>
  );
}
