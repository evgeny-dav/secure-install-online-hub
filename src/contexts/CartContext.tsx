
import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { CartItem, Product } from '../types';
import { getProductById } from '../data/mockData';
import { toast } from '@/hooks/use-toast';

interface CartContextType {
  items: CartItem[];
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Загрузка корзины из localStorage при загрузке приложения
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        const validCart = parsedCart.filter((item: CartItem) => getProductById(item.productId));
        
        // Добавляем данные о продукте к каждому элементу корзины
        const cartWithProducts = validCart.map((item: CartItem) => {
          const product = getProductById(item.productId);
          return {
            ...item,
            product: product as Product
          };
        });
        
        setItems(cartWithProducts);
      } catch (e) {
        console.error('Ошибка при загрузке корзины из localStorage:', e);
        localStorage.removeItem('cart');
      }
    }
  }, []);

  // Сохранение корзины в localStorage при изменении
  useEffect(() => {
    // Сохраняем только productId и quantity для уменьшения размера данных
    const cartForStorage = items.map(item => ({
      productId: item.productId,
      quantity: item.quantity
    }));
    localStorage.setItem('cart', JSON.stringify(cartForStorage));
  }, [items]);

  const addItem = (productId: string, quantity = 1) => {
    const product = getProductById(productId);
    if (!product) {
      console.error('Продукт не найден:', productId);
      return;
    }

    const existingItemIndex = items.findIndex(item => item.productId === productId);

    if (existingItemIndex >= 0) {
      // Если товар уже в корзине, увеличиваем количество
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += quantity;
      setItems(updatedItems);
      toast({
        title: "Количество обновлено",
        description: `${product.name} (${updatedItems[existingItemIndex].quantity} шт.)`,
      });
    } else {
      // Если товара нет в корзине, добавляем его
      setItems([...items, { productId, quantity, product }]);
      toast({
        title: "Товар добавлен в корзину",
        description: product.name,
      });
    }
  };

  const removeItem = (productId: string) => {
    const product = getProductById(productId);
    setItems(items.filter(item => item.productId !== productId));
    if (product) {
      toast({
        title: "Товар удален из корзины",
        description: product.name,
      });
    }
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(productId);
      return;
    }

    const updatedItems = items.map(item => 
      item.productId === productId ? { ...item, quantity } : item
    );
    setItems(updatedItems);
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Корзина очищена",
      description: "Все товары удалены из корзины",
    });
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      const price = item.product.discountPrice || item.product.price;
      return total + (price * item.quantity);
    }, 0);
  };

  return (
    <CartContext.Provider value={{ 
      items, 
      addItem, 
      removeItem, 
      updateQuantity, 
      clearCart, 
      getTotalItems, 
      getTotalPrice 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
