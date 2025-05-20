
import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { User } from '../types';
import { mockUser } from '../data/mockData';
import { toast } from '@/hooks/use-toast';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string, phone: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Проверка аутентификации при загрузке приложения
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      } catch (e) {
        console.error('Ошибка при загрузке пользователя из localStorage:', e);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // В реальном приложении здесь был бы запрос к API
    // Для демонстрации используем моковые данные
    if (email === mockUser.email && password === '123456') {
      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(mockUser));
      toast({
        title: "Успешный вход",
        description: `Добро пожаловать, ${mockUser.name}!`,
      });
      return true;
    } else {
      toast({
        title: "Ошибка входа",
        description: "Неверный email или пароль",
        variant: "destructive",
      });
      return false;
    }
  };

  const register = async (
    name: string, 
    email: string, 
    password: string, 
    phone: string
  ): Promise<boolean> => {
    // В реальном приложении здесь был бы запрос к API
    // Для демонстрации создаем нового пользователя на основе моковых данных
    const newUser = {
      ...mockUser,
      name,
      email,
      phone,
      id: `user-${Date.now()}`,
    };
    
    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(newUser));
    
    toast({
      title: "Регистрация успешна",
      description: `Добро пожаловать, ${name}!`,
    });
    
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    toast({
      title: "Вы вышли из системы",
    });
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      login, 
      register, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
