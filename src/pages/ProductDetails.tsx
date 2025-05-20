
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ShoppingCart, 
  Heart, 
  Share2, 
  Star, 
  CheckCircle,
  ArrowRight,
  ShoppingBag,
  Package
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { Product } from '@/types';

// Mock data for the product
const product: Product = {
  id: "1",
  name: "IP-камера Hikvision DS-2CD2143G2-I",
  category: "cameras",
  type: "video",
  price: 12500,
  discountPrice: 9999,
  image: "https://via.placeholder.com/600x400?text=Camera",
  rating: 4.8,
  reviews: 124,
  inStock: true,
  description: "Высококачественная IP-камера с разрешением 4 МП для систем видеонаблюдения. Оснащена ИК-подсветкой до 30 м, имеет защиту от пыли и влаги по стандарту IP67.",
  features: [
    "Разрешение 4 МП (2688 × 1520)",
    "ИК-подсветка до 30 м",
    "Класс защиты IP67",
    "Поддержка H.265+",
    "Обнаружение движения",
    "Встроенный микрофон"
  ],
  specifications: {
    "Сенсор": "1/3'' CMOS",
    "Разрешение": "4 МП (2688 × 1520)",
    "Объектив": "2.8 мм",
    "Угол обзора": "103°",
    "Ночное видение": "30 метров",
    "Сжатие": "H.265+/H.265/H.264+/H.264",
    "Сеть": "RJ-45 (10/100 Base-T)",
    "Питание": "12 В DC / PoE (802.3af)",
    "Рабочая температура": "-30°C до +60°C",
    "Размеры": "70 × 155 × 70 мм"
  }
};

// Mock data for related products
const relatedProducts: Product[] = [
  {
    id: "2",
    name: "IP-камера Hikvision DS-2CD2043G2-I",
    category: "cameras",
    type: "video",
    price: 10500,
    image: "https://via.placeholder.com/300x200?text=Camera+2",
    rating: 4.6,
    reviews: 95,
    inStock: true,
    description: "IP-камера с разрешением 4 МП",
    features: ["Разрешение 4 МП", "ИК-подсветка до 30 м"],
    specifications: {
      "Сенсор": "1/3'' CMOS",
      "Разрешение": "4 МП"
    }
  },
  {
    id: "3",
    name: "IP-камера Hikvision DS-2CD2H43G2-IZS",
    category: "cameras",
    type: "video",
    price: 15800,
    image: "https://via.placeholder.com/300x200?text=Camera+3",
    rating: 4.9,
    reviews: 78,
    inStock: true,
    description: "IP-камера с разрешением 4 МП и моторизованным объективом",
    features: ["Разрешение 4 МП", "Моторизованный объектив"],
    specifications: {
      "Сенсор": "1/3'' CMOS",
      "Разрешение": "4 МП"
    }
  },
  {
    id: "4",
    name: "IP-камера Hikvision DS-2CD2T47G2-L",
    category: "cameras",
    type: "video",
    price: 13200,
    image: "https://via.placeholder.com/300x200?text=Camera+4",
    rating: 4.7,
    reviews: 103,
    inStock: false,
    description: "IP-камера с технологией ColorVu для цветного ночного видения",
    features: ["ColorVu", "Цветное ночное видение"],
    specifications: {
      "Сенсор": "1/2.7'' CMOS",
      "Разрешение": "4 МП"
    }
  }
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    toast({
      title: "Товар добавлен в корзину",
      description: `${product.name} (${quantity} шт.)`,
    });
  };

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="container py-8">
      <div className="mb-8 flex items-center text-sm">
        <button onClick={() => navigate('/shop')} className="text-gray-500 hover:text-guard-primary">Магазин</button>
        <span className="mx-2">/</span>
        <button onClick={() => navigate('/shop?category=cameras')} className="text-gray-500 hover:text-guard-primary">Камеры</button>
        <span className="mx-2">/</span>
        <span className="text-guard-primary font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto object-contain"
            style={{ minHeight: "400px" }}
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <span className="text-gray-700 ml-1 mr-2">{product.rating}</span>
            </div>
            <span className="text-gray-500">({product.reviews} отзывов)</span>
            <span className="mx-3 text-gray-300">|</span>
            <span className={`${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
              {product.inStock ? 'В наличии' : 'Нет в наличии'}
            </span>
          </div>
          
          <div className="mb-6">
            {product.discountPrice ? (
              <div className="flex items-center">
                <span className="text-3xl font-bold text-guard-primary mr-3">{product.discountPrice} ₽</span>
                <span className="text-gray-500 text-xl line-through">{product.price} ₽</span>
                <span className="ml-3 bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                  Скидка {Math.round((1 - product.discountPrice / product.price) * 100)}%
                </span>
              </div>
            ) : (
              <span className="text-3xl font-bold text-guard-primary">{product.price} ₽</span>
            )}
          </div>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Основные характеристики:</h3>
            <ul className="space-y-2">
              {product.features.slice(0, 5).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="border border-gray-300 rounded flex items-center">
                <button 
                  onClick={handleDecrement}
                  className="px-4 py-2 border-r border-gray-300 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button 
                  onClick={handleIncrement}
                  className="px-4 py-2 border-l border-gray-300 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <span className="ml-3 text-gray-600">
                Доступно: {Math.min(10, Math.max(0, Math.floor(Math.random() * 100)))} шт.
              </span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button 
                className="flex-1 btn-primary"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                В корзину
              </Button>
              
              <Button variant="outline" className="btn-secondary">
                <Heart className="mr-2 h-5 w-5" />
                В избранное
              </Button>
              
              <Button variant="outline" className="btn-secondary">
                <Share2 className="mr-2 h-5 w-5" />
                Поделиться
              </Button>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center mb-3">
              <Package className="h-5 w-5 text-guard-primary mr-2" />
              <span className="font-medium">Бесплатная доставка</span>
              <span className="ml-1 text-gray-500">при заказе от 5000 ₽</span>
            </div>
            <div className="flex items-center">
              <ShoppingBag className="h-5 w-5 text-guard-primary mr-2" />
              <span className="font-medium">Возврат в течение 14 дней</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="mb-12">
        <div className="border-b border-gray-200 mb-6">
          <div className="flex overflow-x-auto space-x-8">
            <button className="text-guard-primary border-b-2 border-guard-primary font-medium py-2 px-1">Характеристики</button>
            <button className="text-gray-500 hover:text-guard-primary py-2 px-1">Описание</button>
            <button className="text-gray-500 hover:text-guard-primary py-2 px-1">Отзывы ({product.reviews})</button>
            <button className="text-gray-500 hover:text-guard-primary py-2 px-1">Вопросы и ответы</button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(product.specifications).map(([key, value], index) => (
              <div key={index} className="flex">
                <span className="w-1/2 text-gray-600">{key}:</span>
                <span className="w-1/2 font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Похожие товары</h2>
          <button className="text-guard-primary flex items-center hover:text-guard-secondary">
            Посмотреть все <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Recently Viewed */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Недавно просмотренные</h2>
          <button className="text-guard-primary flex items-center hover:text-guard-secondary">
            Посмотреть все <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.slice(0, 4).reverse().map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
