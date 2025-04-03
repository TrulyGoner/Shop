import { Link } from 'react-router-dom';
import { CartItemComponent } from '../../components/CartItem';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Total = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin: 20px 0;
  padding: 10px 20px;
  background: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 4px;
`;

export const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const total = cartItems.reduce((acc, item) => {
    const product = products.find(p => p.id === item.productId);
    return acc + (product?.price || 0) * item.quantity;
  }, 0);

  return (
    <Container>
      <h1>Корзина</h1>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          {cartItems.map(cartItem => {
            const product = products.find(p => p.id === cartItem.productId);
            return (
              product && (
                <CartItemComponent
                  key={cartItem.productId}
                  product={product}
                  quantity={cartItem.quantity}
                  onRemove={() => removeFromCart(cartItem.productId)}
                  onUpdateQuantity={(quantity) =>
                    updateQuantity(cartItem.productId, quantity)
                  }
                />
              )
            );
          })}
          <Total>
            Итого: <strong>{total} ₽</strong>
          </Total>
        </>
      )}
      <BackButton to="/">Вернуться в каталог</BackButton>
    </Container>
  );
};