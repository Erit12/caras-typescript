import styled from "styled-components";

const FooterStyle = styled.footer`
  background-color: ${({ theme }) => theme.colors.logoColor};
  color:${({ theme }) => theme.colors.darkColor};
  text-align: center;
  padding: 15px 15px;
  h3{
    margin-bottom: 20px;
    font-size: clamp(1.2rem, 1.5rem, 1.6rem);
  }
  div{
    margin-bottom: 25px;
    a{
      margin: 0 10px;
      display: inline-block;
      img {
        width: 30px;
        filter: invert(1);
        color: ${({ theme }) => theme.colors.darkColor};
      }
    }
  }
  p{
    font-family: ${({ theme }) => theme.colors.fontPrimary};
    font-weight: 200;
  }


`;

export { FooterStyle };