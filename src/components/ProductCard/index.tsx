import styled from 'styled-components';
import { Product } from '../../types/product';

const Card = styled.div`
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

const ImageContainer = styled.div`
  height: 200px;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  margin: 0 0 0.5rem;
`;

const Price = styled.p`
  font-size: 1.1rem;
  color: var(--secondary-color);
  margin: 0 0 1rem;
`;

const BuyButton = styled.button`
  background: var(--secondary-color);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  width: 100%;
  transition: background 0.3s;

  &:hover {
    background: #ff5252;
  }
`;

type Props = {
  product: Product;
  onAddToCart: () => void;
};

export const ProductCard = ({ product, onAddToCart }: Props) => {
  return (
    <Card>
      <ImageContainer>
        <Image src={product.image} alt={product.title} />
      </ImageContainer>
      <Content>
        <Title>{product.title}</Title>
        <Price>{product.price} ₽</Price>
        <BuyButton onClick={onAddToCart}>Купить</BuyButton>
      </Content>
    </Card>
  );
};