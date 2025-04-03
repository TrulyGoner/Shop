import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styled from 'styled-components';
import { useCart } from '../../context/CartContext';

const StyledHeader = styled.header`
  padding: 20px;
  background: #2c3e50;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 24px;
  color: white;
  text-decoration: none;
`;

const CartLink = styled(Link)`
  position: relative;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CartCount = styled.span`
  background: #e74c3c;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 12px;
`;

export const Header = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <StyledHeader>
      <Logo to="/">AudioStore</Logo>
      <CartLink to="/cart">
        <AiOutlineShoppingCart size={24} as="svg" />
        {totalItems > 0 && <CartCount>{totalItems}</CartCount>}
      </CartLink>
    </StyledHeader>
  );
};