
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';
import { Check } from 'lucide-react';

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    email: user?.email || '',
    address: user?.address || '',
    paymentMethod: 'card'
  });
  const [loading, setLoading] = useState(false);

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Имитация отправки заказа
    setTimeout(() => {
      toast({
        title: "Заказ успешно оформлен",
        description: `Номер заказа: ${Math.floor(10000 + Math.random() * 90000)}`,
      });
      clearCart();
      setLoading(false);
      navigate('/dashboard', { state: { orderPlaced: true } });
    }, 1500);
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Оформление заказа</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold">Данные для доставки</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    ФИО *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-guard-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-guard-primary"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-guard-primary"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Адрес доставки *
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-guard-primary"
                />
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Способ оплаты</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="card"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                      className="h-4 w-4 text-guard-primary border-gray-300"
                    />
                    <label htmlFor="card" className="ml-2 text-gray-700">
                      Банковская карта
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cash"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={handleChange}
                      className="h-4 w-4 text-guard-primary border-gray-300"
                    />
                    <label htmlFor="cash" className="ml-2 text-gray-700">
                      Наличными при получении
                    </label>
                  </div>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full btn-primary"
                disabled={loading}
              >
                {loading ? 'Оформление заказа...' : 'Подтвердить заказ'}
              </Button>
            </form>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
            <h2 className="text-xl font-bold mb-4">Ваш заказ</h2>
            
            <div className="divide-y mb-4">
              {items.map((item) => (
                <div key={item.productId} className="py-3 flex justify-between">
                  <div className="flex-grow pr-4">
                    <div className="flex items-start">
                      <div className="text-guard-primary font-medium mr-2">
                        {item.quantity} ×
                      </div>
                      <div>
                        <p className="font-medium">{item.product.name}</p>
                        <p className="text-sm text-gray-500">Артикул: {item.productId}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    {item.product.discountPrice ? (
                      <span className="font-bold">
                        {(item.product.discountPrice * item.quantity).toLocaleString('ru-RU')} ₽
                      </span>
                    ) : (
                      <span className="font-bold">
                        {(item.product.price * item.quantity).toLocaleString('ru-RU')} ₽
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Товары</span>
                <span>{getTotalPrice().toLocaleString('ru-RU')} ₽</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Доставка</span>
                <span>Бесплатно</span>
              </div>
              <div className="flex justify-between items-center font-bold text-lg">
                <span>Итого</span>
                <span className="text-guard-primary">{getTotalPrice().toLocaleString('ru-RU')} ₽</span>
              </div>
            </div>
            
            <div className="bg-guard-light p-4 rounded-lg">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <div>
                  <p className="font-medium">Бесплатная доставка</p>
                  <p className="text-sm text-gray-600">Для заказов от 5000 ₽</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
