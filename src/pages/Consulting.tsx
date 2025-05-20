
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  PenTool, 
  CheckCircle, 
  ArrowRight,
  MessageCircle,
  FileText,
  Users,
  BarChart4,
  Layers
} from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';

const Consulting = () => {
  const [consultingType, setConsultingType] = useState<'business' | 'personal'>('business');

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">Консультации</h1>
      <p className="text-gray-600 mb-6">Профессиональные консультации по вопросам систем безопасности</p>

      {/* Hero Section */}
      <div className="bg-guard-light rounded-lg p-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Экспертные консультации по системам безопасности</h2>
            <p className="text-gray-700 mb-6">
              Наши специалисты предоставляют профессиональные консультации по всем вопросам, 
              связанным с системами безопасности. Мы поможем выбрать оптимальное решение, 
              соответствующее вашим требованиям и бюджету.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <p className="text-gray-700">Независимая оценка существующих систем безопасности</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <p className="text-gray-700">Рекомендации по оптимизации затрат на оборудование</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <p className="text-gray-700">Консультации по нормативным требованиям безопасности</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <p className="text-gray-700">Экспертное мнение при выборе технических решений</p>
              </div>
            </div>
            <Link to="/contacts">
              <Button className="btn-primary">
                Получить консультацию
              </Button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://via.placeholder.com/600x400?text=Consulting" 
              alt="Консультации" 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Consulting Types Toggle */}
      <div className="flex flex-col items-center justify-center mb-12">
        <h2 className="text-2xl font-bold mb-6">Выберите тип консультации</h2>
        <div className="flex items-center space-x-4">
          <span className={`text-lg ${consultingType === 'business' ? 'font-semibold text-guard-primary' : 'text-gray-500'}`}>
            Для бизнеса
          </span>
          <Switch 
            checked={consultingType === 'personal'}
            onCheckedChange={(checked) => setConsultingType(checked ? 'personal' : 'business')}
            className="data-[state=checked]:bg-guard-primary"
          />
          <span className={`text-lg ${consultingType === 'personal' ? 'font-semibold text-guard-primary' : 'text-gray-500'}`}>
            Для частных лиц
          </span>
        </div>
      </div>

      {/* Business Consulting Services */}
      {consultingType === 'business' && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Консультации для бизнеса</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-guard-light rounded-full mr-4">
                  <BarChart4 className="h-6 w-6 text-guard-primary" />
                </div>
                <h3 className="text-lg font-semibold">Аудит безопасности</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Комплексная оценка существующих систем безопасности на вашем объекте, выявление 
                уязвимостей и разработка рекомендаций по их устранению.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-gray-700 text-sm">Проверка соответствия нормативам</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-gray-700 text-sm">Выявление слабых мест и рисков</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-gray-700 text-sm">Детальный отчет с рекомендациями</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-lg font-semibold mb-1">от 10 000 ₽</p>
                <p className="text-sm text-gray-500">в зависимости от площади объекта</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-guard-light rounded-full mr-4">
                  <FileText className="h-6 w-6 text-guard-primary" />
                </div>
                <h3 className="text-lg font-semibold">Разработка концепции безопасности</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Создание комплексной стратегии обеспечения безопасности для вашего бизнеса с учетом 
                специфики деятельности, потенциальных рисков и бюджетных ограничений.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-gray-700 text-sm">Анализ бизнес-процессов и рисков</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-gray-700 text-sm">Разработка многоуровневой защиты</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-gray-700 text-sm">Оптимизация затрат на безопасность</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-lg font-semibold mb-1">от 25 000 ₽</p>
                <p className="text-sm text-gray-500">за проект</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-guard-light rounded-full mr-4">
                  <Users className="h-6 w-6 text-guard-primary" />
                </div>
                <h3 className="text-lg font-semibold">Обучение персонала</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Проведение обучающих семинаров и тренингов для сотрудников по вопросам безопасности 
                и правильной эксплуатации систем видеонаблюдения и сигнализации.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-gray-700 text-sm">Практические занятия на оборудовании</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-gray-700 text-sm">Инструкции по действиям при ЧС</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-gray-700 text-sm">Сертификаты о прохождении обучения</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-lg font-semibold mb-1">от 3 000 ₽</p>
                <p className="text-sm text-gray-500">за человека</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-guard-light rounded-full mr-4">
                  <Layers className="h-6 w-6 text-guard-primary" />
                </div>
                <h3 className="text-lg font-semibold">Экспертиза проектной документации</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Профессиональная оценка проектов систем безопасности, разработанных сторонними 
                организациями, на соответствие нормативным требованиям и эффективность защиты.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-gray-700 text-sm">Проверка расчетов и спецификаций</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-gray-700 text-sm">Выявление ошибок проектирования</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-gray-700 text-sm">Рекомендации по оптимизации решений</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-lg font-semibold mb-1">от 15 000 ₽</p>
                <p className="text-sm text-gray-500">за проект</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Personal Consulting Services */}
      {consultingType === 'personal' && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Консультации для частных лиц</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-guard-light rounded-full mr-4">
                  <MessageCircle className="h-6 w-6 text-guard-primary" />
                </div>
                <h3 className="text-lg font-semibold">Консультация по выбору оборудования</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Помощь в выборе оптимального комплекта оборудования для защиты вашего дома или квартиры 
                с учетом особенностей помещения и ваших потребностей.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-gray-700 text-sm">Независимые рекомендации по брендам</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-gray-700 text-sm">Оптимизация бюджета без потери качества</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-gray-700 text-sm">Учет перспектив расширения системы</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-lg font-semibold mb-1">2 500 ₽</p>
                <p className="text-sm text-gray-500">за консультацию</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-guard-light rounded-full mr-4">
                  <Home className="h-6 w-6 text-guard-primary" />
                </div>
                <h3 className="text-lg font-semibold">Осмотр помещения и оценка рисков</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Выезд специалиста для осмотра вашего жилья, оценки потенциальных угроз и разработки 
                рекомендаций по обеспечению безопасности.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-gray-700 text-sm">Выявление уязвимых мест в доме/квартире</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-gray-700 text-sm">Оценка существующих мер безопасности</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-gray-700 text-sm">Индивидуальный план защиты</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-lg font-semibold mb-1">5 000 ₽</p>
                <p className="text-sm text-gray-500">за выезд в пределах города</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-guard-light rounded-full mr-4">
                  <FileText className="h-6 w-6 text-guard-primary" />
                </div>
                <h3 className="text-lg font-semibold">Проверка сметы на установку</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Анализ смет, предложенных другими компаниями, на предмет обоснованности 
                стоимости оборудования и работ по установке систем безопасности.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-gray-700 text-sm">Проверка рыночных цен на оборудование</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-gray-700 text-sm">Оценка целесообразности выбранного решения</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-gray-700 text-sm">Рекомендации по оптимизации затрат</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-lg font-semibold mb-1">3 000 ₽</p>
                <p className="text-sm text-gray-500">за проверку</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-guard-light rounded-full mr-4">
                  <Settings className="h-6 w-6 text-guard-primary" />
                </div>
                <h3 className="text-lg font-semibold">Обучение использованию оборудования</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Индивидуальное обучение по эффективному использованию систем безопасности, 
                установленных в вашем доме, настройке и обслуживанию оборудования.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-gray-700 text-sm">Подробная инструкция по управлению</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-gray-700 text-sm">Практические занятия на вашем оборудовании</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-gray-700 text-sm">Рекомендации по обслуживанию</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-lg font-semibold mb-1">2 000 ₽</p>
                <p className="text-sm text-gray-500">за час обучения</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Consultation Process */}
      <h2 className="text-2xl font-bold mb-6">Как проходит консультация</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="bg-guard-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="h-8 w-8 text-guard-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-3">1. Первичный контакт</h3>
          <p className="text-gray-600">
            Вы оставляете заявку через форму на сайте или звоните нам. Мы уточняем ваш запрос 
            и договариваемся о времени консультации.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="bg-guard-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="h-8 w-8 text-guard-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-3">2. Встреча с экспертом</h3>
          <p className="text-gray-600">
            Проводим консультацию в офисе или на вашем объекте. Детально обсуждаем 
            ваши потребности и оцениваем ситуацию.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="bg-guard-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="h-8 w-8 text-guard-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-3">3. Получение решения</h3>
          <p className="text-gray-600">
            По результатам консультации вы получаете детальные рекомендации, 
            план действий или коммерческое предложение.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <h2 className="text-2xl font-bold mb-6">Почему выбирают наши консультации</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <div className="bg-white rounded-lg shadow-md p-5">
          <h3 className="text-lg font-semibold mb-2">Опыт экспертов</h3>
          <p className="text-gray-600">
            Наши консультанты имеют более 10 лет практического опыта в сфере безопасности 
            и сертификаты от ведущих производителей.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-5">
          <h3 className="text-lg font-semibold mb-2">Независимость</h3>
          <p className="text-gray-600">
            Мы не привязаны к конкретным производителям и предлагаем лучшие решения 
            из доступных на рынке, исходя из ваших потребностей.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-5">
          <h3 className="text-lg font-semibold mb-2">Практичность</h3>
          <p className="text-gray-600">
            Наши рекомендации всегда реалистичны, учитывают ваш бюджет и могут быть 
            внедрены поэтапно, если это необходимо.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-5">
          <h3 className="text-lg font-semibold mb-2">Комплексный подход</h3>
          <p className="text-gray-600">
            Мы рассматриваем безопасность комплексно, учитывая технические, организационные 
            и человеческие факторы для создания надежной защиты.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-guard-light rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Готовы получить экспертную консультацию?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Свяжитесь с нами сегодня, чтобы назначить встречу с нашим специалистом 
          и получить профессиональные рекомендации по безопасности вашего объекта.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contacts">
            <Button size="lg" className="btn-primary">
              Записаться на консультацию
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

export default Consulting;
