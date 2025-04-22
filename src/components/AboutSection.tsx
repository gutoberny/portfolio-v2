import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { profileData } from "../data/profileData";

const AboutSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="about"
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
            Sobre Mim
          </Typography>
        </Box>

        <Grid
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            sx={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              mb: { xs: 4, md: 0 },
            }}
          >
            <Box
              component="img"
              src="/images/family.jpeg"
              alt="Família"
              sx={{
                width: "100%",
                maxWidth: { xs: "280px", md: "350px" },
                borderRadius: "12px",
                boxShadow: "0 10px 30px -15px rgba(2, 12, 27, 0.7)",
                border: `2px solid ${theme.palette.primary.light}`,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 20px 40px -15px rgba(2, 12, 27, 0.7)",
                  borderColor: theme.palette.secondary.main,
                },
              }}
            />
          </Box>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            sx={{ flex: "1" }}
          >
            <Typography variant="body1" color="text.secondary">
              {profileData.summary}
            </Typography>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
