// src/components/CartItem/index.tsx
import { Product } from '../../types/product';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #ddd;
`;

const Details = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #3498db;
`;

const DisabledButton = styled(Button)`
  opacity: 0.5;
  cursor: not-allowed;
`;

type Props = {
  product: Product;
  quantity: number;
  onRemove: () => void;
  onUpdateQuantity: (quantity: number) => void;
};

export const CartItemComponent = ({
  product,
  quantity,
  onRemove,
  onUpdateQuantity,
}: Props) => {
  return (
    <Item>
      <Details>
        <Image src={product.image} alt={product.title} />
        <div>
          <h4>{product.title}</h4>
          <p>{product.price} ₽</p>
        </div>
      </Details>
      <QuantityControl>
        <DisabledButton 
          onClick={() => onUpdateQuantity(quantity - 1)}
          disabled={quantity <= 1}
        >
          -
        </DisabledButton>
        <span>{quantity}</span>
        <Button onClick={() => onUpdateQuantity(quantity + 1)}>+</Button>
        <Button onClick={onRemove}>×</Button>
      </QuantityControl>
    </Item>
  );
};