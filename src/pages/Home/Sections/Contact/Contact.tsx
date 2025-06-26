import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
  WhatsApp,
  Send,
} from '@mui/icons-material';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'eduardogrunitzky@gmail.com',
      link: 'mailto:eduardogrunitzky@gmail.com',
    },
    {
      icon: <Phone />,
      title: 'Telefone',
      value: '+55 (41) 98788-6113',
      link: 'tel:+5541987886113',
    },
    {
      icon: <LocationOn />,
      title: 'Localização',
      value: 'Curitiba, PR, Brasil',
      link: '',
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedIn />,
      name: 'LinkedIn',
      url: '',
      color: '#0077B5',
    },
    {
      icon: <GitHub />,
      name: 'GitHub',
      url: 'https://github.com/DUZINz',
      color: '#333',
    },
    {
      icon: <WhatsApp />,
      name: 'WhatsApp',
      url: 'https://wa.me/5541987886113',
      color: '#25D366',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação de envio
    if (formData.name && formData.email && formData.message) {
      setSnackbar({
        open: true,
        message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
        severity: 'success',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setSnackbar({
        open: true,
        message: 'Por favor, preencha todos os campos obrigatórios.',
        severity: 'error',
      });
    }
  };

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
      id="contact"
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
                Entre em Contato
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                Vamos conversar sobre seu próximo projeto!
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={6}>
            {/* Informações de Contato */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    mb: 4,
                    color: 'primary.main',
                  }}
                >
                  Vamos Conversar
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 4,
                    lineHeight: 1.6,
                  }}
                >
                  Estou sempre aberto a discutir novas oportunidades, 
                  projetos interessantes ou apenas bater um papo sobre tecnologia. 
                  Entre em contato!
                </Typography>

                {/* Informações de Contato */}
                <Box sx={{ mb: 4 }}>
                  {contactInfo.map((info, index) => (
                    <Box
                      key={index}
                      component={info.link ? 'a' : 'div'}
                      href={info.link || undefined}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3,
                        cursor: info.link ? 'pointer' : 'default',
                        textDecoration: 'none',
                        color: 'inherit',
                        '&:hover': info.link ? {
                          color: 'primary.main',
                        } : {},
                      }}
                    >
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(100, 255, 218, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 3,
                          color: 'primary.main',
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 600,
                            color: 'text.primary',
                          }}
                        >
                          {info.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                          }}
                        >
                          {info.value}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>

                {/* Redes Sociais */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary',
                  }}
                >
                  Redes Sociais
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={index}
                      href={social.url}
                      target="_blank"
                      sx={{
                        width: 50,
                        height: 50,
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        color: 'primary.main',
                        '&:hover': {
                          backgroundColor: social.color,
                          color: 'white',
                          transform: 'translateY(-3px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Formulário de Contato */}
            <Grid item xs={12} md={8}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    backgroundColor: 'background.default',
                    borderRadius: 3,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 3,
                      color: 'text.primary',
                    }}
                  >
                    Envie uma Mensagem
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Nome *"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '&.Mui-focused fieldset': {
                                borderColor: 'primary.main',
                              },
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                              color: 'primary.main',
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email *"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '&.Mui-focused fieldset': {
                                borderColor: 'primary.main',
                              },
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                              color: 'primary.main',
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Assunto"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '&.Mui-focused fieldset': {
                                borderColor: 'primary.main',
                              },
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                              color: 'primary.main',
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Mensagem *"
                          name="message"
                          multiline
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '&.Mui-focused fieldset': {
                                borderColor: 'primary.main',
                              },
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                              color: 'primary.main',
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          startIcon={<Send />}
                          sx={{
                            backgroundColor: 'primary.main',
                            color: 'background.default',
                            px: 4,
                            py: 1.5,
                            '&:hover': {
                              backgroundColor: 'primary.dark',
                              transform: 'translateY(-2px)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          Enviar Mensagem
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      {/* Snackbar para feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
