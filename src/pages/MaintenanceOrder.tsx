
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Calendar, CheckCircle, FileText, Package, ShieldCheck, User } from 'lucide-react';

type Plan = {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
};

const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Базовый',
    price: 5000,
    period: 'месяц',
    description: 'Для небольших объектов',
    features: [
      '1 визит в квартал',
      'Реагирование в течение 12 часов',
      'Поддержка в рабочее время',
      'До 5 устройств'
    ]
  },
  {
    id: 'standard',
    name: 'Стандарт',
    price: 12000,
    period: 'месяц',
    description: 'Для средних объектов',
    features: [
      '1 визит в месяц',
      'Реагирование в течение 6 часов',
      'Круглосуточная поддержка',
      'До 20 устройств',
      'Приоритетное обслуживание'
    ]
  },
  {
    id: 'premium',
    name: 'Премиум',
    price: 20000,
    period: 'месяц',
    description: 'Для крупных объектов',
    features: [
      'Еженедельные визиты',
      'Реагирование в течение 2 часов',
      'VIP поддержка 24/7',
      'Неограниченное количество устройств',
      'Персональный инженер',
      'Бесплатная замена оборудования'
    ]
  }
];

const MaintenanceOrder = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedPlan, setSelectedPlan] = useState<string>('standard');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    details: '',
    date: '',
    objectType: 'office'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.email || !formData.address) {
      toast({
        title: "Ошибка при оформлении заказа",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }
    
    // Submit form
    toast({
      title: "Заказ успешно оформлен",
      description: "Наш менеджер свяжется с вами в ближайшее время для уточнения деталей",
    });
    
    // Navigate to dashboard or thank you page
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  const selectedPlanData = plans.find(plan => plan.id === selectedPlan) || plans[1];

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">Заказ технического обслуживания</h1>
      <p className="text-gray-600 mb-8">Заполните форму ниже для заказа услуги технического обслуживания систем безопасности</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Данные для оформления заказа</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <h3 className="font-medium text-lg mb-4 flex items-center">
                  <User className="mr-2 h-5 w-5 text-guard-primary" />
                  Контактная информация
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Имя *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-guard-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Телефон *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-guard-primary"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-guard-primary"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-medium text-lg mb-4 flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-guard-primary" />
                  Информация об объекте
                </h3>
                <div className="space-y-2 mb-4">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Адрес объекта *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-guard-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2 mb-4">
                  <label htmlFor="objectType" className="block text-sm font-medium text-gray-700">Тип объекта</label>
                  <select
                    id="objectType"
                    name="objectType"
                    value={formData.objectType}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-guard-primary"
                  >
                    <option value="flat">Квартира</option>
                    <option value="house">Частный дом</option>
                    <option value="office">Офис</option>
                    <option value="store">Магазин</option>
                    <option value="warehouse">Склад</option>
                    <option value="manufacturing">Производство</option>
                    <option value="other">Другое</option>
                  </select>
                </div>

                <div className="space-y-2 mb-4">
                  <label htmlFor="details" className="block text-sm font-medium text-gray-700">Дополнительная информация</label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-guard-primary"
                    placeholder="Укажите особенности объекта, оборудование, которое требует обслуживания, и другие важные детали"
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-medium text-lg mb-4 flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-guard-primary" />
                  Удобная дата
                </h3>
                <div className="space-y-2 mb-4">
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">Предпочтительная дата визита</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-guard-primary"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-medium text-lg mb-4 flex items-center">
                  <Package className="mr-2 h-5 w-5 text-guard-primary" />
                  Выбор плана обслуживания
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {plans.map(plan => (
                    <div 
                      key={plan.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedPlan === plan.id 
                          ? 'border-guard-primary bg-guard-light' 
                          : 'border-gray-200 hover:border-guard-primary'
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">{plan.name}</h4>
                        {selectedPlan === plan.id && (
                          <CheckCircle className="h-5 w-5 text-guard-primary" />
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{plan.description}</p>
                      <p className="font-bold mb-1">{plan.price} ₽/{plan.period}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/services/maintenance')}
                >
                  Отмена
                </Button>
                <Button type="submit">
                  Оформить заказ
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Order summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Информация о заказе</h2>
            
            <div className="border-t border-gray-200 pt-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">Выбранный план:</span>
                <span className="font-medium">{selectedPlanData.name}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">Стоимость:</span>
                <span className="font-medium">{selectedPlanData.price} ₽/{selectedPlanData.period}</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2 flex items-center">
                <ShieldCheck className="mr-2 h-5 w-5 text-guard-primary" />
                Что входит:
              </h3>
              <ul className="space-y-2">
                {selectedPlanData.features.map((feature, index) => (
                  <li key={index} className="text-sm flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-guard-light p-4 rounded-lg">
              <p className="text-sm">
                После оформления заказа наш менеджер свяжется с вами для уточнения деталей и согласования точного времени визита специалиста.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceOrder;
