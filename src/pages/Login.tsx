
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  const [loading, setLoading] = useState(false);
  
  // Перенаправляем пользователя, если он уже авторизован
  if (isAuthenticated) {
    const from = (location.state as any)?.from || '/dashboard';
    navigate(from);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля",
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);
    
    try {
      const success = await login(formData.email, formData.password);
      
      if (success) {
        const from = (location.state as any)?.from || '/dashboard';
        navigate(from);
      }
    } finally {
      setLoading(false);
    }
  };

  // Для целей демонстрации добавляем подсказку о тестовых данных
  const fillTestData = () => {
    setFormData({
      email: 'ivan@example.com',
      password: '123456',
      remember: false
    });
  };

  return (
    <div className="container py-12">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Вход в личный кабинет</h1>
          <p className="text-gray-600">
            Войдите, чтобы отслеживать статус монтажных работ
            и управлять заказами
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-guard-primary"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Пароль
                </label>
                <Link to="/forgot-password" className="text-sm text-guard-primary hover:text-guard-secondary">
                  Забыли пароль?
                </Link>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-guard-primary"
                placeholder="********"
              />
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="h-4 w-4 text-guard-primary border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Запомнить меня
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full btn-primary"
              disabled={loading}
            >
              {loading ? 'Вход...' : 'Войти'}
            </Button>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Еще нет аккаунта?{' '}
              <Link to="/register" className="text-guard-primary hover:text-guard-secondary font-medium">
                Зарегистрируйтесь
              </Link>
            </p>
          </div>
          
          {/* Демо-подсказка */}
          <div className="mt-8 p-3 bg-guard-light rounded-lg text-sm">
            <p className="font-medium mb-1">Для демонстрации используйте:</p>
            <p>Email: ivan@example.com</p>
            <p>Пароль: 123456</p>
            <Button 
              onClick={fillTestData} 
              variant="link" 
              className="text-guard-primary p-0 h-auto mt-1"
            >
              Заполнить тестовые данные
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
