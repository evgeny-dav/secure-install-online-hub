
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getProductById } from '@/data/mockData';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { ChevronLeft, ShoppingCart, Check, Info, Shield } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  useEffect(() => {
    if (id) {
      const fetchedProduct = getProductById(id);
      if (fetchedProduct) {
        setProduct(fetchedProduct);
      }
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addItem(product.id, quantity);
    }
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  if (!product) {
    return (
      <div className="container py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Товар не найден</h2>
        <p className="text-gray-600 mb-6">Извините, запрашиваемый товар не существует или был удален.</p>
        <Link to="/shop">
          <Button className="btn-primary">Вернуться в магазин</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <Link to="/shop" className="inline-flex items-center text-guard-primary hover:text-guard-secondary mb-6">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Назад к списку товаров
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          {/* Изображение товара */}
          <div className="flex justify-center items-center">
            <img 
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-80 object-contain"
            />
          </div>

          {/* Информация о товаре */}
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <div className="text-sm text-gray-500 mb-4">
              Категория: {product.category} | Артикул: {product.id}
            </div>
            
            <div className="flex items-center mb-4">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current fill-none'}`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 ml-2">{product.rating} ({product.reviews} отзывов)</span>
            </div>

            <div className="text-xl font-bold text-guard-primary mb-4">
              {product.discountPrice ? (
                <div className="flex items-center">
                  <span className="text-2xl">
                    {product.discountPrice.toLocaleString('ru-RU')} ₽
                  </span>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
              ) : (
                <span className="text-2xl">
                  {product.price.toLocaleString('ru-RU')} ₽
                </span>
              )}
            </div>

            <div className="mb-6">
              <div className="flex items-center text-sm mb-4">
                <div className={`mr-2 ${product.inStock ? 'text-green-500' : 'text-red-500'}`}>
                  {product.inStock ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <Info className="h-5 w-5" />
                  )}
                </div>
                <span className={product.inStock ? 'text-green-600' : 'text-red-500'}>
                  {product.inStock ? 'В наличии' : 'Нет в наличии'}
                </span>
              </div>

              <div className="flex items-center mb-6">
                <Button 
                  onClick={decrementQuantity} 
                  variant="outline" 
                  size="icon" 
                  disabled={quantity <= 1 || !product.inStock}
                  className="h-10 w-10"
                >
                  -
                </Button>
                <span className="w-16 text-center mx-2">{quantity}</span>
                <Button 
                  onClick={incrementQuantity} 
                  variant="outline" 
                  size="icon" 
                  disabled={!product.inStock}
                  className="h-10 w-10"
                >
                  +
                </Button>
                <Button 
                  onClick={handleAddToCart} 
                  className="ml-4 btn-primary flex-grow"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  В корзину
                </Button>
              </div>

              <div className="bg-guard-light rounded-lg p-4 text-sm">
                <div className="flex items-start mb-2">
                  <Shield className="h-5 w-5 text-guard-primary mt-0.5 mr-2" />
                  <div>
                    <p className="font-medium">Гарантия 12 месяцев</p>
                    <p className="text-gray-600">На все оборудование и комплектующие</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Truck className="h-5 w-5 text-guard-primary mt-0.5 mr-2" />
                  <div>
                    <p className="font-medium">Доставка и установка</p>
                    <p className="text-gray-600">Доставка по всей России, профессиональный монтаж</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="description" className="p-6 border-t">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="description">Описание</TabsTrigger>
            <TabsTrigger value="features">Особенности</TabsTrigger>
            <TabsTrigger value="specifications">Характеристики</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="text-gray-700">
            <p>{product.description}</p>
          </TabsContent>
          <TabsContent value="features">
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="specifications">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value], index) => (
                <div key={index} className="border-b pb-2">
                  <span className="text-gray-600">{key}: </span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetails;
