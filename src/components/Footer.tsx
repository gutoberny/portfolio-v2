import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { profileData } from "../data/profileData";

const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.text.secondary,
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: `linear-gradient(to right, transparent, ${theme.palette.text.secondary}20, transparent)`,
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            mb: 3,
          }}
        >
          <Box sx={{ mb: 2 }}>
            <IconButton
              color="inherit"
              aria-label="LinkedIn"
              component="a"
              href={`https://${profileData.contact.linkedin}`}
              target="_blank"
              rel="noopener"
              size="medium"
              sx={{
                mx: 1,
                color: theme.palette.text.secondary,
                "&:hover": {
                  color: theme.palette.secondary.main,
                  transform: "translateY(-3px)",
                },
                transition: "all 0.2s ease-in-out",
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="GitHub"
              component="a"
              href={profileData.contact.github}
              target="_blank"
              rel="noopener"
              size="medium"
              sx={{
                mx: 1,
                color: theme.palette.text.secondary,
                "&:hover": {
                  color: theme.palette.secondary.main,
                  transform: "translateY(-3px)",
                },
                transition: "all 0.2s ease-in-out",
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="Email"
              component="a"
              href={`mailto:${profileData.contact.email}`}
              size="medium"
              sx={{
                mx: 1,
                color: theme.palette.text.secondary,
                "&:hover": {
                  color: theme.palette.secondary.main,
                  transform: "translateY(-3px)",
                },
                transition: "all 0.2s ease-in-out",
              }}
            >
              <EmailIcon />
            </IconButton>
          </Box>

          <Typography
            variant="body2"
            sx={{
              fontSize: "0.85rem",
              fontWeight: 300,
              letterSpacing: "0.05em",
              mb: 1,
            }}
          >
            © {currentYear} Gustavo Berny. Todos os direitos reservados.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: "0.75rem",
              fontWeight: 300,
              opacity: 0.7,
              letterSpacing: "0.03em",
            }}
          >
            Desenvolvido com React, TypeScript & Material UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
