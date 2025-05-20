
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Award, Users, Clock, FileCheck, Phone } from 'lucide-react';

const About = () => {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">О компании</h1>
      
      {/* Основная информация */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">GuardInstall - ваш партнер в сфере безопасности</h2>
            <p className="text-gray-700 mb-4">
              Компания GuardInstall специализируется на проектировании, монтаже и обслуживании систем безопасности для дома и бизнеса. 
              Мы предлагаем полный спектр услуг: от первичной консультации до долгосрочного технического обслуживания.
            </p>
            <p className="text-gray-700 mb-4">
              Наша миссия - обеспечить максимальную защиту вашего имущества и безопасность ваших близких, используя современные технологии 
              и профессиональный подход к каждому проекту.
            </p>
            <p className="text-gray-700">
              С 2010 года мы успешно реализовали более 1000 проектов различной сложности для частных клиентов и коммерческих организаций.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden h-64">
            <img 
              src="https://via.placeholder.com/600x400?text=GuardInstall+Office" 
              alt="Офис компании GuardInstall" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Преимущества */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">Почему клиенты выбирают нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-guard-light rounded-full">
                <ShieldCheck className="h-8 w-8 text-guard-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Надежность</h3>
            <p className="text-gray-600 text-center">
              Мы используем только сертифицированное оборудование от ведущих производителей, 
              что гарантирует надежную и долговечную работу систем безопасности.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-guard-light rounded-full">
                <Users className="h-8 w-8 text-guard-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Профессионализм</h3>
            <p className="text-gray-600 text-center">
              Наша команда состоит из сертифицированных специалистов с многолетним опытом работы 
              в сфере проектирования и монтажа систем безопасности.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-guard-light rounded-full">
                <Award className="h-8 w-8 text-guard-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Качество</h3>
            <p className="text-gray-600 text-center">
              Мы предоставляем расширенную гарантию на все выполненные работы и установленное оборудование. 
              Качество подтверждается довольными клиентами.
            </p>
          </div>
        </div>
      </div>
      
      {/* История компании */}{/*
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">История компании</h2>
        <div className="relative border-l-2 border-guard-primary pl-8 ml-4">
          <div className="mb-8 relative">
            <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-guard-primary"></div>
            <h3 className="text-xl font-bold mb-2">2010 - Основание компании</h3>
            <p className="text-gray-700">
              Компания GuardInstall была основана группой профессионалов в области систем безопасности. 
              Мы начали свою деятельность с небольшого офиса и команды из 5 сотрудников.
            </p>
          </div>
          
          <div className="mb-8 relative">
            <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-guard-primary"></div>
            <h3 className="text-xl font-bold mb-2">2013 - Расширение спектра услуг</h3>
            <p className="text-gray-700">
              Мы добавили в наш ассортимент услуги по монтажу пожарной сигнализации и систем контроля доступа, 
              что позволило нам предлагать комплексные решения для безопасности.
            </p>
          </div>
          
          <div className="mb-8 relative">
            <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-guard-primary"></div>
            <h3 className="text-xl font-bold mb-2">2015 - Открытие интернет-магазина</h3>
            <p className="text-gray-700">
              Запуск интернет-магазина с широким ассортиментом оборудования для систем безопасности. 
              Теперь клиенты могут не только заказать монтаж, но и приобрести необходимое оборудование.
            </p>
          </div>
          
          <div className="mb-8 relative">
            <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-guard-primary"></div>
            <h3 className="text-xl font-bold mb-2">2018 - 500 успешных проектов</h3>
            <p className="text-gray-700">
              Мы достигли важной вехи - 500 успешно реализованных проектов. Наша клиентская база продолжает расти, 
              большинство новых клиентов приходят по рекомендациям.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-guard-primary"></div>
            <h3 className="text-xl font-bold mb-2">2022 - Настоящее время</h3>
            <p className="text-gray-700">
              Сегодня GuardInstall - это команда из 30+ высококвалифицированных специалистов, современный офис, 
              собственный учебный центр и более 1000 реализованных проектов по всей России.
            </p>
          </div>
        </div>
      </div>
      */}
      {/* Команда */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">Наша команда</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64">
              <img 
                src="https://via.placeholder.com/300x300?text=CEO" 
                alt="Генеральный директор" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">Евгений Давыдов</h3>
              <p className="text-guard-primary mb-2">Генеральный директор</p>
              <p className="text-sm text-gray-600">
                Опыт работы в сфере безопасности более 15 лет. Отвечает за стратегическое развитие компании.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64">
              <img 
                src="boss.jpg" 
                alt="Технический директор" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">Сергей Каргополов</h3>
              <p className="text-guard-primary mb-2">Технический директор</p>
              <p className="text-sm text-gray-600">
                Сертифицированный инженер с опытом проектирования сложных систем безопасности.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64">
              <img 
                src="https://via.placeholder.com/300x300?text=Sales+Manager" 
                alt="Руководитель отдела продаж" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">Елена Смирнова</h3>
              <p className="text-guard-primary mb-2">Руководитель отдела продаж</p>
              <p className="text-sm text-gray-600">
                Отвечает за работу с клиентами и развитие направления интернет-продаж.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64">
              <img 
                src="https://via.placeholder.com/300x300?text=Project+Manager" 
                alt="Руководитель проектов" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">Дмитрий Козлов</h3>
              <p className="text-guard-primary mb-2">Руководитель проектов</p>
              <p className="text-sm text-gray-600">
                Управляет проектами по монтажу и отвечает за качество выполнения работ.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Сертификаты */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">Сертификаты и лицензии</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-4 rounded-lg">
            <div className="flex items-start">
              <FileCheck className="h-6 w-6 text-guard-primary mt-1 mr-3" />
              <div>
                <h3 className="font-semibold mb-2">Лицензия МЧС</h3>
                <p className="text-sm text-gray-600">
                  На проектирование, монтаж и обслуживание систем пожарной безопасности
                </p>
              </div>
            </div>
          </div>
          
          <div className="border p-4 rounded-lg">
            <div className="flex items-start">
              <FileCheck className="h-6 w-6 text-guard-primary mt-1 mr-3" />
              <div>
                <h3 className="font-semibold mb-2">Сертификат ISO 9001</h3>
                <p className="text-sm text-gray-600">
                  Система менеджмента качества соответствует международным стандартам
                </p>
              </div>
            </div>
          </div>
          
          <div className="border p-4 rounded-lg">
            <div className="flex items-start">
              <FileCheck className="h-6 w-6 text-guard-primary mt-1 mr-3" />
              <div>
                <h3 className="font-semibold mb-2">Сертификаты производителей</h3>
                <p className="text-sm text-gray-600">
                  Авторизованный партнер ведущих производителей систем безопасности
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-guard-primary text-white rounded-lg shadow-md p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Готовы обеспечить безопасность вашего объекта?</h2>
        <p className="text-lg mb-6">
          Свяжитесь с нами сегодня для получения бесплатной консультации и расчета стоимости
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contacts">
            <Button size="lg" className="bg-white text-guard-primary hover:bg-gray-100 hover:text-guard-secondary">
              <Phone className="mr-2 h-5 w-5" />
              Связаться с нами
            </Button>
          </Link>
          <Link to="/order">
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-guard-primary">
              Заказать монтаж
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
