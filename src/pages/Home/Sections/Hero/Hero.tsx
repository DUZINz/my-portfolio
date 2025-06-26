import {
  Box,
  Typography,
  Button,
  Container,
  Avatar,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Download, GitHub, LinkedIn, Email } from '@mui/icons-material';
import Image from '../../../../assets/images/fotominha.jpg';

const Hero = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, #0a192f 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(100, 255, 218, 0.1)" stroke-width="1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)" /%3E%3C/svg%3E")',
          opacity: 0.3,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: { xs: 4, md: 8 },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {/* Texto Principal */}
            <Box sx={{ flex: 1, maxWidth: { md: '60%' } }}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 500,
                    mb: 1,
                    fontSize: { xs: '1rem', md: '1.2rem' },
                  }}
                >
                  Olá, meu nome é
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                    background: 'linear-gradient(45deg, #64ffda, #f50057)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Eduardo
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  sx={{
                    color: 'text.secondary',
                    mb: 3,
                    fontSize: { xs: '1.8rem', md: '2.5rem', lg: '3rem' },
                  }}
                >
                  Desenvolvedor Full Stack
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 4,
                    maxWidth: '600px',
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.6,
                  }}
                >
                  Sou um desenvolvedor apaixonado por criar experiências digitais 
                  excepcionais. Especializado em React, Node.js e tecnologias modernas,
                  transformo ideias em soluções web inovadoras e eficientes.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  sx={{ mb: 4 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Email />}
                    onClick={() => scrollToSection('#contact')}
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'background.default',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                      },
                    }}
                  >
                    Entre em Contato
                  </Button>
                  
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<Download />}
                    href="/cv.pdf"
                    target="_blank"
                    sx={{
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      '&:hover': {
                        borderColor: 'primary.dark',
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                      },
                    }}
                  >
                    Download CV
                  </Button>
                </Stack>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Stack direction="row" spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                  <Button
                    startIcon={<GitHub />}
                    href="https://github.com/eduardo"
                    target="_blank"
                    sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                  >
                    GitHub
                  </Button>
                  <Button
                    startIcon={<LinkedIn />}
                    href="https://linkedin.com/in/eduardo"
                    target="_blank"
                    sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                  >
                    LinkedIn
                  </Button>
                </Stack>
              </motion.div>
            </Box>

            {/* Foto */}
            <motion.div variants={itemVariants}>
              <Box
                sx={{
                  position: 'relative',
                  order: { xs: -1, md: 1 },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      width: '100%',
                      height: '100%',
                      border: '3px solid',
                      borderColor: 'primary.main',
                      borderRadius: '50%',
                      zIndex: -1,
                    },
                  }}
                >
                  <Avatar
                    src={Image}
                    alt="Eduardo"
                    sx={{
                      width: { xs: 250, md: 300, lg: 350 },
                      height: { xs: 250, md: 300, lg: 350 },
                      border: '5px solid',
                      borderColor: 'background.paper',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
