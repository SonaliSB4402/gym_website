import React from 'react';
import { Box, Stack } from '@mui/material';
import Logo from '../assets/images/Webhub Health_transparent.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '250px', height: '100px' }} />
    </Stack>
  </Box>
);

export default Footer;