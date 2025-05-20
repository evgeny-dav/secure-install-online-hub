
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Camera, Bell, BarChart4, Truck, Search } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero секция */}
      <section className="relative bg-gradient-to-r from-guard-primary to-guard-secondary py-20 md:py-32">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative z-10 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Надежные системы безопасности для вашего бизнеса и дома
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Профессиональный монтаж систем видеонаблюдения и пожарной сигнализации с гарантией качества
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/services">
                <Button size="lg" className="bg-white text-guard-primary hover:bg-gray-100 hover:text-guard-secondary text-lg">
                  Наши услуги
                </Button>
              </Link>
              <Link to="/order">
                <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-guard-primary text-lg">
                  Заказать монтаж
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-guard-light p-6 rounded-lg text-center animate-fade-in">
              <div className="inline-flex items-center justify-center bg-guard-primary text-white p-3 rounded-full mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Гарантия качества</h3>
              <p className="text-gray-700">
                Мы предоставляем гарантию на все выполненные работы и установленное оборудование.
              </p>
            </div>
            <div className="bg-guard-light p-6 rounded-lg text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center bg-guard-primary text-white p-3 rounded-full mb-4">
                <BarChart4 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Опыт и профессионализм</h3>
              <p className="text-gray-700">
                Более 10 лет опыта работы с системами безопасности различной сложности.
              </p>
            </div>
            <div className="bg-guard-light p-6 rounded-lg text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="inline-flex items-center justify-center bg-guard-primary text-white p-3 rounded-full mb-4">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Быстрый монтаж</h3>
              <p className="text-gray-700">
                Оперативное выполнение работ в удобное для вас время с соблюдением всех сроков.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex animate-slide-in">
              <div className="mr-4">
                <div className="p-3 bg-guard-light rounded-full">
                  <Camera className="h-8 w-8 text-guard-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Системы видеонаблюдения</h3>
                <p className="text-gray-700 mb-4">
                  Монтаж и настройка систем видеонаблюдения для защиты вашего дома или бизнеса. 
                  Профессиональное оборудование с удаленным доступом.
                </p>
                <Link to="/services/video">
                  <Button variant="outline" className="text-guard-primary hover:bg-guard-primary hover:text-white">
                    Подробнее
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="mr-4">
                <div className="p-3 bg-guard-light rounded-full">
                  <Bell className="h-8 w-8 text-guard-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Пожарная сигнализация</h3>
                <p className="text-gray-700 mb-4">
                  Установка современных систем пожарной сигнализации с автоматическим оповещением 
                  и интеграцией с другими системами безопасности.
                </p>
                <Link to="/services/fire">
                  <Button variant="outline" className="text-guard-primary hover:bg-guard-primary hover:text-white">
                    Подробнее
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button className="btn-primary">Все услуги</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Процесс работы */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Как мы работаем</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative">
                <div className="inline-flex items-center justify-center bg-guard-primary text-white h-16 w-16 rounded-full mb-4 text-2xl font-bold">
                  1
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-guard-primary"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Консультация</h3>
              <p className="text-gray-600">
                Бесплатная консультация и выезд специалиста для оценки объекта
              </p>
            </div>
            <div className="text-center">
              <div className="relative">
                <div className="inline-flex items-center justify-center bg-guard-primary text-white h-16 w-16 rounded-full mb-4 text-2xl font-bold">
                  2
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-guard-primary"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Проектирование</h3>
              <p className="text-gray-600">
                Разработка проекта и подбор оборудования под ваши требования
              </p>
            </div>
            <div className="text-center">
              <div className="relative">
                <div className="inline-flex items-center justify-center bg-guard-primary text-white h-16 w-16 rounded-full mb-4 text-2xl font-bold">
                  3
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-guard-primary"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Монтаж</h3>
              <p className="text-gray-600">
                Профессиональный монтаж и настройка оборудования
              </p>
            </div>
            <div className="text-center">
              <div className="relative">
                <div className="inline-flex items-center justify-center bg-guard-primary text-white h-16 w-16 rounded-full mb-4 text-2xl font-bold">
                  4
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Обслуживание</h3>
              <p className="text-gray-600">
                Техническая поддержка и сервисное обслуживание систем
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-guard-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы обеспечить безопасность?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня для получения бесплатной консультации
            и расчета стоимости установки систем безопасности
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/order">
              <Button size="lg" className="bg-white text-guard-primary hover:bg-gray-100">
                Заказать монтаж
              </Button>
            </Link>
            <Link to="/contacts">
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-guard-primary">
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
