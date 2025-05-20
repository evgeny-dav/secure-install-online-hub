
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle, 
  Calendar, 
  ArrowRight,
  Headphones,
  Users,
  ShieldCheck,
  FileText
} from 'lucide-react';

const Consulting = () => {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">Консультационные услуги</h1>
      <p className="text-gray-600 mb-6">Профессиональные консультации по вопросам обеспечения безопасности объектов</p>

      {/* Hero Section */}
      <div className="bg-guard-light rounded-lg p-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Экспертный анализ и рекомендации от профессионалов</h2>
            <p className="text-gray-700 mb-6">
              Наша команда консультантов поможет вам разобраться в сложных вопросах 
              безопасности и подобрать оптимальные решения для защиты вашего объекта.
              Мы учитываем особенности архитектуры, требования законодательства и ваш бюджет.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <p className="text-gray-700">Независимая экспертная оценка систем безопасности</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <p className="text-gray-700">Аудит существующих систем и выявление уязвимостей</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <p className="text-gray-700">Рекомендации по оптимизации затрат на безопасность</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <p className="text-gray-700">Помощь в выборе подходящего оборудования</p>
              </div>
            </div>
            <Link to="/order">
              <Button className="btn-primary">
                Заказать консультацию
              </Button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://via.placeholder.com/600x400?text=Consulting" 
              alt="Консультационные услуги" 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Services */}
      <h2 className="text-2xl font-bold mb-6">Наши консультационные услуги</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start">
            <div className="p-3 bg-guard-light rounded-full mr-4">
              <Headphones className="h-6 w-6 text-guard-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Первичная консультация</h3>
              <p className="text-gray-600 mb-3">
                Общая консультация по вопросам безопасности объекта. Анализ основных рисков и 
                предварительные рекомендации по защите. Помощь в определении бюджета и приоритетов.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start">
            <div className="p-3 bg-guard-light rounded-full mr-4">
              <ShieldCheck className="h-6 w-6 text-guard-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Аудит безопасности</h3>
              <p className="text-gray-600 mb-3">
                Комплексная проверка существующих систем безопасности. Выявление уязвимостей,
                анализ соответствия нормативным требованиям. Письменный отчет с рекомендациями.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start">
            <div className="p-3 bg-guard-light rounded-full mr-4">
              <Users className="h-6 w-6 text-guard-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Обучение персонала</h3>
              <p className="text-gray-600 mb-3">
                Тренинги для сотрудников по работе с системами безопасности. Обучение правилам
                реагирования на инциденты, пользованию оборудованием и соблюдению протоколов безопасности.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start">
            <div className="p-3 bg-guard-light rounded-full mr-4">
              <FileText className="h-6 w-6 text-guard-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Разработка регламентов</h3>
              <p className="text-gray-600 mb-3">
                Создание внутренних документов, регламентирующих процессы обеспечения безопасности.
                Разработка инструкций, планов эвакуации и других нормативных документов.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Plans */}
      <h2 className="text-2xl font-bold mb-6">Тарифы на консультации</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="bg-gray-50 p-6 text-center">
            <h3 className="text-xl font-bold text-guard-primary mb-2">Базовый</h3>
            <p className="text-gray-700 mb-4">Для малых объектов</p>
            <div className="text-3xl font-bold mb-2">10 000 ₽</div>
            <p className="text-gray-600 text-sm">разовая консультация</p>
          </div>
          <div className="p-6">
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>До 2 часов консультации</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Анализ основных рисков</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Предварительные рекомендации</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Онлайн или по телефону</span>
              </li>
            </ul>
            <Link to="/order" className="block">
              <Button variant="outline" className="w-full">Выбрать</Button>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-guard-primary">
          <div className="bg-guard-primary text-white p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Стандарт</h3>
            <p className="text-guard-light mb-4">Для средних объектов</p>
            <div className="text-3xl font-bold mb-2">25 000 ₽</div>
            <p className="text-guard-light text-sm">выезд + отчет</p>
          </div>
          <div className="p-6">
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Выезд на объект</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Аудит текущих систем</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Детальный отчет с рекомендациями</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>1 месяц поддержки после консультации</span>
              </li>
            </ul>
            <Link to="/order" className="block">
              <Button className="w-full">Выбрать</Button>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="bg-gray-50 p-6 text-center">
            <h3 className="text-xl font-bold text-guard-primary mb-2">Премиум</h3>
            <p className="text-gray-700 mb-4">Для крупных объектов</p>
            <div className="text-3xl font-bold mb-2">50 000 ₽</div>
            <p className="text-gray-600 text-sm">полное сопровождение</p>
          </div>
          <div className="p-6">
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Несколько выездов на объект</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Комплексный аудит безопасности</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Разработка документации</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>3 месяца поддержки</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Обучение персонала</span>
              </li>
            </ul>
            <Link to="/order" className="block">
              <Button variant="outline" className="w-full">Выбрать</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-guard-light rounded-lg p-8 text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Нужна индивидуальная консультация?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Свяжитесь с нами для обсуждения специфических потребностей вашего объекта.
          Мы разработаем индивидуальное предложение с учетом всех ваших требований.
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

      {/* FAQ */}
      <h2 className="text-2xl font-bold mb-6">Часто задаваемые вопросы</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Как проходит консультация?</h3>
          <p className="text-gray-700">
            Консультация может проходить как онлайн, так и с выездом на объект, в зависимости от выбранного тарифа.
            Наш специалист проведет беседу, задаст вопросы о специфике объекта, проанализирует риски и предложит оптимальные решения.
            По результатам консультации вы получите рекомендации и/или письменный отчет.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Сколько времени занимает аудит безопасности?</h3>
          <p className="text-gray-700">
            Время проведения аудита зависит от размера и сложности объекта. Для небольшого офиса это может занять 2-3 часа,
            для крупного объекта — от нескольких дней до недели. После сбора информации нашим специалистам требуется 2-5 рабочих
            дней для подготовки детального отчета с рекомендациями.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Предоставляете ли вы консультации по уже установленным системам безопасности?</h3>
          <p className="text-gray-700">
            Да, мы предоставляем консультации по системам безопасности, установленным другими компаниями.
            Наши специалисты проведут аудит существующего оборудования, оценят его эффективность и соответствие
            современным требованиям, а также предложат варианты оптимизации или модернизации при необходимости.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
