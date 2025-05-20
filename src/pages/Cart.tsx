
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Plus, Minus, X, ShoppingCart, ArrowRight } from 'lucide-react';

const Cart = () => {
  const { items, updateQuantity, removeItem, getTotalPrice, getTotalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="container py-12 text-center">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <ShoppingCart className="h-16 w-16 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Ваша корзина пуста</h2>
          <p className="text-gray-600 mb-6">
            Добавьте товары в корзину, чтобы оформить заказ
          </p>
          <Link to="/shop">
            <Button className="btn-primary">Перейти в магазин</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Корзина</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold">Товары в корзине ({getTotalItems()})</h2>
            </div>
            
            <div className="divide-y">
              {items.map((item) => (
                <div key={item.productId} className="p-6 flex flex-col sm:flex-row items-start">
                  <div className="flex-shrink-0 w-24 h-24 mb-4 sm:mb-0 mr-6">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <Link 
                        to={`/shop/${item.productId}`} 
                        className="text-lg font-medium hover:text-guard-primary"
                      >
                        {item.product.name}
                      </Link>
                      <button 
                        onClick={() => removeItem(item.productId)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <p className="text-sm text-gray-500 mb-4">
                      Артикул: {item.productId}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center border rounded-md overflow-hidden">
                        <button 
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          className="p-2 hover:bg-gray-100"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-10 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        {item.product.discountPrice ? (
                          <div>
                            <span className="text-lg font-bold">
                              {(item.product.discountPrice * item.quantity).toLocaleString('ru-RU')} ₽
                            </span>
                            <p className="text-sm text-gray-500 line-through">
                              {(item.product.price * item.quantity).toLocaleString('ru-RU')} ₽
                            </p>
                          </div>
                        ) : (
                          <span className="text-lg font-bold">
                            {(item.product.price * item.quantity).toLocaleString('ru-RU')} ₽
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
            <h2 className="text-xl font-bold mb-4">Итого</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Товары ({getTotalItems()})</span>
                <span>{getTotalPrice().toLocaleString('ru-RU')} ₽</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Доставка</span>
                <span>Бесплатно</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold text-lg">
                <span>Итого к оплате</span>
                <span className="text-guard-primary">{getTotalPrice().toLocaleString('ru-RU')} ₽</span>
              </div>
            </div>
            
            <Link to="/checkout">
              <Button className="w-full btn-primary flex items-center justify-center">
                <span>Оформить заказ</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            
            <div className="mt-4 text-center">
              <Link to="/shop" className="text-guard-primary hover:text-guard-secondary text-sm">
                Продолжить покупки
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
