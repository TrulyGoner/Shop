import { Product } from '../../types/product';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  width: 200px;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Button = styled.button`
  background: #3498db;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #2980b9;
  }
`;

type Props = {
  product: Product;
  onAddToCart: () => void;
};

export const ProductCard = ({ product, onAddToCart }: Props) => {
  return (
    <Card>
      <Image src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price} ₽</p>
      <Button onClick={onAddToCart}>Купить</Button>
    </Card>
  );
};