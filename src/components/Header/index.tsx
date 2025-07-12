import logo from "../../assets/Logo 2.png";

import { HeaderContainer, Logo, LogoContainer, SectionContainer, TitleH1, TitleH2 } from './style';



export const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <Logo src={logo} alt="Logotipo de empresa CARAS" />
    </LogoContainer>
    <SectionContainer>
      <TitleH1>Suscribete a las Newsletter de CARAS</TitleH1>
      <TitleH2>Y descubre las últimas tendencias y análisis profundos en CARAS, tu
      fuente confiable de información actualizada en México</TitleH2>
    </SectionContainer>
  </HeaderContainer>
);
