import logo from "../../assets/Logo 2.png";

import { HeaderContainer, Logo, LogoContainer, SectionContainer, TitleH1, TitleH2 } from './style';



export const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <Logo src={logo} alt="Logotipo de empresa CARAS" />
    </LogoContainer>
    <SectionContainer>
      <TitleH1>Suscribete a las Newsletter de CARAS</TitleH1>
      <TitleH2>Descubre el mundo de las celebridades y el estilo de vida con acceso exclusivo, antes que nadie.</TitleH2>
    </SectionContainer>
  </HeaderContainer>
);
