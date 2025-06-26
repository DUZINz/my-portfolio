import {
  Box,
  Typography,
  Container,
  IconButton,
  Divider,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  WhatsApp,
  Favorite,
} from '@mui/icons-material';

const Footer = () => {
  const socialLinks = [
    {
      icon: <GitHub />,
      url: 'https://github.com/DUZINz',
      label: 'GitHub',
    },
    {
      icon: <LinkedIn />,
      url: 'https://linkedin.com/in/eduardo',
      label: 'LinkedIn',
    },
    {
      icon: <Email />,
      url: 'mailto:eduardogrunitzky@gmail.com',
      label: 'Email',
    },
    {
      icon: <WhatsApp />,
      url: 'https://wa.me/5541987886113',
      label: 'WhatsApp',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.default',
        borderTop: '1px solid rgba(100, 255, 218, 0.2)',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Redes Sociais */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 3,
          }}
        >
          {socialLinks.map((social, index) => (
            <IconButton
              key={index}
              href={social.url}
              target="_blank"
              aria-label={social.label}
              sx={{
                mx: 1,
                color: 'text.secondary',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'translateY(-3px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              {social.icon}
            </IconButton>
          ))}
        </Box>

        {/* Nome/Logo */}
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: 'primary.main',
              cursor: 'pointer',
              '&:hover': {
                color: 'primary.light',
              },
              transition: 'color 0.3s ease',
            }}
            onClick={scrollToTop}
          >
            Eduardo
          </Typography>
        </Box>

        <Divider sx={{ mb: 3, borderColor: 'rgba(100, 255, 218, 0.2)' }} />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            © {new Date().getFullYear()} Eduardo. Todos os direitos reservados.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'text.secondary',
            }}
          >
            <Typography variant="body2">
              Feito com
            </Typography>
            <Favorite
              sx={{
                color: 'secondary.main',
                fontSize: '1rem',
                mx: 0.5,
              }}
            />
            <Typography variant="body2">
              e React
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
