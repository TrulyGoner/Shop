import { ProductCard } from '../../components/ProductCard';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { ProductsGrid } from './styles';

export const HomePage = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <h1>Каталог товаров</h1>
      <ProductsGrid>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={{
              ...product,
              rating: 4.5 
            }}
            onAddToCart={() => addToCart(product.id)}
          />
        ))}
      </ProductsGrid>
    </div>
  );
};