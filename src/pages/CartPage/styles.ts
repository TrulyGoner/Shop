import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 800px; /* Максимальная ширина контейнера */
  margin: 0 auto; /* Центрирование */
  padding: 2rem;
`;

export const CartList = styled.div`
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 1.5rem 0;
`;

export const TotalContainer = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.button`
  background: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  border-radius: 25px;
  margin-top: 2rem;
  transition: background 0.3s;

  &:hover {
    background: #1a2e3f;
  }
`;