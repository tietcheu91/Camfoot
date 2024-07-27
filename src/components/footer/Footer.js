import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import './Footer.css';


export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-social">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.https://www.instagram.com/montclair_meats/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      <div className="footer-text text-center">
        <Typography variant="body2" color="white" align="center">
            {'Copyright © '}
            <Link color="inherit" href="http://localhost:3000/">
                Camfoot United
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
      </div>
    </footer>
    
  );
}
