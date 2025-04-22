import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { projects } from "../data/profileData";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CloseIcon from "@mui/icons-material/Close";

const ProjectsSection: React.FC = () => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleClickOpen = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Box
      id="projects"
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
            Projetos
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 4, mb: 6, maxWidth: "800px" }}
          >
            Conheça alguns dos projetos que desenvolvi ao longo da minha
            carreira. Cada um representa um desafio superado e novas habilidades
            adquiridas.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid
              key={project.id}
              sx={{
                gridColumn: { xs: "span 12", sm: "span 6", md: "span 4" },
              }}
            >
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 20px rgba(0,0,0,0.12)",
                  },
                  backgroundColor: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.primary.light}`,
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image || "/images/project-placeholder.jpg"}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: 600 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {project.description}
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}
                  >
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                    {project.technologies.length > 3 && (
                      <Chip
                        label={`+${project.technologies.length - 3}`}
                        size="small"
                        color="secondary"
                      />
                    )}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    size="small"
                    onClick={() => handleClickOpen(project)}
                    sx={{ mr: "auto" }}
                  >
                    Ver Detalhes
                  </Button>
                  {project.githubUrl && (
                    <IconButton
                      aria-label="github"
                      component="a"
                      href={project.githubUrl}
                      target="_blank"
                      size="small"
                    >
                      <GitHubIcon />
                    </IconButton>
                  )}
                  {project.liveUrl && (
                    <IconButton
                      aria-label="live site"
                      component="a"
                      href={project.liveUrl}
                      target="_blank"
                      size="small"
                    >
                      <LaunchIcon />
                    </IconButton>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog
          open={openDialog}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              backgroundColor: theme.palette.background.paper,
              backgroundImage: "none",
            },
          }}
        >
          <DialogTitle
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {selectedProject.title}
            <IconButton aria-label="close" onClick={handleClose} size="small">
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box
                component="img"
                src={selectedProject.image || "/images/project-placeholder.jpg"}
                alt={selectedProject.title}
                sx={{ width: "100%", height: "auto", borderRadius: 1 }}
              />
              <Typography variant="body1" paragraph>
                {selectedProject.description}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Tecnologias utilizadas:
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {selectedProject.technologies.map((tech, i) => (
                  <Chip key={i} label={tech} color="primary" />
                ))}
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            {selectedProject.githubUrl && (
              <Button
                startIcon={<GitHubIcon />}
                href={selectedProject.githubUrl}
                target="_blank"
                color="primary"
              >
                GitHub
              </Button>
            )}
            {selectedProject.liveUrl && (
              <Button
                startIcon={<LaunchIcon />}
                href={selectedProject.liveUrl}
                target="_blank"
                color="secondary"
                variant="contained"
              >
                Ver Demo
              </Button>
            )}
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
