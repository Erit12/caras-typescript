
import { FooterStyle } from "./style";


export const Footer = () => (
  <FooterStyle aria-label="Pie de página con información de contacto">
    <h3>Síguenos en redes sociales</h3>
    <nav role="navigation" aria-label="Redes sociales">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook"/>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
          alt="Instagram"
        />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg"
          alt="X (Twitter)"
        />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"
          alt="YouTube"
        />
      </a>
      <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg"
          alt="TikTok"
        />
      </a>
    </nav>
    <p>&copy; 2025 CARAS. All rights reserved.</p>
  </FooterStyle>
);
