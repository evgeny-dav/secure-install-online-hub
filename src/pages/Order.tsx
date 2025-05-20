
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';
import { Camera, Bell, Shield, CheckCircle } from 'lucide-react';

const Order = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    type: '',
    name: user?.name || '',
    phone: user?.phone || '',
    email: user?.email || '',
    address: user?.address || '',
    description: '',
    date: '',
    time: '',
    agree: false
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const nextStep = () => {
    setActiveStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setActiveStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agree) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласиться с условиями",
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);

    // Имитация отправки заявки
    setTimeout(() => {
      toast({
        title: "Заявка успешно отправлена",
        description: "Наш специалист свяжется с вами в ближайшее время",
      });
      setLoading(false);
      if (isAuthenticated) {
        navigate('/dashboard', { state: { serviceOrderPlaced: true } });
      } else {
        navigate('/', { state: { serviceOrderPlaced: true } });
      }
    }, 1500);
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Заказать монтаж системы безопасности</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6 border-b">
          <div className="flex flex-wrap justify-between items-center">
            <h2 className="text-xl font-bold mb-4 md:mb-0">Оформление заявки</h2>
            
            <div className="flex w-full md:w-auto">
              <div className={`flex items-center ${activeStep >= 1 ? 'text-guard-primary' : 'text-gray-400'}`}>
                <div className={`flex items-center justify-center h-8 w-8 rounded-full ${activeStep >= 1 ? 'bg-guard-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                  1
                </div>
                <span className="ml-2 hidden md:block">Тип системы</span>
              </div>
              <div className={`w-8 h-0.5 mx-1 ${activeStep >= 2 ? 'bg-guard-primary' : 'bg-gray-200'}`}></div>
              
              <div className={`flex items-center ${activeStep >= 2 ? 'text-guard-primary' : 'text-gray-400'}`}>
                <div className={`flex items-center justify-center h-8 w-8 rounded-full ${activeStep >= 2 ? 'bg-guard-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                  2
                </div>
                <span className="ml-2 hidden md:block">Контактные данные</span>
              </div>
              <div className={`w-8 h-0.5 mx-1 ${activeStep >= 3 ? 'bg-guard-primary' : 'bg-gray-200'}`}></div>
              
              <div className={`flex items-center ${activeStep >= 3 ? 'text-guard-primary' : 'text-gray-400'}`}>
                <div className={`flex items-center justify-center h-8 w-8 rounded-full ${activeStep >= 3 ? 'bg-guard-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                  3
                </div>
                <span className="ml-2 hidden md:block">Подтверждение</span>
              </div>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          {activeStep === 1 && (
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Выберите тип системы</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div 
                  className={`border rounded-lg p-6 text-center cursor-pointer transition-all hover:shadow-md ${formData.type === 'video' ? 'border-guard-primary bg-guard-light' : 'border-gray-200'}`}
                  onClick={() => setFormData(prev => ({ ...prev, type: 'video' }))}
                >
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full ${formData.type === 'video' ? 'bg-guard-primary text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <Camera className="h-8 w-8" />
                    </div>
                  </div>
                  <h4 className="font-medium mb-2">Видеонаблюдение</h4>
                  <p className="text-sm text-gray-600">
                    Установка камер наблюдения и систем видеозаписи
                  </p>
                </div>
                
                <div 
                  className={`border rounded-lg p-6 text-center cursor-pointer transition-all hover:shadow-md ${formData.type === 'fire' ? 'border-guard-primary bg-guard-light' : 'border-gray-200'}`}
                  onClick={() => setFormData(prev => ({ ...prev, type: 'fire' }))}
                >
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full ${formData.type === 'fire' ? 'bg-guard-primary text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <Bell className="h-8 w-8" />
                    </div>
                  </div>
                  <h4 className="font-medium mb-2">Пожарная сигнализация</h4>
                  <p className="text-sm text-gray-600">
                    Монтаж датчиков и систем оповещения о пожаре
                  </p>
                </div>
                
                <div 
                  className={`border rounded-lg p-6 text-center cursor-pointer transition-all hover:shadow-md ${formData.type === 'access' ? 'border-guard-primary bg-guard-light' : 'border-gray-200'}`}
                  onClick={() => setFormData(prev => ({ ...prev, type: 'access' }))}
                >
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full ${formData.type === 'access' ? 'bg-guard-primary text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <Shield className="h-8 w-8" />
                    </div>
                  </div>
                  <h4 className="font-medium mb-2">Система контроля доступа</h4>
                  <p className="text-sm text-gray-600">
                    Установка систем контроля и управления доступом
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Расскажите подробнее о вашем проекте
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Опишите требования к системе, площадь помещения, количество камер/датчиков и т.д."
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-guard-primary"
                />
              </div>
              
              <div className="flex justify-end">
                <Button 
                  type="button" 
                  onClick={nextStep}
                  className="btn-primary"
                  disabled={!formData.type}
                >
                  Далее
                </Button>
              </div>
            </div>
          )}
          
          {activeStep === 2 && (
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Укажите контактные данные</h3>
              
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
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-guard-primary"
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
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-guard-primary"
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
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-guard-primary"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Адрес объекта *
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-guard-primary"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Предпочтительная дата монтажа
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-guard-primary"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                    Предпочтительное время
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-guard-primary"
                  >
                    <option value="">Выберите время</option>
                    <option value="9:00-12:00">9:00 - 12:00</option>
                    <option value="12:00-15:00">12:00 - 15:00</option>
                    <option value="15:00-18:00">15:00 - 18:00</option>
                    <option value="18:00-21:00">18:00 - 21:00</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-between">
                <Button 
                  type="button" 
                  onClick={prevStep}
                  variant="outline"
                >
                  Назад
                </Button>
                <Button 
                  type="button" 
                  onClick={nextStep}
                  className="btn-primary"
                  disabled={!formData.name || !formData.phone || !formData.email || !formData.address}
                >
                  Далее
                </Button>
              </div>
            </div>
          )}
          
          {activeStep === 3 && (
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Подтверждение заявки</h3>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Тип системы</p>
                    <p className="font-medium">
                      {formData.type === 'video' ? 'Видеонаблюдение' : 
                       formData.type === 'fire' ? 'Пожарная сигнализация' : 
                       formData.type === 'access' ? 'Система контроля доступа' : ''}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">ФИО</p>
                    <p className="font-medium">{formData.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Телефон</p>
                    <p className="font-medium">{formData.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <p className="font-medium">{formData.email}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-600 mb-1">Адрес объекта</p>
                    <p className="font-medium">{formData.address}</p>
                  </div>
                  {formData.date && (
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Дата монтажа</p>
                      <p className="font-medium">{formData.date}</p>
                    </div>
                  )}
                  {formData.time && (
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Время монтажа</p>
                      <p className="font-medium">{formData.time}</p>
                    </div>
                  )}
                  {formData.description && (
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-600 mb-1">Описание проекта</p>
                      <p className="font-medium">{formData.description}</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <label htmlFor="agree" className="ml-2 text-sm text-gray-700">
                    Я согласен с <a href="#" className="text-guard-primary hover:underline">условиями оказания услуг</a> и даю согласие на обработку персональных данных
                  </label>
                </div>
              </div>
              
              <div className="mb-6 bg-guard-light p-4 rounded-lg">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-guard-primary mt-0.5 mr-2" />
                  <p className="text-sm">
                    После отправки заявки наш специалист свяжется с вами для уточнения деталей и составления сметы. 
                    Выезд на объект для оценки и консультация — бесплатно.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-between">
                <Button 
                  type="button" 
                  onClick={prevStep}
                  variant="outline"
                >
                  Назад
                </Button>
                <Button 
                  type="submit" 
                  className="btn-primary"
                  disabled={loading || !formData.agree}
                >
                  {loading ? 'Отправка заявки...' : 'Отправить заявку'}
                </Button>
              </div>
            </div>
          )}
        </form>
      </div>
      
      {/* Информационный блок */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-guard-light rounded-full">
              <CheckCircle className="h-6 w-6 text-guard-primary" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">Гарантия качества</h3>
          <p className="text-gray-600 text-center">
            Мы предоставляем гарантию на все установленные системы и выполненные работы сроком до 3 лет.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-guard-light rounded-full">
              <Clock className="h-6 w-6 text-guard-primary" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">Быстрые сроки</h3>
          <p className="text-gray-600 text-center">
            Монтаж системы видеонаблюдения или пожарной сигнализации занимает от 1 до 5 дней в зависимости от сложности.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-guard-light rounded-full">
              <Settings className="h-6 w-6 text-guard-primary" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">Сервисное обслуживание</h3>
          <p className="text-gray-600 text-center">
            Мы предлагаем техническое обслуживание систем безопасности для обеспечения их бесперебойной работы.
          </p>
        </div>
      </div>
    </div>
  );
};

// Добавляем недостающие импорты
import { Clock, Settings, Info } from 'lucide-react';

export default Order;
