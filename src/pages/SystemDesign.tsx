
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  CheckCircle, 
  Layers, 
  LayoutTemplate,
  PenTool,
  Building,
  Home,
  Warehouse,
  ArrowRight
} from 'lucide-react';

const SystemDesign = () => {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">Проектирование систем</h1>
      <p className="text-gray-600 mb-6">Профессиональная разработка проектной документации для систем безопасности</p>

      {/* Hero Section */}
      <div className="bg-guard-light rounded-lg p-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Профессиональное проектирование — основа надежной системы безопасности</h2>
            <p className="text-gray-700 mb-6">
              Грамотное проектирование — это первый и самый важный этап создания эффективной 
              системы безопасности. Мы разрабатываем проектную документацию в соответствии со 
              всеми нормативными требованиями и с учетом особенностей вашего объекта.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <p className="text-gray-700">Соответствие нормам и правилам пожарной безопасности</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <p className="text-gray-700">Оптимальное расположение и подбор оборудования</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <p className="text-gray-700">Точные расчеты и спецификации материалов</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <p className="text-gray-700">Согласование с надзорными органами</p>
              </div>
            </div>
            <Link to="/order">
              <Button className="btn-primary">
                Заказать проектирование
              </Button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://via.placeholder.com/600x400?text=System+Design" 
              alt="Проектирование систем" 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Design Stages */}
      <h2 className="text-2xl font-bold mb-6">Этапы проектирования</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-guard-primary"></div>
          <div className="pl-2">
            <div className="text-xl font-bold text-guard-primary mb-2">01</div>
            <h3 className="text-lg font-semibold mb-3">Предпроектное обследование</h3>
            <p className="text-gray-600">
              Выезд на объект, изучение особенностей помещений, определение потенциальных рисков и уязвимостей.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-guard-primary"></div>
          <div className="pl-2">
            <div className="text-xl font-bold text-guard-primary mb-2">02</div>
            <h3 className="text-lg font-semibold mb-3">Разработка технического задания</h3>
            <p className="text-gray-600">
              Составление подробного ТЗ с учетом пожеланий клиента, требований безопасности и нормативных документов.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-guard-primary"></div>
          <div className="pl-2">
            <div className="text-xl font-bold text-guard-primary mb-2">03</div>
            <h3 className="text-lg font-semibold mb-3">Проектирование системы</h3>
            <p className="text-gray-600">
              Создание планов размещения оборудования, схем подключения, расчеты и спецификации материалов.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-guard-primary"></div>
          <div className="pl-2">
            <div className="text-xl font-bold text-guard-primary mb-2">04</div>
            <h3 className="text-lg font-semibold mb-3">Согласование и утверждение</h3>
            <p className="text-gray-600">
              Согласование проекта с заказчиком и, при необходимости, с надзорными органами и службами.
            </p>
          </div>
        </div>
      </div>

      {/* Types of Projects */}
      <h2 className="text-2xl font-bold mb-6">Типы проектов</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="p-3 bg-guard-light rounded-full w-14 h-14 flex items-center justify-center mb-4">
            <Layers className="h-7 w-7 text-guard-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-3">Системы видеонаблюдения</h3>
          <p className="text-gray-600 mb-4">
            Проектирование систем аналогового и IP-видеонаблюдения любой сложности 
            с учетом особенностей объекта и требований к качеству изображения.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
              <span className="text-gray-700">Расчет зон обзора камер</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
              <span className="text-gray-700">Подбор оборудования</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
              <span className="text-gray-700">Расчет емкости хранения данных</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="p-3 bg-guard-light rounded-full w-14 h-14 flex items-center justify-center mb-4">
            <LayoutTemplate className="h-7 w-7 text-guard-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-3">Пожарная сигнализация</h3>
          <p className="text-gray-600 mb-4">
            Разработка проектов систем пожарной сигнализации и автоматического 
            пожаротушения в соответствии с нормами пожарной безопасности.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
              <span className="text-gray-700">Расчет необходимого количества датчиков</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
              <span className="text-gray-700">Проектирование систем оповещения</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
              <span className="text-gray-700">Планы эвакуации</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="p-3 bg-guard-light rounded-full w-14 h-14 flex items-center justify-center mb-4">
            <PenTool className="h-7 w-7 text-guard-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-3">Системы контроля доступа</h3>
          <p className="text-gray-600 mb-4">
            Проектирование систем контроля и управления доступом (СКУД) 
            для обеспечения безопасности и учета рабочего времени.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
              <span className="text-gray-700">Планирование точек доступа</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
              <span className="text-gray-700">Интеграция с другими системами</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
              <span className="text-gray-700">Разработка алгоритмов доступа</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Solutions for Different Types */}
      <h2 className="text-2xl font-bold mb-6">Проектирование для разных типов объектов</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48">
            <img 
              src="https://via.placeholder.com/400x200?text=Office+Building" 
              alt="Бизнес-центры и офисы" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <Building className="h-5 w-5 text-guard-primary mr-2" />
              <h3 className="text-lg font-semibold">Бизнес-центры и офисы</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Проектирование интегрированных систем безопасности с учетом большого потока 
              посетителей, зонирования помещений и требований к бизнес-процессам.
            </p>
            <Link to="/order" className="text-guard-primary flex items-center hover:text-guard-secondary">
              Заказать проект <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48">
            <img 
              src="https://via.placeholder.com/400x200?text=Residential" 
              alt="Жилые объекты" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <Home className="h-5 w-5 text-guard-primary mr-2" />
              <h3 className="text-lg font-semibold">Жилые объекты</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Проектирование систем безопасности для частных домов, квартир и 
              многоквартирных жилых комплексов с акцентом на удобство и простоту использования.
            </p>
            <Link to="/order" className="text-guard-primary flex items-center hover:text-guard-secondary">
              Заказать проект <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48">
            <img 
              src="https://via.placeholder.com/400x200?text=Industrial" 
              alt="Промышленные объекты" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <Warehouse className="h-5 w-5 text-guard-primary mr-2" />
              <h3 className="text-lg font-semibold">Промышленные объекты</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Проектирование систем безопасности для производственных помещений, складов, 
              логистических центров с учетом специфических требований и условий эксплуатации.
            </p>
            <Link to="/order" className="text-guard-primary flex items-center hover:text-guard-secondary">
              Заказать проект <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-guard-light rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Готовы начать проектирование?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Свяжитесь с нами для получения консультации и оценки стоимости проектных работ. 
          Мы готовы ответить на все ваши вопросы и предложить оптимальное решение.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contacts">
            <Button size="lg" className="btn-primary">
              Связаться с нами
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline" className="border-guard-primary text-guard-primary hover:bg-guard-primary hover:text-white">
              Вернуться к услугам
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SystemDesign;
