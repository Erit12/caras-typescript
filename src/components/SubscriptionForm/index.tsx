import React, { useState } from 'react';
import { ArticleContainer, ImageFeature, LegendTime, FormNewsletter } from './style';
import bgImg from '../../assets/fondo_destacado.jpg';

interface FormData {
  name: string;
  email: string;
}

export const SubscriptionForm = () => {
  const [form, setForm] = useState<FormData>({ name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
    <ArticleContainer>
      <aside>
        <ImageFeature src={bgImg} alt="imgen_lectura" />
      </aside>
      <LegendTime>
        🕒 ¡Toma 10 segundos! Y disfrútalo durante 12 magnificos meses.
      </LegendTime>
      <FormNewsletter onSubmit={handleSubmit} aria-label="Formulario de suscripción">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Correo electrónico" aria-required="true"/>
        <button type="submit" aria-label="Enviar suscripción">SUSCRIBETE GRATIS</button>
      </FormNewsletter>
    </ArticleContainer>
    </>
  );
};
