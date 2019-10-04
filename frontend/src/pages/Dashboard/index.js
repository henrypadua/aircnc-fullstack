import React, { useEffect } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

export default function Dashboard() {
  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem('user');
      const response = await api.get('/dashboard', {
        headers: { user_id }
      });
    }
  }, []);
}
