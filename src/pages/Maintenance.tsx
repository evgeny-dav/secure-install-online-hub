
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  LifeBuoy, 
  CheckCircle, 
  Calendar, 
  ArrowRight,
  Wrench,
  Shield,
  Clock,
  Settings
} from 'lucide-react';

const Maintenance = () => {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">Техническое обслуживание</h1>
      <p className="text-gray-600 mb-6">Профессиональное обслуживание систем безопасности для гарантии их надежной работы</p>

      {/* Hero Section */}
      <div className="bg-guard-light rounded-lg p-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Почему техническое обслуживание так важно?</h2>
            <p className="text-gray-700 mb-6">
              Регулярное техническое обслуживание систем безопасности — это не просто 
              рекомендация, а необходимость. Без должного обслуживания даже самая 
              современная система может выйти из строя в самый неподходящий момент.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <p className="text-gray-700">Увеличение срока службы оборудования до 40%</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <p className="text-gray-700">Снижение количества ложных срабатываний на 90%</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <p className="text-gray-700">Соответствие требованиям страховых компаний</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <p className="text-gray-700">Оперативное устранение неисправностей</p>
              </div>
            </div>
            <Link to="/order">
              <Button className="btn-primary">
                Заказать обслуживание
              </Button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://via.placeholder.com/600x400?text=Maintenance" 
              alt="Техническое обслуживание" 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Services */}
      <h2 className="text-2xl font-bold mb-6">Наши услуги по техническому обслуживанию</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start">
            <div className="p-3 bg-guard-light rounded-full mr-4">
              <Wrench className="h-6 w-6 text-guard-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Профилактическое обслуживание</h3>
              <p className="text-gray-600 mb-3">
                Регулярная проверка и настройка всех компонентов системы для предотвращения сбоев и неисправностей.
                Включает очистку оборудования, проверку соединений и калибровку.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start">
            <div className="p-3 bg-guard-light rounded-full mr-4">
              <Shield className="h-6 w-6 text-guard-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Аварийное реагирование</h3>
              <p className="text-gray-600 mb-3">
                Быстрое реагирование на сбои и поломки. Наша команда готова выехать на объект
                в течение 2-4 часов после получения заявки для устранения неисправностей.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start">
            <div className="p-3 bg-guard-light rounded-full mr-4">
              <Clock className="h-6 w-6 text-guard-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Регулярные проверки</h3>
              <p className="text-gray-600 mb-3">
                Плановые проверки систем безопасности согласно графику обслуживания.
                Тестирование функциональности, обновление программного обеспечения и настройка.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start">
            <div className="p-3 bg-guard-light rounded-full mr-4">
              <Settings className="h-6 w-6 text-guard-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Техническая поддержка</h3>
              <p className="text-gray-600 mb-3">
                Круглосуточная поддержка по телефону и электронной почте. Консультации
                по эксплуатации оборудования и помощь в решении проблем удаленно.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Plans */}
      <h2 className="text-2xl font-bold mb-6">Планы обслуживания</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="bg-gray-50 p-6 text-center">
            <h3 className="text-xl font-bold text-guard-primary mb-2">Базовый</h3>
            <p className="text-gray-700 mb-4">Для небольших объектов</p>
            <div className="text-3xl font-bold mb-2">5 000 ₽<span className="text-base font-normal text-gray-600">/мес</span></div>
            <p className="text-gray-600 text-sm">или 54 000 ₽/год</p>
          </div>
          <div className="p-6">
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>1 визит в квартал</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Реагирование в течение 12 часов</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Поддержка в рабочее время</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>До 5 устройств</span>
              </li>
            </ul>
            <Link to="/order" className="block">
              <Button variant="outline" className="w-full">Выбрать план</Button>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-guard-primary">
          <div className="bg-guard-primary text-white p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Стандарт</h3>
            <p className="text-guard-light mb-4">Для средних объектов</p>
            <div className="text-3xl font-bold mb-2">12 000 ₽<span className="text-base font-normal text-guard-light">/мес</span></div>
            <p className="text-guard-light text-sm">или 129 600 ₽/год</p>
          </div>
          <div className="p-6">
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>1 визит в месяц</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Реагирование в течение 6 часов</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Круглосуточная поддержка</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>До 20 устройств</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Приоритетное обслуживание</span>
              </li>
            </ul>
            <Link to="/order" className="block">
              <Button className="w-full">Выбрать план</Button>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="bg-gray-50 p-6 text-center">
            <h3 className="text-xl font-bold text-guard-primary mb-2">Премиум</h3>
            <p className="text-gray-700 mb-4">Для крупных объектов</p>
            <div className="text-3xl font-bold mb-2">20 000 ₽<span className="text-base font-normal text-gray-600">/мес</span></div>
            <p className="text-gray-600 text-sm">или 216 000 ₽/год</p>
          </div>
          <div className="p-6">
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Еженедельные визиты</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Реагирование в течение 2 часов</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>VIP поддержка 24/7</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Неограниченное количество устройств</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Персональный инженер</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Бесплатная замена оборудования</span>
              </li>
            </ul>
            <Link to="/order" className="block">
              <Button variant="outline" className="w-full">Выбрать план</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-guard-light rounded-lg p-8 text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Остались вопросы?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Свяжитесь с нами для получения индивидуальной консультации. 
          Мы подберем оптимальное решение для ваших систем безопасности.
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
          <h3 className="text-lg font-semibold mb-2">Как часто нужно проводить техническое обслуживание?</h3>
          <p className="text-gray-700">
            Рекомендуемая частота обслуживания зависит от типа системы и условий эксплуатации. 
            В среднем для систем видеонаблюдения это раз в 3-6 месяцев, для пожарной сигнализации — 
            раз в квартал, согласно нормативным требованиям.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Что входит в стандартное техническое обслуживание?</h3>
          <p className="text-gray-700">
            В стандартное ТО входит: проверка работоспособности всех компонентов системы, 
            чистка оборудования, проверка соединений и креплений, тестирование функций и 
            настройка программного обеспечения, составление акта о проведенных работах.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Можно ли заключить договор на обслуживание ранее установленных систем?</h3>
          <p className="text-gray-700">
            Да, мы обслуживаем как системы, установленные нашей компанией, так и системы, 
            установленные другими компаниями. Перед заключением договора мы проведем 
            диагностику и оценку текущего состояния оборудования.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
