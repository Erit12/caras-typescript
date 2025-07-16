import { SubscriptionForm } from "../SubscriptionForm";
import { NewsletterSection, NewsletterArticle, LegendH2, LegendH3, ListContainer, ListElement } from "./style";


export const FeaturedSection = () => (
  <>
  <NewsletterSection >  
    <NewsletterArticle aria-label="Invitacion a realizar la subscripcion">   
      <LegendH2>¡No te pierdas lo mejor del entretenimiento!</LegendH2>
      <LegendH3>Suscríbete al newsletter exclusivo de <em>CARAS</em></LegendH3>
      <ListContainer aria-label="Beneficios al suscribirse">  
        <ListElement>Noticias frescas sobre cine, series, música y celebridades</ListElement>
        <ListElement>Entrevistas con tus artistas favoritos</ListElement>
        <ListElement>Recomendaciones semanales de lo que no te puedes perder</ListElement>
        <ListElement>Contenido exclusivo solo para suscriptores</ListElement>
      </ListContainer>
    </NewsletterArticle>
    <SubscriptionForm />
  </NewsletterSection>
  </>
);