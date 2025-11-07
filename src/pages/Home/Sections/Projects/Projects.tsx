import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  GitHub,
  Launch,
  Code,
  Web,
  Storage,
} from '@mui/icons-material';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Sistema de estudos para o ENEM',
      description: 'Plataforma de estudos personalizada para o ENEM com simulados, redações, monitoramento de progresso e recomendações de estudo.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'FireBase', 'TypeScript', 'API Gemini'],
      githubUrl: 'https://github.com/DUZINz/enem-genius',
      liveUrl: 'https://enemgenius.vercel.app',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Manager App',
      description: 'Aplicativo de gerenciamento de tarefas com colaboração em tempo real, notificações e sistema de produtividade.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      githubUrl: 'https://github.com/eduardo/task-manager',
      liveUrl: 'https://taskmanager-app.vercel.app',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard meteorológico com previsões detalhadas, mapas interativos e histórico de dados climáticos.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'API REST', 'Chart.js', 'Styled Components'],
      githubUrl: 'https://github.com/eduardo/weather-dashboard',
      liveUrl: 'https://weather-dashboard-app.vercel.app',
      featured: false,
    },
    {
      id: 4,
      title: 'Social Media API',
      description: 'API REST para rede social com autenticação, posts, comentários, sistema de likes e upload de imagens.',
      image: '/api/placeholder/400/250',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'AWS S3'],
      githubUrl: 'https://github.com/eduardo/social-api',
      liveUrl: '',
      featured: false,
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      description: 'Plataforma imobiliária com busca avançada, mapas, sistema de favoritos e agendamento de visitas.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Google Maps'],
      githubUrl: 'https://github.com/eduardo/real-estate',
      liveUrl: 'https://realestate-platform.vercel.app',
      featured: true,
    },
    {
      id: 6,
      title: 'Blog CMS',
      description: 'Sistema de gerenciamento de conteúdo para blogs com editor rico, SEO otimizado e sistema de comentários.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'MongoDB', 'TinyMCE'],
      githubUrl: 'https://github.com/eduardo/blog-cms',
      liveUrl: 'https://blog-cms-demo.vercel.app',
      featured: false,
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

  const getProjectIcon = (technologies: string[]) => {
    if (technologies.some(tech => ['React', 'Next.js', 'Vue'].includes(tech))) {
      return <Web />;
    }
    if (technologies.some(tech => ['Node.js', 'Express', 'API'].includes(tech))) {
      return <Storage />;
    }
    return <Code />;
  };

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
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
                Meus Projetos
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                Alguns dos projetos que desenvolvi usando as tecnologias mais modernas
              </Typography>
            </Box>
          </motion.div>

          {/* Grid de Projetos */}
          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid 
                item 
                xs={12} 
                md={project.featured ? 12 : 6} 
                lg={project.featured ? 8 : 4} 
                key={project.id}
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: { 
                        xs: 'column', 
                        md: project.featured ? 'row' : 'column' 
                      },
                      backgroundColor: 'background.default',
                      borderRadius: 3,
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 15px 35px rgba(100, 255, 218, 0.15)',
                      },
                    }}
                  >
                    {/* Imagem do Projeto */}
                    <CardMedia
                      sx={{
                        height: { xs: 200, md: project.featured ? 300 : 200 },
                        flex: project.featured ? '0 0 40%' : 'none',
                        position: 'relative',
                        background: 'linear-gradient(135deg, #112240 0%, #0a192f 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          backgroundColor: 'primary.main',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'background.default',
                        }}
                      >
                        {getProjectIcon(project.technologies)}
                      </Box>
                    </CardMedia>

                    {/* Conteúdo do Projeto */}
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        flex: 1 
                      }}
                    >
                      <CardContent sx={{ flexGrow: 1, p: 3 }}>
                        <Typography
                          variant={project.featured ? "h4" : "h5"}
                          component="h3"
                          sx={{
                            fontWeight: 600,
                            mb: 2,
                            color: 'primary.main',
                          }}
                        >
                          {project.title}
                        </Typography>
                        
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'text.secondary',
                            mb: 3,
                            lineHeight: 1.6,
                          }}
                        >
                          {project.description}
                        </Typography>

                        {/* Tecnologias */}
                        <Box
                          sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 1,
                            mb: 3,
                          }}
                        >
                          {project.technologies.map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                                color: 'primary.main',
                                borderColor: 'primary.main',
                                border: '1px solid',
                              }}
                            />
                          ))}
                        </Box>
                      </CardContent>

                      {/* Ações do Projeto */}
                      <CardActions sx={{ p: 3, pt: 0 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            gap: 1,
                            width: '100%',
                          }}
                        >
                          <IconButton
                            href={project.githubUrl}
                            target="_blank"
                            sx={{
                              color: 'text.secondary',
                              '&:hover': {
                                color: 'primary.main',
                                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                              },
                            }}
                          >
                            <GitHub />
                          </IconButton>
                          
                          {project.liveUrl && (
                            <Button
                              variant="outlined"
                              startIcon={<Launch />}
                              href={project.liveUrl}
                              target="_blank"
                              sx={{
                                ml: 'auto',
                                borderColor: 'primary.main',
                                color: 'primary.main',
                                '&:hover': {
                                  borderColor: 'primary.dark',
                                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                                },
                              }}
                            >
                              Ver Projeto
                            </Button>
                          )}
                        </Box>
                      </CardActions>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Botão Ver Mais */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Button
                variant="outlined"
                size="large"
                startIcon={<GitHub />}
                href="https://github.com/DUZINz"
                target="_blank"
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    borderColor: 'primary.dark',
                    backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  },
                }}
              >
                Ver Todos os Projetos no GitHub
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
