import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s;
  width: 100%;
  max-width: 300px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }
`;

export const ImageContainer = styled.div`
  height: 200px;
  background: #f0f0f0;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 1.5rem;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  margin: 0 0 0.5rem;
`;

export const Price = styled.p`
  font-size: 1.1rem;
  color: var(--secondary-color);
  margin: 0 0 1rem;
`;

export const BuyButton = styled.button`
  background: var(--secondary-color);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  width: 100%;
  transition: background 0.3s;

  &:hover {
    background: #217dbb;
  }
`;