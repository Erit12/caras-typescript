import { TestimonialSection, TestimonialCard } from "./style";
import avatar1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';
import avatar3 from '../../assets/avatar3.jpg';


interface Person {
  id: number;
  pictureName: string;
  name: string;
  opinion: string;
}

const persons: Person [] = [
  {
    id: 1,
    pictureName: avatar1,
    name: 'Carlos M.',
    opinion: `“¡El contenido exclusivo vale totalmente la pena! Entrevistas que
              no veo en ningún otro lado.”`,
  },
  {
    id: 2,
    pictureName:avatar2,
    name: 'Ana G.',
    opinion: `“Me encanta recibir el resumen de la semana, ¡siempre descubro
              nuevas series y películas buenísimas!”`,
  },
  {
    id: 3,
    pictureName: avatar3,
    name: 'Mariana R.',
    opinion: `“Me suscribí por curiosidad y ahora no me pierdo ni una edición.
              ¡10/10!”`,
  }
];

export const Testimonials = () => (
  <TestimonialSection  aria-label="Opiniones de clientes"> 
    <h2>Lo que dicen nuestros lectores</h2>
    <div>
      {persons.map ( person => (
          <TestimonialCard key={person.id}>
          <div className="card_header">
            <img src={person.pictureName} alt="Carlos" />
            <div className="card_name">{person.name}</div>
          </div>
          <p>{person.opinion}</p>
          </TestimonialCard>
        ) 
      )}
    </div>
  </TestimonialSection>
);
