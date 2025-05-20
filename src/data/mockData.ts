
import { Product, ServiceOrder } from '../types';

export const videoProducts: Product[] = [
  {
    id: 'video-1',
    name: 'Комплект видеонаблюдения HIKVISION 4 камеры',
    category: 'Комплекты видеонаблюдения',
    type: 'video',
    price: 15900,
    image: 'https://via.placeholder.com/300x300?text=Video+Camera+Kit',
    rating: 4.7,
    reviews: 124,
    inStock: true,
    description: 'Комплект видеонаблюдения с 4 камерами FullHD 1080p для наружной установки. Включает в себя регистратор, жесткий диск и все необходимые комплектующие для монтажа.',
    features: [
      '4 камеры FullHD 1080p',
      'Ночная съемка до 30 метров',
      'Защита от непогоды IP67',
      'Жесткий диск 1TB в комплекте',
      'Удаленный доступ через приложение'
    ],
    specifications: {
      'Разрешение': '1920x1080',
      'Угол обзора': '90°',
      'Дальность ИК-подсветки': '30м',
      'Степень защиты': 'IP67',
      'Объем накопителя': '1 ТБ',
      'Количество каналов': '4'
    }
  },
  {
    id: 'video-2',
    name: 'IP-камера купольная DAHUA 2MP',
    category: 'IP-камеры',
    type: 'video',
    price: 3500,
    discountPrice: 2900,
    image: 'https://via.placeholder.com/300x300?text=IP+Dome+Camera',
    rating: 4.5,
    reviews: 87,
    inStock: true,
    description: 'Купольная IP-камера с разрешением 2MP для внутренней установки. Оснащена ИК-подсветкой и поддерживает удаленный доступ.',
    features: [
      'Разрешение 2MP (1920×1080)',
      'ИК-подсветка до 20 метров',
      'Поддержка PoE',
      'Встроенный микрофон',
      'Поддержка облачного хранения'
    ],
    specifications: {
      'Разрешение': '1920x1080',
      'Угол обзора': '100°',
      'Дальность ИК-подсветки': '20м',
      'Степень защиты': 'IP54',
      'Питание': 'DC12V/PoE',
      'Рабочая температура': '-10°C ~ +50°C'
    }
  },
  {
    id: 'video-3',
    name: 'Видеорегистратор 8-канальный HIKVISION',
    category: 'Видеорегистраторы',
    type: 'video',
    price: 8900,
    image: 'https://via.placeholder.com/300x300?text=NVR+8CH',
    rating: 4.8,
    reviews: 56,
    inStock: true,
    description: '8-канальный сетевой видеорегистратор для IP-камер с поддержкой разрешения 4K. Поддерживает подключение до 8 камер и имеет встроенный детектор движения.',
    features: [
      'Поддержка до 8 IP-камер',
      'Запись до 4K (8MP)',
      'Поддержка жесткого диска до 10 ТБ',
      'HDMI и VGA выходы',
      'Удаленный доступ через приложение'
    ],
    specifications: {
      'Количество каналов': '8',
      'Максимальное разрешение': '4K (8MP)',
      'Сетевой интерфейс': '1 RJ-45 10/100/1000 Мбит/с',
      'Поддержка HDD': 'До 10 ТБ',
      'Видеовыходы': 'HDMI, VGA',
      'Формат сжатия': 'H.265/H.264'
    }
  },
];

export const fireProducts: Product[] = [
  {
    id: 'fire-1',
    name: 'Комплект пожарной сигнализации для офиса 80м²',
    category: 'Комплекты пожарной сигнализации',
    type: 'fire',
    price: 19500,
    image: 'https://via.placeholder.com/300x300?text=Fire+Alarm+Kit',
    rating: 4.9,
    reviews: 45,
    inStock: true,
    description: 'Полный комплект пожарной сигнализации для офиса площадью до 80м². Включает в себя пожарную панель, дымовые извещатели, ручные извещатели, сирену и блок питания.',
    features: [
      'Для помещений до 80м²',
      '6 дымовых извещателей',
      '2 ручных извещателя',
      'Звуковая и световая сигнализация',
      'Резервное питание до 24 часов'
    ],
    specifications: {
      'Количество зон': '2',
      'Напряжение питания': '220В',
      'Резервное питание': 'Аккумулятор 12В 7Ач',
      'Количество извещателей': '8',
      'Громкость сирены': '95 дБ',
      'Класс защиты': 'IP30'
    }
  },
  {
    id: 'fire-2',
    name: 'Дымовой извещатель ИП 212-45',
    category: 'Пожарные извещатели',
    type: 'fire',
    price: 450,
    image: 'https://via.placeholder.com/300x300?text=Smoke+Detector',
    rating: 4.6,
    reviews: 210,
    inStock: true,
    description: 'Дымовой оптико-электронный извещатель для обнаружения возгораний в начальной стадии. Устанавливается на потолок и подключается к пожарной сигнализации.',
    features: [
      'Раннее обнаружение дыма',
      'Светодиодная индикация',
      'Низкое энергопотребление',
      'Простой монтаж',
      'Надежная работа'
    ],
    specifications: {
      'Напряжение питания': '9-30В',
      'Потребляемый ток': 'не более 0,045 мА',
      'Чувствительность': '0,05 - 0,2 дБ/м',
      'Диапазон рабочих температур': '-30°C до +55°C',
      'Площадь охраняемого помещения': 'до 85 м²',
      'Степень защиты': 'IP30'
    }
  },
  {
    id: 'fire-3',
    name: 'Пожарная сигнализация Bolid',
    category: 'Пожарные контрольные панели',
    type: 'fire',
    price: 12500,
    discountPrice: 11000,
    image: 'https://via.placeholder.com/300x300?text=Fire+Control+Panel',
    rating: 4.9,
    reviews: 78,
    inStock: true,
    description: 'Адресная пожарная панель для систем пожарной сигнализации средних и крупных объектов. Поддерживает до 10 шлейфов и 127 адресных устройств.',
    features: [
      'До 127 адресных устройств',
      'Журнал на 1000 событий',
      'Интеграция с системами оповещения',
      'Контроль доступа',
      'Резервное питание'
    ],
    specifications: {
      'Количество шлейфов': '10',
      'Адресных устройств': 'до 127',
      'Напряжение питания': '220В',
      'Резервное питание': 'Аккумулятор 12В 7Ач',
      'Интерфейсы': 'RS-485, Ethernet',
      'Класс защиты': 'IP30'
    }
  },
];

