import styled from "styled-components";



const TestimonialSection = styled.section`

  background-color: $back-color;
  padding: 60px 20px;
  text-align: center;

  h2 {
    font-size: clamp(0.5rem, 3.5vw, 2.2rem);
    color: ${({ theme }) => theme.colors.logoColor};
    margin-bottom: 40px;
  }

  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

`;


const TestimonialCard = styled.div`
  background-color: ${({ theme }) => theme.colors.backColor};
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 280px;
  text-align: left;
  @media (max-width: 768px) {
    max-width: 100%;
    box-sizing: border-box;
  }
  .card_header{
    display: flex;
    justify-content: center;
    align-items: center; 
    margin-bottom: 10px;

    img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 10px;
      @media (max-width: 480px) {
        width: 40px;
        height: 40px;
      }
    }
    .card_name{
      font-weight: bold;
      font-size: clamp(0.9rem, 1rem, 1.1rem);
    }
  }
  p{
    font-style: italic;
    font-size: clamp(0.8rem, 0.95rem, 1.05rem);
    color: ${({ theme }) => theme.colors.fontColor};
    font-weight: 200;
    @media (max-width: 480px) {
      font-size: clamp(0.6rem, 0.9rem, 1.1rem);
    }
  }

`;

export {  TestimonialSection, TestimonialCard }