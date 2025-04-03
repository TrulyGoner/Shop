import { CartItemComponent } from '../../components/CartItem';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';
import { Container, CartList, TotalContainer, BackButton } from './styles';

export const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const total = cartItems.reduce((acc, item) => {
    const product = products.find(p => p.id === item.productId);
    return acc + (product?.price || 0) * item.quantity;
  }, 0);

  return (
    <Container>
      <h1>Корзина</h1>
      <CartList>
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
      </CartList>
      <TotalContainer>
        <span>Итого:</span>
        <strong>{total} ₽</strong>
      </TotalContainer>
      <BackButton to="/">Вернуться в каталог</BackButton>
    </Container>
  );
};