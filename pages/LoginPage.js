import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";
// components
import Logo from '../components/logo';
// sections
import { LoginForm } from '../sections/auth/login';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  background: 'white',
  borderRadius: '10px',
  padding: theme.spacing(5, 5),
  zIndex: 2, // Ensures content is above the Vanta.js background
}));

const MainContent = styled('div')(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
}));

// ----------------------------------------------------------------------

const VantaCloudsBackground = ({ children }) => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = CLOUDS({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      color: 0x1e3a8a,
      backgroundColor: 0xffffff,
      skyColor: 0x68b8d7,
      cloudColor: 0xadc1de,
      cloudShadowColor: 0x183550,
      speed: 1,
    });


    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <MainContent ref={vantaRef}>
      {children}
    </MainContent>
  );
};

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Timesarc </title>
      </Helmet>

      <StyledRoot>
        <VantaCloudsBackground>
          <Logo
            sx={{
              position: "fixed",
              top: { xs: 16, sm: 24, md: 40 },
              left: { xs: 16, sm: 24, md: 40 },
            }}
          />
          <Container maxWidth="sm">
            <StyledContent>
              <LoginForm />
            </StyledContent>
          </Container>
        </VantaCloudsBackground>
      </StyledRoot>
    </>
  );
}
