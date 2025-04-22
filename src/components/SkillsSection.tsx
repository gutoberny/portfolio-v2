import React from "react";
import { Box, Container, Typography, useTheme, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { skillCategories } from "../data/profileData";
import * as MuiIcons from "@mui/icons-material";

// Componente para renderizar dinamicamente ícones do MUI
const DynamicIcon: React.FC<{ iconName: string }> = ({ iconName }) => {
  // @ts-ignore - Ignorando o erro de tipo pois estamos acessando dinamicamente
  const IconComponent = MuiIcons[iconName];

  if (IconComponent) {
    return <IconComponent fontSize="large" color="primary" />;
  }

  return null;
};

const SkillsSection: React.FC = () => {
  const theme = useTheme();

  // Obter todas as skills de todas as categorias
  const allSkills = skillCategories.flatMap((category) => category.skills);

  return (
    <Box
      id="skills"
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
            Habilidades
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 4, mb: 6, maxWidth: "800px" }}
          >
            Sou apaixonado por Inteligência Artificial e suas aplicações
            práticas em soluções de negócios. Tenho me dedicado constantemente à
            implementação de sistemas que utilizam IA para resolver problemas
            complexos, como chatbots inteligentes e automação de processos.
            Minha experiência com tecnologias de IA me permite desenvolver
            soluções inovadoras que transformam dados em valor real para
            usuários e empresas.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {allSkills.map((skill, skillIndex) => (
            <Grid
              key={skillIndex}
              sx={{
                gridColumn: { xs: "span 6", sm: "span 4", md: "span 3" },
              }}
            >
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                viewport={{ once: true }}
                sx={{
                  borderRadius: 2,
                  padding: 2,
                  backgroundColor: "#1A1E23",
                  border: `1px solid ${theme.palette.primary.light}`,
                  transition: "all 0.3s ease",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                    borderColor: theme.palette.secondary.main,
                  },
                }}
              >
                {skill.icon && (
                  <Box sx={{ mb: 2 }}>
                    <DynamicIcon iconName={skill.icon} />
                  </Box>
                )}
                <Typography variant="h6" component="h4" sx={{ mb: 1 }}>
                  {skill.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {skill.level}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsSection;
