import styled from "styled-components";


const ArticleContainer = styled.form`
  width: 100%;
`;

const ImageFeature = styled.img`
  box-sizing: border-box;
  max-width: 25%;
  height: 80%;
  @media (max-width: 480px) {
    display: none;
  };
`;

const LegendTime = styled.p`
  font-family: ${({ theme }) => theme.colors.fontPrimary};
  font-weight: 200;
`;

const FormNewsletter = styled.form`
  max-width: 500px;
  margin: 0 auto 30px;
  input{
    width: 100%;
    padding: 12px 15px;
    margin: 10px 0;
    border: none;
    border-radius: 25px;
    font-size: clamp(0.8rem, 3vw, 1.2rem);
  };
  button {
    background-color: ${({ theme }) => theme.colors.logoColor};
    color: ${({ theme }) => theme.colors.backColor};
    padding: 15px 30px;
    border: none;
    border-radius: 30px;
    font-size: clamp(0.8rem, 3vw, 1.2rem);
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.05);
      background-color: ${({ theme }) => theme.colors.logoColor};
    };
  };
`

export { ArticleContainer, ImageFeature, LegendTime, FormNewsletter };