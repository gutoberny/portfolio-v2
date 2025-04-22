import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  useMediaQuery,
  Container,
  useTheme,
  Tooltip,
  Snackbar,
  Alert,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { profileData } from "../data/profileData";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(profileData.contact.email)
      .then(() => {
        setSnackbarOpen(true);
      })
      .catch((err) => {
        console.error("Erro ao copiar: ", err);
      });
  };

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const socialItems = [
    {
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      url: `https://${profileData.contact.linkedin}`,
      action: () =>
        window.open(`https://${profileData.contact.linkedin}`, "_blank"),
    },
    {
      name: "GitHub",
      icon: <GitHubIcon />,
      url: profileData.contact.github,
      action: () => window.open(profileData.contact.github, "_blank"),
    },
    {
      name: "Email",
      icon: <EmailIcon />,
      url: `#`,
      action: handleCopyEmail,
    },
  ];

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.text.primary,
      }}
      role="presentation"
      onClick={handleDrawerToggle}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
        <IconButton color="inherit" onClick={handleDrawerToggle} sx={{ p: 1 }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ p: 2 }}>
        {socialItems.map((item) => (
          <ListItemButton
            key={item.name}
            onClick={item.action}
            sx={{
              my: 1,
              borderLeft: `2px solid transparent`,
              "&:hover": {
                borderLeft: `2px solid ${theme.palette.secondary.main}`,
                color: theme.palette.secondary.main,
                backgroundColor: "transparent",
              },
            }}
          >
            <Box sx={{ mr: 2 }}>{item.icon}</Box>
            <ListItemText
              primary={item.name}
              primaryTypographyProps={{
                fontSize: "0.9rem",
                letterSpacing: "0.05em",
                fontWeight: 300,
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          background: scrolled ? `rgba(10, 25, 47, 0.85)` : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "all 0.3s ease-in-out",
          boxShadow: scrolled
            ? "0 10px 30px -10px rgba(2, 12, 27, 0.7)"
            : "none",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1 }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 300,
                color: theme.palette.secondary.main,
                letterSpacing: "-0.03em",
                fontSize: "1.5rem",
              }}
            >
              GB<span style={{ color: theme.palette.text.primary }}>.dev</span>
            </Typography>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  color: theme.palette.text.primary,
                  "&:hover": {
                    color: theme.palette.secondary.main,
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  color="inherit"
                  component="a"
                  href={socialItems[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={socialItems[0].name}
                  sx={{
                    mx: 1,
                    color: theme.palette.text.secondary,
                    transition: "all 0.25s ease",
                    "&:hover": {
                      color: theme.palette.secondary.main,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  component="a"
                  href={socialItems[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={socialItems[1].name}
                  sx={{
                    mx: 1,
                    color: theme.palette.text.secondary,
                    transition: "all 0.25s ease",
                    "&:hover": {
                      color: theme.palette.secondary.main,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <GitHubIcon />
                </IconButton>
                <Tooltip
                  title="Copiar email para a área de transferência"
                  arrow
                >
                  <IconButton
                    color="inherit"
                    onClick={handleCopyEmail}
                    aria-label="Copiar Email"
                    sx={{
                      mx: 1,
                      color: theme.palette.text.secondary,
                      transition: "all 0.25s ease",
                      "&:hover": {
                        color: theme.palette.secondary.main,
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <EmailIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            )}
          </Toolbar>
        </Container>

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 250,
            },
          }}
        >
          {drawer}
        </Drawer>
      </AppBar>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Endereço de email copiado com sucesso!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Navbar;
