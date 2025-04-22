import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { experiences } from "../data/profileData";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import BusinessIcon from "@mui/icons-material/Business";

const ExperienceSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="experience"
      component="section"
      sx={{
        py: 10,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{ mb: 6 }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 2,
              fontWeight: "bold",
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -8,
                left: 0,
                width: 80,
                height: 4,
                backgroundColor: theme.palette.secondary.main,
                borderRadius: 2,
              },
            }}
          >
            Experiência Profissional
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 4, mb: 6, maxWidth: "800px" }}
          >
            Minha trajetória profissional inclui experiências em diferentes
            áreas do desenvolvimento de software, desde suporte técnico até
            desenvolvimento fullstack.
          </Typography>
        </Box>

        <Timeline position="alternate">
          {experiences.map((experience, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent color="text.secondary">
                <Typography variant="body2">{experience.period}</Typography>
                <Typography variant="subtitle2">
                  {experience.location}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="secondary">
                  <BusinessIcon />
                </TimelineDot>
                {index < experiences.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  component={motion.div}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.primary.light}`,
                    backgroundColor: theme.palette.background.paper,
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: 600 }}
                  >
                    {experience.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="secondary"
                    sx={{ mb: 2, fontWeight: 500 }}
                  >
                    {experience.company}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {experience.description.map((desc, i) => (
                      <Typography
                        key={i}
                        variant="body2"
                        paragraph
                        sx={{ mb: 1 }}
                      >
                        • {desc}
                      </Typography>
                    ))}
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {experience.technologies.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};

export default ExperienceSection;
