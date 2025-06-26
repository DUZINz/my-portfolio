import {
  Box,
  Typography,
  Container,
  Paper,
  Chip,
  Avatar,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Work,
  School,
  Code,
//   Business,
} from '@mui/icons-material';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Help Desk ',
      company: 'Grunitzky s/a Auditores independentes',
      period: '2023 - 2024',
      description: 'Atuei como Help Desk, oferecendo suporte técnico a usuários internos e externos. Resolvi problemas de hardware e software, além de implementar melhorias no sistema de tickets.',
      technologies: ['Windows', 'Linux', 'Active Directory', 'Office 365'],
      icon: <Work />,
    },
    {
      id: 2,
      type: 'work',
      title: 'Desenvolvedor RPA',
      company: 'Sicredi Integração PR/SC',
      period: '2024 - Presente',
      description: 'Atualmente atuo como Desenvolvedor RPA, criando e implementando robôs para automação de processos internos. Trabalho com integração de sistemas e otimização de fluxos de trabalho.',
      technologies: ['Python', 'PostgreSQL', 'mongoDB','C#', 'Git'],
      icon: <Code />,
    },
    // {
    //   id: 3,
    //   type: 'work',
    //   title: 'Desenvolvedor Frontend',
    //   company: 'WebAgency Pro',
    //   period: '2021 - 2022',
    //   description: 'Criação de sites e aplicações web responsivas para diversos clientes. Foco em performance, SEO e experiência do usuário.',
    //   technologies: ['React', 'Next.js', 'Sass', 'WordPress', 'Figma'],
    //   icon: <Code />,
    // },
    {
      id: 4,
      type: 'education',
      title: 'Bacharelado em Ciência da Computação',
      company: 'Universidade Positivo - UP',
      period: '2023 - 2027',
      description: 'Formação sólida em algoritmos, estruturas de dados, engenharia de software e desenvolvimento web. Participei de projetos de extensão e competições de programação.',
      technologies: ['Java', 'Python', 'C++', 'SQL', 'Git'],
      icon: <School />,
    },
  ];

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      id="experience"
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
                Experiência
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                Minha jornada profissional e acadêmica
              </Typography>
            </Box>
          </motion.div>

          {/* Lista de Experiências */}
          <Box sx={{ position: 'relative' }}>
            {/* Linha vertical */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: '20px', md: '50%' },
                top: 0,
                bottom: 0,
                width: '3px',
                backgroundColor: 'primary.main',
                transform: { md: 'translateX(-50%)' },
                zIndex: 1,
              }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'row', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                    alignItems: 'center',
                    mb: 6,
                    position: 'relative',
                  }}
                >
                  {/* Ícone */}
                  <Box
                    sx={{
                      position: { xs: 'relative', md: 'absolute' },
                      left: { md: '50%' },
                      transform: { md: 'translateX(-50%)' },
                      zIndex: 2,
                      mr: { xs: 3, md: 0 },
                    }}
                  >
                    <Avatar
                      sx={{
                        backgroundColor: exp.type === 'work' ? 'primary.main' : 'secondary.main',
                        color: 'background.default',
                        width: 60,
                        height: 60,
                      }}
                    >
                      {exp.icon}
                    </Avatar>
                  </Box>

                  {/* Conteúdo */}
                  <Box
                    sx={{
                      flex: 1,
                      ml: { xs: 0, md: index % 2 === 0 ? 0 : 4 },
                      mr: { xs: 0, md: index % 2 === 0 ? 4 : 0 },
                      maxWidth: { md: '45%' },
                    }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        p: 3,
                        backgroundColor: 'background.paper',
                        borderRadius: 3,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 10px 25px rgba(100, 255, 218, 0.15)',
                        },
                      }}
                    >
                      {/* Período */}
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                        }}
                      >
                        {exp.period}
                      </Typography>

                      {/* Título e Empresa */}
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                          mb: 1,
                        }}
                      >
                        {exp.title}
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          color: 'secondary.main',
                          mb: 2,
                          fontWeight: 500,
                        }}
                      >
                        {exp.company}
                      </Typography>

                      {/* Descrição */}
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          mb: 3,
                          lineHeight: 1.6,
                        }}
                      >
                        {exp.description}
                      </Typography>

                      {/* Tecnologias */}
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 1,
                        }}
                      >
                        {exp.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            variant="outlined"
                            sx={{
                              backgroundColor: 'rgba(100, 255, 218, 0.1)',
                              borderColor: 'primary.main',
                              color: 'primary.main',
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Box>
                    </Paper>
                  </Box>

                  {/* Espaçador para desktop */}
                  <Box
                    sx={{
                      display: { xs: 'none', md: 'block' },
                      flex: 1,
                    }}
                  />
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;
