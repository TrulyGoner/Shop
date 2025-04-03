import styled from 'styled-components';

export const Item = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 150px;
  gap: 1.5rem;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProductTitle = styled.h4`
  margin: 0;
  font-size: 1rem;
`;

export const ProductPrice = styled.p`
  margin: 0;
  color: var(--secondary-color);
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const QuantityButton = styled.button`
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;

  &:hover {
    background: #e0e0e0;
  }
`;

export const RemoveButton = styled.button`
  color: var(--accent-color);
  background: none;
  padding: 0;
  margin-left: auto;
  transition: color 0.3s;

  &:hover {
    color: #c0392b;
  }
`;