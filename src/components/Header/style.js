import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 15%;
  height: calcSize($size: medium);
  padding: 10px 10px;
  box-sizing: border-box;
`;

const LogoContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.logoColor};
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleH1 = styled.h1`
  margin: 10px;
  text-align: center;
  font-family: ${({ theme }) => theme.colors.fontPrimary};
  font-size: clamp(1.8rem, 5vw, 3.2rem);
`;

const TitleH2 = styled.h2`
  text-align: center;
  font-size: clamp(0.5rem, 3.5vw, 1.8rem);
  font-family: ${({ theme }) => theme.colors.fontPrimary};
`;

export { HeaderContainer, Logo, LogoContainer, SectionContainer,TitleH1,TitleH2 }