
import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from '@/contexts/AuthContext';
import { getUserOrders } from '@/data/mockData';
import { ServiceOrder } from '@/types';
import OrderStatus from '@/components/OrderStatus';
import { User, ClipboardList, Settings, LogOut } from 'lucide-react';

const Dashboard = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [orders, setOrders] = useState<ServiceOrder[]>([]);
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    // Проверяем аутентификацию
    if (!isAuthenticated) {
      navigate('/login', { state: { from: location.pathname } });
      return;
    }

    // Загружаем заказы пользователя
    const userOrders = getUserOrders();
    setOrders(userOrders);

    // Если есть состояние с флагом нового заказа, открываем вкладку с заказами
    if (location.state?.serviceOrderPlaced || location.state?.orderPlaced) {
      setActiveTab('orders');
    }
  }, [isAuthenticated, navigate, location]);

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Личный кабинет</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Боковое меню */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="h-20 w-20 rounded-full bg-guard-light flex items-center justify-center mb-3">
                  <User className="h-10 w-10 text-guard-primary" />
                </div>
                <h2 className="font-bold text-lg">{user.name}</h2>
                <p className="text-gray-600 text-sm">{user.email}</p>
              </div>
            </div>
            
            <div className="p-4">
              <ul className="space-y-2">
                <li>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${activeTab === 'profile' ? 'text-guard-primary font-medium' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('profile')}
                  >
                    <User className="mr-2 h-5 w-5" />
                    Мой профиль
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${activeTab === 'orders' ? 'text-guard-primary font-medium' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('orders')}
                  >
                    <ClipboardList className="mr-2 h-5 w-5" />
                    Мои заказы
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${activeTab === 'settings' ? 'text-guard-primary font-medium' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('settings')}
                  >
                    <Settings className="mr-2 h-5 w-5" />
                    Настройки
                  </Button>
                </li>
                <li className="pt-4 border-t mt-4">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-600"
                    onClick={logout}
                  >
                    <LogOut className="mr-2 h-5 w-5" />
                    Выйти из аккаунта
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Основное содержимое */}
        <div className="lg:col-span-3">
          {activeTab === 'profile' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Данные профиля</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ФИО</label>
                    <input
                      type="text"
                      value={user.name}
                      readOnly
                      className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={user.email}
                      readOnly
                      className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                    <input
                      type="tel"
                      value={user.phone}
                      readOnly
                      className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Адрес</label>
                    <input
                      type="text"
                      value={user.address || 'Не указан'}
                      readOnly
                      className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
                    />
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <Button className="btn-primary">
                    Редактировать профиль
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'orders' && (
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Мои заказы</h2>
                
                <Tabs defaultValue="service">
                  <TabsList className="mb-6">
                    <TabsTrigger value="service">Монтажные работы</TabsTrigger>
                    <TabsTrigger value="shop">Заказы товаров</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="service">
                    {orders.length > 0 ? (
                      <div className="space-y-6">
                        {orders.map(order => (
                          <OrderStatus key={order.id} order={order} />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <ClipboardList className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-700 mb-2">У вас пока нет заказов</h3>
                        <p className="text-gray-500 mb-4">Оформите заказ на монтаж системы безопасности</p>
                        <Link to="/order">
                          <Button className="btn-primary">Заказать монтаж</Button>
                        </Link>
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="shop">
                    <div className="text-center py-8">
                      <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-700 mb-2">У вас пока нет заказов</h3>
                      <p className="text-gray-500 mb-4">Оформите заказ в нашем интернет-магазине</p>
                      <Link to="/shop">
                        <Button className="btn-primary">Перейти в магазин</Button>
                      </Link>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start mb-4">
                  <Search className="h-5 w-5 text-guard-primary mt-0.5 mr-2" />
                  <div>
                    <h3 className="font-semibold mb-1">Отслеживание статуса заказа</h3>
                    <p className="text-sm text-gray-600">
                      В личном кабинете вы можете отслеживать статус выполнения заказа в режиме реального времени.
                      Все этапы работ отображаются с указанием сроков выполнения.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Bell className="h-5 w-5 text-guard-primary mt-0.5 mr-2" />
                  <div>
                    <h3 className="font-semibold mb-1">Уведомления о статусе заказа</h3>
                    <p className="text-sm text-gray-600">
                      Вы будете получать email-уведомления о изменении статуса заказа
                      и завершении каждого этапа монтажных работ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'settings' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Настройки</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Уведомления</h3>
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <p className="font-medium">Email-уведомления</p>
                      <p className="text-sm text-gray-600">Получать уведомления о статусе заказов</p>
                    </div>
                    <Switch id="email-notifications" checked={true} />
                  </div>
                </div>
                
                <div className="pt-4">
                  <h3 className="font-semibold mb-3">Безопасность</h3>
                  <Button variant="outline">Изменить пароль</Button>
                </div>
                
                <div className="pt-4 border-t">
                  <Button variant="destructive">Удалить аккаунт</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Добавляем недостающие импорты
import { Switch } from '@/components/ui/switch';
import { ShoppingCart, Search, Bell, Truck } from 'lucide-react';

export default Dashboard;
