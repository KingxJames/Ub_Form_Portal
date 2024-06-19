import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

interface HeaderProps {
  logo: string;
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ logo, title }) => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#fff', mb: 5 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'center' }}>
          <img src={logo} alt="" />
          <Typography
            variant="h6"
            component="a"
            sx={{
              display: { md: 'flex' },
              color: 'black',
              textDecoration: 'none',
            }}
          >
            {title}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
