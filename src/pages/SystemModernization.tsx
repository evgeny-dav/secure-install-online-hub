
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Zap, 
  CheckCircle, 
  ArrowUpRight, 
  BarChart,
  ArrowRight,
  RefreshCw,
  Settings,
  Monitor
} from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useState } from 'react';

const SystemModernization = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    '1': false,
    '2': false,
    '3': false
  });

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">Модернизация систем</h1>
      <p className="text-gray-600 mb-6">Обновление существующих систем безопасности с использованием современных технологий</p>

      {/* Hero Section */}
      <div className="bg-guard-light rounded-lg p-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Зачем нужна модернизация систем безопасности?</h2>
            <p className="text-gray-700 mb-6">
              С течением времени технологии развиваются, а требования к безопасности возрастают. 
              Модернизация позволяет обновить устаревшие системы, расширить их функциональность 
              и повысить уровень защиты без полной замены оборудования.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <p className="text-gray-700">Повышение эффективности существующих систем до 80%</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <p className="text-gray-700">Экономия до 40% по сравнению с установкой новых систем</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <p className="text-gray-700">Увеличение срока службы существующего оборудования</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                <p className="text-gray-700">Соответствие современным требованиям безопасности</p>
              </div>
            </div>
            <Link to="/order">
              <Button className="btn-primary">
                Заказать модернизацию
              </Button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://via.placeholder.com/600x400?text=System+Modernization" 
              alt="Модернизация систем" 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Modernization Services */}
      <h2 className="text-2xl font-bold mb-6">Варианты модернизации систем</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="p-3 bg-guard-light rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Monitor className="h-7 w-7 text-guard-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Аналоговое → IP видеонаблюдение</h3>
            <p className="text-gray-600 mb-4">
              Переход от аналогового к IP-видеонаблюдению с сохранением части существующей 
              инфраструктуры. Значительное повышение качества изображения и функциональности системы.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <ArrowUpRight className="h-4 w-4 text-guard-primary mt-1 mr-2" />
                <span className="text-gray-700">Повышение разрешения до 4K/8MP</span>
              </li>
              <li className="flex items-start">
                <ArrowUpRight className="h-4 w-4 text-guard-primary mt-1 mr-2" />
                <span className="text-gray-700">Расширенные функции видеоаналитики</span>
              </li>
              <li className="flex items-start">
                <ArrowUpRight className="h-4 w-4 text-guard-primary mt-1 mr-2" />
                <span className="text-gray-700">Удаленный доступ через интернет</span>
              </li>
            </ul>
            <Link to="/order" className="text-guard-primary flex items-center hover:text-guard-secondary">
              Узнать подробнее <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="p-3 bg-guard-light rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <RefreshCw className="h-7 w-7 text-guard-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Обновление пожарной сигнализации</h3>
            <p className="text-gray-600 mb-4">
              Модернизация устаревших систем пожарной сигнализации с переходом на адресные 
              и адресно-аналоговые системы с расширенными возможностями.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <ArrowUpRight className="h-4 w-4 text-guard-primary mt-1 mr-2" />
                <span className="text-gray-700">Точное определение места возгорания</span>
              </li>
              <li className="flex items-start">
                <ArrowUpRight className="h-4 w-4 text-guard-primary mt-1 mr-2" />
                <span className="text-gray-700">Снижение количества ложных срабатываний</span>
              </li>
              <li className="flex items-start">
                <ArrowUpRight className="h-4 w-4 text-guard-primary mt-1 mr-2" />
                <span className="text-gray-700">Интеграция с другими системами</span>
              </li>
            </ul>
            <Link to="/order" className="text-guard-primary flex items-center hover:text-guard-secondary">
              Узнать подробнее <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="p-3 bg-guard-light rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Settings className="h-7 w-7 text-guard-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Интеграция систем безопасности</h3>
            <p className="text-gray-600 mb-4">
              Объединение разрозненных систем (видеонаблюдение, СКУД, пожарная сигнализация) 
              в единый комплекс с централизованным управлением.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <ArrowUpRight className="h-4 w-4 text-guard-primary mt-1 mr-2" />
                <span className="text-gray-700">Централизованное управление</span>
              </li>
              <li className="flex items-start">
                <ArrowUpRight className="h-4 w-4 text-guard-primary mt-1 mr-2" />
                <span className="text-gray-700">Автоматизация реакции на события</span>
              </li>
              <li className="flex items-start">
                <ArrowUpRight className="h-4 w-4 text-guard-primary mt-1 mr-2" />
                <span className="text-gray-700">Повышение общей эффективности</span>
              </li>
            </ul>
            <Link to="/order" className="text-guard-primary flex items-center hover:text-guard-secondary">
              Узнать подробнее <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Modernization Process */}
      <h2 className="text-2xl font-bold mb-6">Процесс модернизации</h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-12">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="bg-guard-light rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0 md:mr-6">
              <span className="text-xl font-bold text-guard-primary">1</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Аудит существующей системы</h3>
              <p className="text-gray-600">
                Проводим полное обследование имеющейся системы безопасности, 
                оцениваем состояние оборудования и возможности его дальнейшего использования.
              </p>
            </div>
          </div>
          
          <div className="w-0.5 h-8 bg-gray-300 mx-auto md:mx-6"></div>
          
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="bg-guard-light rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0 md:mr-6">
              <span className="text-xl font-bold text-guard-primary">2</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Разработка плана модернизации</h3>
              <p className="text-gray-600">
                Определяем, какое оборудование можно интегрировать в новую систему, 
                а какое требует замены. Составляем детальный план и смету работ.
              </p>
            </div>
          </div>
          
          <div className="w-0.5 h-8 bg-gray-300 mx-auto md:mx-6"></div>
          
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="bg-guard-light rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0 md:mr-6">
              <span className="text-xl font-bold text-guard-primary">3</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Поэтапная модернизация</h3>
              <p className="text-gray-600">
                Выполняем работы поэтапно, минимизируя период, когда система безопасности 
                может быть частично недоступна. По возможности обеспечиваем непрерывность работы.
              </p>
            </div>
          </div>
          
          <div className="w-0.5 h-8 bg-gray-300 mx-auto md:mx-6"></div>
          
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="bg-guard-light rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0 md:mr-6">
              <span className="text-xl font-bold text-guard-primary">4</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Настройка и обучение</h3>
              <p className="text-gray-600">
                Настраиваем обновленную систему, проводим обучение персонала, 
                предоставляем полную техническую документацию.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <h2 className="text-2xl font-bold mb-6">Примеры успешной модернизации</h2>
      <div className="grid grid-cols-1 gap-4 mb-12">
        <Collapsible 
          className="bg-white rounded-lg shadow-md overflow-hidden"
          open={openItems['1']}
          onOpenChange={() => toggleItem('1')}
        >
          <div className="p-6">
            <CollapsibleTrigger className="flex w-full justify-between items-center">
              <div className="flex items-center">
                <div className="p-2 mr-4 bg-guard-light rounded-full">
                  <BarChart className="h-5 w-5 text-guard-primary" />
                </div>
                <h3 className="text-lg font-semibold">Модернизация видеонаблюдения в бизнес-центре</h3>
              </div>
              <div className={`transition-transform ${openItems['1'] ? 'transform rotate-180' : ''}`}>
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4">
              <div className="pl-14">
                <p className="text-gray-700 mb-4">
                  Бизнес-центр класса B+ использовал устаревшую аналоговую систему видеонаблюдения с низким
                  разрешением и ограниченными возможностями хранения данных. Мы провели модернизацию с сохранением
                  существующей кабельной инфраструктуры, установив гибридные регистраторы и заменив камеры на IP.
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="bg-guard-light rounded-lg p-3">
                    <p className="text-sm font-semibold text-guard-primary">Стоимость модернизации</p>
                    <p className="text-xl font-bold">На 43% ниже</p>
                    <p className="text-sm text-gray-600">чем полная замена системы</p>
                  </div>
                  <div className="bg-guard-light rounded-lg p-3">
                    <p className="text-sm font-semibold text-guard-primary">Качество изображения</p>
                    <p className="text-xl font-bold">В 4 раза выше</p>
                    <p className="text-sm text-gray-600">чем у предыдущей системы</p>
                  </div>
                  <div className="bg-guard-light rounded-lg p-3">
                    <p className="text-sm font-semibold text-guard-primary">Срок реализации</p>
                    <p className="text-xl font-bold">2 недели</p>
                    <p className="text-sm text-gray-600">без прерывания работы</p>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>
        
        <Collapsible 
          className="bg-white rounded-lg shadow-md overflow-hidden"
          open={openItems['2']}
          onOpenChange={() => toggleItem('2')}
        >
          <div className="p-6">
            <CollapsibleTrigger className="flex w-full justify-between items-center">
              <div className="flex items-center">
                <div className="p-2 mr-4 bg-guard-light rounded-full">
                  <BarChart className="h-5 w-5 text-guard-primary" />
                </div>
                <h3 className="text-lg font-semibold">Обновление пожарной сигнализации в торговом центре</h3>
              </div>
              <div className={`transition-transform ${openItems['2'] ? 'transform rotate-180' : ''}`}>
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4">
              <div className="pl-14">
                <p className="text-gray-700 mb-4">
                  Торговый центр площадью 15 000 м² имел устаревшую систему пожарной сигнализации с частыми
                  ложными срабатываниями. Мы провели поэтапную модернизацию с переходом на адресно-аналоговую 
                  систему, сохранив часть шлейфов и извещателей.
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="bg-guard-light rounded-lg p-3">
                    <p className="text-sm font-semibold text-guard-primary">Снижение ложных тревог</p>
                    <p className="text-xl font-bold">На 95%</p>
                    <p className="text-sm text-gray-600">по сравнению с предыдущей системой</p>
                  </div>
                  <div className="bg-guard-light rounded-lg p-3">
                    <p className="text-sm font-semibold text-guard-primary">Экономия</p>
                    <p className="text-xl font-bold">27%</p>
                    <p className="text-sm text-gray-600">от стоимости новой системы</p>
                  </div>
                  <div className="bg-guard-light rounded-lg p-3">
                    <p className="text-sm font-semibold text-guard-primary">Реализация</p>
                    <p className="text-xl font-bold">В ночное время</p>
                    <p className="text-sm text-gray-600">без нарушения работы ТЦ</p>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>
        
        <Collapsible 
          className="bg-white rounded-lg shadow-md overflow-hidden"
          open={openItems['3']}
          onOpenChange={() => toggleItem('3')}
        >
          <div className="p-6">
            <CollapsibleTrigger className="flex w-full justify-between items-center">
              <div className="flex items-center">
                <div className="p-2 mr-4 bg-guard-light rounded-full">
                  <BarChart className="h-5 w-5 text-guard-primary" />
                </div>
                <h3 className="text-lg font-semibold">Интеграция систем в офисном здании</h3>
              </div>
              <div className={`transition-transform ${openItems['3'] ? 'transform rotate-180' : ''}`}>
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4">
              <div className="pl-14">
                <p className="text-gray-700 mb-4">
                  Офисное здание с несколькими арендаторами использовало разрозненные системы безопасности:
                  видеонаблюдение от одного производителя, СКУД от другого и отдельную пожарную сигнализацию. 
                  Мы провели интеграцию всех систем на единой программной платформе.
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="bg-guard-light rounded-lg p-3">
                    <p className="text-sm font-semibold text-guard-primary">Эффективность персонала</p>
                    <p className="text-xl font-bold">Повышена на 35%</p>
                    <p className="text-sm text-gray-600">за счет единого интерфейса</p>
                  </div>
                  <div className="bg-guard-light rounded-lg p-3">
                    <p className="text-sm font-semibold text-guard-primary">Автоматизация</p>
                    <p className="text-xl font-bold">50+ сценариев</p>
                    <p className="text-sm text-gray-600">взаимодействия систем</p>
                  </div>
                  <div className="bg-guard-light rounded-lg p-3">
                    <p className="text-sm font-semibold text-guard-primary">Отчетность</p>
                    <p className="text-xl font-bold">Единая система</p>
                    <p className="text-sm text-gray-600">для всех подсистем</p>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>
      </div>

      {/* CTA */}
      <div className="bg-guard-light rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Готовы модернизировать свои системы безопасности?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Свяжитесь с нами для проведения бесплатного аудита ваших систем и получения 
          предложения по модернизации с учетом ваших потребностей и бюджета.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contacts">
            <Button size="lg" className="btn-primary">
              Заказать бесплатный аудит
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

export default SystemModernization;
