import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { profileData } from "../data/profileData";

const AnimatedBox = styled(motion.div)({
  display: "flex",
  flexDirection: "column",
});

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid
            sx={{
              gridColumn: { xs: "span 12", md: "span 7" },
              order: { xs: 2, md: 1 },
            }}
          >
            <AnimatedBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="body1"
                gutterBottom
                component="div"
                sx={{
                  mb: 2,
                  color: theme.palette.secondary.main,
                  fontWeight: 300,
                  letterSpacing: "0.05em",
                }}
              >
                Olá, eu sou
              </Typography>
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 300,
                  mb: 1,
                  letterSpacing: "-0.05em",
                }}
              >
                {profileData.name}
              </Typography>
              <Typography
                variant="h3"
                component="div"
                gutterBottom
                sx={{
                  mb: 3,
                  color: theme.palette.text.secondary,
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                }}
              >
                {profileData.title}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  mb: 4,
                  maxWidth: "540px",
                  color: theme.palette.text.secondary,
                  fontWeight: 300,
                }}
              >
                {profileData.summary}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  gap: 2,
                  mt: 2,
                }}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  size="large"
                  component="a"
                  href="#projects"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 0,
                    borderWidth: "1px",
                    "&:hover": {
                      borderWidth: "1px",
                    },
                  }}
                >
                  Ver Projetos
                </Button>
                <Button
                  variant="text"
                  color="secondary"
                  size="large"
                  component="a"
                  href="#contact"
                  sx={{
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Contato
                </Button>
              </Box>
            </AnimatedBox>
          </Grid>
          <Grid
            sx={{
              gridColumn: { xs: "span 12", md: "span 5" },
              order: { xs: 1, md: 2 },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <AnimatedBox
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ width: "100%", maxWidth: "400px" }}
            >
              <Box
                component="img"
                src={profileData.image || "/images/profile-photo.jpg"}
                alt={profileData.name}
                sx={{
                  width: "100%",
                  maxWidth: "350px",
                  height: "350px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center",
                  boxShadow: "0 10px 30px -15px rgba(2, 12, 27, 0.7)",
                  filter: "grayscale(30%)",
                  border: `4px solid ${theme.palette.primary.light}`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    filter: "grayscale(0%)",
                    transform: "scale(1.02)",
                    boxShadow: "0 15px 40px -15px rgba(2, 12, 27, 0.8)",
                    borderColor: theme.palette.secondary.main,
                  },
                }}
              />
            </AnimatedBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
