import { ProductCard } from '../../components/ProductCard';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

export const HomePage = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <h1>Каталог товаров</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => addToCart(product.id)}
          />
        ))}
      </div>
    </div>
  );
};