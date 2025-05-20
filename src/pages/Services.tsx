
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Camera, 
  Bell, 
  Shield, 
  LifeBuoy, 
  FileText, 
  Zap, 
  PenTool, 
  ArrowRight, 
  Check, 
  Building, 
  Home, 
  Warehouse, 
  Package 
} from 'lucide-react';

const Services = () => {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Наши услуги</h1>
      
      {/* Основные услуги */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-guard-light rounded-full">
                <Camera className="h-8 w-8 text-guard-primary" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-center mb-4">Системы видеонаблюдения</h2>
            <p className="text-gray-700 mb-6">
              Профессиональный монтаж систем видеонаблюдения любой сложности. 
              Используем современное оборудование с возможностью удаленного доступа и высококачественной записи.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <p className="text-gray-600">Аналоговые и IP-системы</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <p className="text-gray-600">HD и 4K разрешение</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <p className="text-gray-600">Удаленный доступ и мониторинг</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <p className="text-gray-600">Настройка записи и хранения данных</p>
              </div>
            </div>
            <Link to="/order" className="flex justify-center">
              <Button className="btn-primary">
                Заказать монтаж
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-guard-light rounded-full">
                <Bell className="h-8 w-8 text-guard-primary" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-center mb-4">Пожарная сигнализация</h2>
            <p className="text-gray-700 mb-6">
              Установка и обслуживание систем пожарной сигнализации в соответствии со всеми нормативами и требованиями МЧС. 
              Гарантируем быстрое реагирование и надежную защиту.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <p className="text-gray-600">Проектирование систем под объект</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <p className="text-gray-600">Установка дымовых извещателей</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <p className="text-gray-600">Системы оповещения и эвакуации</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <p className="text-gray-600">Интеграция с другими системами</p>
              </div>
            </div>
            <Link to="/order" className="flex justify-center">
              <Button className="btn-primary">
                Заказать монтаж
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-guard-light rounded-full">
                <Shield className="h-8 w-8 text-guard-primary" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-center mb-4">Системы контроля доступа</h2>
            <p className="text-gray-700 mb-6">
              Внедрение современных систем контроля и управления доступом (СКУД) для обеспечения безопасности и учета рабочего времени.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <p className="text-gray-600">Электронные замки и турникеты</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <p className="text-gray-600">RFID-карты и биометрический доступ</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <p className="text-gray-600">Домофонные системы</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                <p className="text-gray-600">Учет рабочего времени</p>
              </div>
            </div>
            <Link to="/order" className="flex justify-center">
              <Button className="btn-primary">
                Заказать монтаж
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Дополнительные услуги */}
      <h2 className="text-2xl font-bold mb-6">Дополнительные услуги</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start">
            <div className="p-3 bg-guard-light rounded-full mr-4">
              <LifeBuoy className="h-6 w-6 text-guard-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Техническое обслуживание</h3>
              <p className="text-gray-600 mb-3">
                Регулярное обслуживание и проверка работоспособности систем безопасности. 
                Оперативное устранение неисправностей и сбоев.
              </p>
              <Link to="/services/maintenance" className="text-guard-primary flex items-center hover:text-guard-secondary">
                Подробнее <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start">
            <div className="p-3 bg-guard-light rounded-full mr-4">
              <FileText className="h-6 w-6 text-guard-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Проектирование систем</h3>
              <p className="text-gray-600 mb-3">
                Разработка проектной документации для систем безопасности любой сложности 
                в соответствии с нормативными требованиями.
              </p>
              <Link to="/services/design" className="text-guard-primary flex items-center hover:text-guard-secondary">
                Подробнее <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start">
            <div className="p-3 bg-guard-light rounded-full mr-4">
              <Zap className="h-6 w-6 text-guard-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Модернизация систем</h3>
              <p className="text-gray-600 mb-3">
                Обновление и модернизация существующих систем безопасности 
                с использованием современного оборудования.
              </p>
              <Link to="/services/upgrade" className="text-guard-primary flex items-center hover:text-guard-secondary">
                Подробнее <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start">
            <div className="p-3 bg-guard-light rounded-full mr-4">
              <PenTool className="h-6 w-6 text-guard-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Консультации</h3>
              <p className="text-gray-600 mb-3">
                Профессиональные консультации по подбору и оптимизации систем безопасности 
                для вашего объекта.
              </p>
              <Link to="/services/consulting" className="text-guard-primary flex items-center hover:text-guard-secondary">
                Подробнее <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Для разных типов объектов */}
      <h2 className="text-2xl font-bold mb-6">Решения для разных типов объектов</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48">
            <img 
              src="https://via.placeholder.com/400x300?text=Office" 
              alt="Офисы" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-3">
              <Building className="h-5 w-5 text-guard-primary mr-2" />
              <h3 className="text-lg font-semibold">Офисы</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Комплексная защита офисных помещений с учетом графика работы и особенностей планировки.
            </p>
            <Link to="/order" className="text-guard-primary text-sm hover:text-guard-secondary">
              Получить решение для офиса
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48">
            <img 
              src="https://via.placeholder.com/400x300?text=Home" 
              alt="Квартиры и дома" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-3">
              <Home className="h-5 w-5 text-guard-primary mr-2" />
              <h3 className="text-lg font-semibold">Квартиры и дома</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Индивидуальные решения для защиты частной собственности с удобным удаленным управлением.
            </p>
            <Link to="/order" className="text-guard-primary text-sm hover:text-guard-secondary">
              Получить решение для дома
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48">
            <img 
              src="https://via.placeholder.com/400x300?text=Warehouse" 
              alt="Склады" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-3">
              <Warehouse className="h-5 w-5 text-guard-primary mr-2" />
              <h3 className="text-lg font-semibold">Склады</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Системы с повышенной надежностью для круглосуточной защиты складских помещений.
            </p>
            <Link to="/order" className="text-guard-primary text-sm hover:text-guard-secondary">
              Получить решение для склада
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48">
            <img 
              src="https://via.placeholder.com/400x300?text=Store" 
              alt="Магазины" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-3">
              <Package className="h-5 w-5 text-guard-primary mr-2" />
              <h3 className="text-lg font-semibold">Магазины</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Специализированные системы защиты торговых площадей с противокражными функциями.
            </p>
            <Link to="/order" className="text-guard-primary text-sm hover:text-guard-secondary">
              Получить решение для магазина
            </Link>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-guard-light rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Не нашли подходящую услугу?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Свяжитесь с нами для получения индивидуальной консультации. 
          Мы разработаем решение, максимально соответствующее вашим требованиям.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contacts">
            <Button size="lg" className="btn-primary">
              Связаться с нами
            </Button>
          </Link>
          <Link to="/shop">
            <Button size="lg" variant="outline" className="border-guard-primary text-guard-primary hover:bg-guard-primary hover:text-white">
              Перейти в магазин
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
