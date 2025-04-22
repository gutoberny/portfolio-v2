import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  useTheme,
  Link,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { profileData } from "../data/profileData";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="contact"
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
          sx={{ mb: 6, textAlign: "center" }}
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
                right: 0,
                width: 80,
                height: 4,
                mx: "auto",
                backgroundColor: theme.palette.secondary.main,
                borderRadius: 2,
              },
            }}
          >
            Contato
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 4, mb: 6, maxWidth: "700px", mx: "auto" }}
          >
            Interessado em trabalhar juntos? Entre em contato pelos canais
            abaixo para discutirmos como posso contribuir para o seu projeto.
          </Typography>
        </Box>

        <Paper
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          elevation={0}
          sx={{
            p: 5,
            borderRadius: 2,
            border: `1px solid ${theme.palette.primary.light}`,
            maxWidth: 900,
            mx: "auto",
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Grid container spacing={4}>
            <Grid sx={{ gridColumn: { xs: "span 12", md: "span 6" } }}>
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{ mb: 3, fontWeight: 500 }}
                >
                  Informações de Contato
                </Typography>
                <Typography color="text.secondary">
                  Ficarei feliz em conversar sobre novas oportunidades. Entre em
                  contato através dos canais abaixo e responderei o mais rápido
                  possível.
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: "50%",
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <LocationOnIcon fontSize="small" />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Localização
                    </Typography>
                    <Typography variant="body1">
                      Santa Cruz do Sul, RS, Brasil
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: "50%",
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <EmailIcon fontSize="small" />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Email
                    </Typography>
                    <Typography
                      variant="body1"
                      component={Link}
                      href={`mailto:${profileData.contact.email}`}
                      sx={{
                        color: theme.palette.secondary.main,
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {profileData.contact.email}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: "50%",
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <PhoneIcon fontSize="small" />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Telefone
                    </Typography>
                    <Typography
                      variant="body1"
                      component={Link}
                      href={`tel:${profileData.contact.phone.replace(
                        /\s/g,
                        ""
                      )}`}
                      sx={{
                        color: theme.palette.secondary.main,
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {profileData.contact.phone}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid sx={{ gridColumn: { xs: "span 12", md: "span 6" } }}>
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{ mb: 3, fontWeight: 500 }}
                >
                  Redes Sociais
                </Typography>
                <Typography color="text.secondary">
                  Conecte-se comigo através das redes sociais para acompanhar
                  meus projetos e atividades profissionais.
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: "50%",
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <LinkedInIcon fontSize="small" />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      LinkedIn
                    </Typography>
                    <Typography
                      variant="body1"
                      component={Link}
                      href={`https://${profileData.contact.linkedin}`}
                      target="_blank"
                      rel="noopener"
                      sx={{
                        color: theme.palette.secondary.main,
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {profileData.contact.linkedin}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: "50%",
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <GitHubIcon fontSize="small" />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      GitHub
                    </Typography>
                    <Typography
                      variant="body1"
                      component={Link}
                      href={profileData.contact.github}
                      target="_blank"
                      rel="noopener"
                      sx={{
                        color: theme.palette.secondary.main,
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {profileData.contact.github.replace("https://", "")}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: "50%",
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <LanguageIcon fontSize="small" />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Website
                    </Typography>
                    <Typography
                      variant="body1"
                      component={Link}
                      href={`https://${profileData.contact.website}`}
                      target="_blank"
                      rel="noopener"
                      sx={{
                        color: theme.palette.secondary.main,
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {profileData.contact.website}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactSection;
