import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Chip,
  Avatar,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Code,
  Web,
  Storage,
  Cloud,
  DeviceHub,
  Psychology,
} from '@mui/icons-material';

const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python',
    'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git',
    'Next.js', 'Express.js', 'Material-UI', 'Tailwind CSS'
  ];

  const services = [
    {
      icon: <Web />,
      title: 'Desenvolvimento Frontend',
      description: 'Criação de interfaces modernas e responsivas usando React, TypeScript e as melhores práticas de UX/UI.',
    },
    {
      icon: <Storage />,
      title: 'Desenvolvimento Backend',
      description: 'APIs robustas e escaláveis com Node.js, Python, bancos de dados relacionais e não-relacionais.',
    },
    {
      icon: <Cloud />,
      title: 'DevOps & Cloud',
      description: 'Deploy e infraestrutura na nuvem com AWS, Docker, CI/CD e monitoramento de aplicações.',
    },
    {
      icon: <DeviceHub />,
      title: 'Arquitetura de Software',
      description: 'Design de sistemas escaláveis, microserviços e implementação de boas práticas de desenvolvimento.',
    },
    {
      icon: <Code />,
      title: 'Code Review & Mentoria',
      description: 'Revisão de código, mentoria técnica e implementação de padrões de desenvolvimento.',
    },
    {
      icon: <Psychology />,
      title: 'Consultoria Técnica',
      description: 'Análise de projetos, escolha de tecnologias e estratégias de desenvolvimento.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
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

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Título da Seção */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  background: 'linear-gradient(45deg, #64ffda, #f50057)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Sobre Mim
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                Conheça um pouco mais sobre minha jornada e expertise
              </Typography>
            </Box>
          </motion.div>

          {/* Texto Sobre */}
          <motion.div variants={itemVariants}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                mb: 6,
                backgroundColor: 'background.paper',
                borderRadius: 3,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                  textAlign: 'justify',
                }}
              >
                Sou um desenvolvedor Full Stack apaixonado por tecnologia e inovação, 
                com mais de 3 anos de experiência criando soluções web robustas e escaláveis. 
                Minha jornada começou com curiosidade sobre como as coisas funcionam na internet, 
                e hoje trabalho com as tecnologias mais modernas do mercado.
                <br /><br />
                Especializo-me em JavaScript/TypeScript, React, Node.js e Python, sempre 
                buscando as melhores práticas de desenvolvimento e arquitetura de software. 
                Tenho experiência em projetos que vão desde aplicações web simples até 
                sistemas complexos com milhares de usuários.
                <br /><br />
                Quando não estou codando, gosto de estudar novas tecnologias, contribuir 
                para projetos open source e compartilhar conhecimento com a comunidade dev.
              </Typography>
            </Paper>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants}>
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  textAlign: 'center',
                  color: 'primary.main',
                }}
              >
                Tecnologias & Ferramentas
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  justifyContent: 'center',
                }}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Chip
                      label={skill}
                      variant="outlined"
                      sx={{
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        fontWeight: 500,
                        fontSize: '0.9rem',
                        '&:hover': {
                          backgroundColor: 'rgba(100, 255, 218, 0.2)',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </Box>
          </motion.div>

          {/* Serviços */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                mb: 4,
                textAlign: 'center',
                color: 'primary.main',
              }}
            >
              O que eu faço
            </Typography>
            <Grid container spacing={3}>
              {services.map((service, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Paper
                      elevation={2}
                      sx={{
                        p: 3,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        backgroundColor: 'background.paper',
                        borderRadius: 3,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 8px 25px rgba(100, 255, 218, 0.15)',
                        },
                      }}
                    >
                      <Avatar
                        sx={{
                          backgroundColor: 'primary.main',
                          color: 'background.default',
                          width: 60,
                          height: 60,
                          mb: 2,
                        }}
                      >
                        {service.icon}
                      </Avatar>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 2,
                          color: 'text.primary',
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