export const serviceOrders: ServiceOrder[] = [
  {
    id: 'order-1',
    type: 'video',
    status: 'in-progress',
    createdAt: '2025-05-15T10:30:00Z',
    address: 'г. Москва, ул. Ленина, д. 10, офис 205',
    description: 'Монтаж системы видеонаблюдения из 6 камер в офисе',
    price: 45000,
    stages: [
      {
        name: 'Предпроектное обследование',
        status: 'completed',
        startDate: '2025-05-15T12:00:00Z',
        endDate: '2025-05-15T15:00:00Z'
      },
      {
        name: 'Проектирование',
        status: 'completed',
        startDate: '2025-05-16T09:00:00Z',
        endDate: '2025-05-17T18:00:00Z'
      },
      {
        name: 'Закупка оборудования',
        status: 'completed',
        startDate: '2025-05-18T09:00:00Z',
        endDate: '2025-05-19T16:00:00Z'
      },
      {
        name: 'Монтаж и установка',
        status: 'in-progress',
        startDate: '2025-05-20T09:00:00Z'
      },
      {
        name: 'Настройка и тестирование',
        status: 'pending'
      },
      {
        name: 'Сдача работ',
        status: 'pending'
      }
    ]
  },
  {
    id: 'order-2',
    type: 'fire',
    status: 'completed',
    createdAt: '2025-05-01T09:00:00Z',
    completionDate: '2025-05-10T17:00:00Z',
    address: 'г. Москва, ул. Строителей, д. 22, кв. 15',
    description: 'Установка пожарной сигнализации в квартире',
    price: 25000,
    stages: [
      {
        name: 'Предпроектное обследование',
        status: 'completed',
        startDate: '2025-05-01T12:00:00Z',
        endDate: '2025-05-01T14:00:00Z'
      },
      {
        name: 'Проектирование',
        status: 'completed',
        startDate: '2025-05-02T09:00:00Z',
        endDate: '2025-05-03T16:00:00Z'
      },
      {
        name: 'Закупка оборудования',
        status: 'completed',
        startDate: '2025-05-04T09:00:00Z',
        endDate: '2025-05-05T16:00:00Z'
      },
      {
        name: 'Монтаж и установка',
        status: 'completed',
        startDate: '2025-05-06T09:00:00Z',
        endDate: '2025-05-08T17:00:00Z'
      },
      {
        name: 'Настройка и тестирование',
        status: 'completed',
        startDate: '2025-05-09T09:00:00Z',
        endDate: '2025-05-09T17:00:00Z'
      },
      {
        name: 'Сдача работ',
        status: 'completed',
        startDate: '2025-05-10T15:00:00Z',
        endDate: '2025-05-10T17:00:00Z'
      }
    ]
  },
];

export const allProducts = [...videoProducts, ...fireProducts];

export const mockUser = {
  id: 'user-1',
  name: 'Иван Петров',
  email: 'ivan@example.com',
  phone: '+7 (987) 654-32-10',
  address: 'г. Москва, ул. Пушкина, д. 5, кв. 10',
  orders: serviceOrders
};

// Получить все продукты
export const getProducts = () => allProducts;

// Получить продукт по ID
export const getProductById = (id: string) => allProducts.find(product => product.id === id);

// Получить продукты по категории
export const getProductsByType = (type: 'video' | 'fire' | 'access') => 
  allProducts.filter(product => product.type === type);

// Получить заказы пользователя
export const getUserOrders = () => serviceOrders;

// Получить заказ по ID
export const getOrderById = (id: string) => serviceOrders.find(order => order.id === id);
