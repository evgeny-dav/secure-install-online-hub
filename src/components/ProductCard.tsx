
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/types';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <Link to={`/shop/${product.id}`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/shop/${product.id}`}>
          <h3 className="text-lg font-semibold mb-2 hover:text-guard-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center mb-2">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current fill-none'}`}
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <div>
            {product.discountPrice ? (
              <div className="flex items-center">
                <span className="text-xl font-bold text-guard-primary">
                  {product.discountPrice.toLocaleString('ru-RU')} ₽
                </span>
                <span className="text-sm text-gray-500 line-through ml-2">
                  {product.price.toLocaleString('ru-RU')} ₽
                </span>
              </div>
            ) : (
              <span className="text-xl font-bold text-guard-primary">
                {product.price.toLocaleString('ru-RU')} ₽
              </span>
            )}
          </div>
          <div className="text-sm">
            {product.inStock ? (
              <span className="text-green-600">В наличии</span>
            ) : (
              <span className="text-red-500">Нет в наличии</span>
            )}
          </div>
        </div>
        <Button 
          onClick={() => addItem(product.id)} 
          className="w-full btn-primary flex items-center justify-center"
          disabled={!product.inStock}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          В корзину
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
