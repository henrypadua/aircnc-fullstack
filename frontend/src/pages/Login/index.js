import React, { useState } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

export default function Login({ history }) {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/sessions', { email });

    const { _id } = response.data;

    localStorage.setItem('user', _id);

    // history é responsável por redirecionar o usuário
    history.push('/dashboard');
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e econtre{' '}
        <strong>talentos</strong> para sua empresa
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input
          id="email"
          type="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={handleEmailChange}
        />
        <button className="btn" type="submit">
          Entrar
        </button>
      </form>
    </>
  );
}
