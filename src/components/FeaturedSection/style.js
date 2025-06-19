import styled from "styled-components";


const NewsletterSection = styled.section`
  color: $bg-color;
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: nowrap;
  @media (max-width: 768px) {
    padding: 40px 15px;
    @include flexColumn;
  };
  @media (max-width: 480px) {
    flex-wrap: wrap;
  };
`;


const NewsletterArticle = styled.article`
  width: 100%;
`;

const LegendH2 = styled.h2`
  font-size: clamp(2rem, 3vw, 2.7rem);
  color: ${({ theme }) => theme.colors.logoColor };
  margin-bottom: 10px;
  @media (max-width: 480px) {
    font-size: clamp(1.6rem, 2rem, 2.3rem);
  };
`;

const LegendH3 = styled.h3`
  font-size: clamp(1rem, 2.5vw, 1.7rem);
  margin-bottom: 30px;
  @media (max-width: 480px) {
    font-size: clamp(1rem, 1.2rem, 1.4rem);
  };
`;

const ListContainer = styled.ul`
  max-width: 600px;
  margin: 0 auto 30px;
  text-align: left;
`;

const ListElement = styled.li`
  list-style: none;
  padding-left: 1.5em;
  margin-bottom: 10px;
  &::before {
    content: "⭐";
    left: 0;
  };
`;

export { NewsletterSection, NewsletterArticle, LegendH2, LegendH3, ListContainer, ListElement }