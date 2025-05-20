
import { ServiceOrder } from '@/types';
import { 
  CheckCircle, 
  Clock, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface OrderStatusProps {
  order: ServiceOrder;
}

const OrderStatus = ({ order }: OrderStatusProps) => {
  // Рассчитываем прогресс выполнения заказа
  const totalStages = order.stages.length;
  const completedStages = order.stages.filter(stage => stage.status === 'completed').length;
  const progress = Math.floor((completedStages / totalStages) * 100);

  // Форматирование даты для отображения
  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Не назначена';
    
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  // Определение цвета статуса
  const getStatusColor = (status: ServiceOrder['status']) => {
    switch (status) {
      case 'pending': return 'text-amber-500';
      case 'in-progress': return 'text-blue-500';
      case 'completed': return 'text-green-500';
      case 'cancelled': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  // Определение текста статуса
  const getStatusText = (status: ServiceOrder['status']) => {
    switch (status) {
      case 'pending': return 'Ожидает выполнения';
      case 'in-progress': return 'В процессе';
      case 'completed': return 'Выполнен';
      case 'cancelled': return 'Отменен';
      default: return 'Неизвестный статус';
    }
  };

  // Определение иконки статуса для стадии
  const getStageStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-blue-500" />;
      case 'pending':
        return <AlertCircle className="h-5 w-5 text-gray-400" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-400" />;
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <div className="flex items-center mb-2">
            <h3 className="text-xl font-bold mr-3">Заказ #{order.id}</h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
              {getStatusText(order.status)}
            </span>
          </div>
          <p className="text-gray-600">
            Создан: {formatDate(order.createdAt)}
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-gray-700 font-medium">Сумма: {order.price.toLocaleString('ru-RU')} ₽</p>
          <p className="text-gray-600 text-sm mt-1">Адрес: {order.address}</p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Прогресс выполнения</span>
          <span className="text-sm font-medium text-gray-700">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <h4 className="font-semibold text-lg mb-4">Этапы выполнения:</h4>
      <div className="space-y-4">
        {order.stages.map((stage, index) => (
          <div key={index} className="relative">
            {/* Линия между этапами */}
            {index < order.stages.length - 1 && (
              <div className="absolute left-[22px] top-7 bottom-0 w-0.5 bg-gray-200 h-full"></div>
            )}
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                {getStageStatusIcon(stage.status)}
              </div>
              <div className="ml-4 flex-grow">
                <div className="flex flex-wrap justify-between items-start">
                  <h5 className={`font-medium ${stage.status === 'completed' ? 'text-green-600' : stage.status === 'in-progress' ? 'text-blue-600' : 'text-gray-600'}`}>
                    {stage.name}
                  </h5>
                  <span className={`text-sm ${stage.status === 'completed' ? 'text-green-500' : stage.status === 'in-progress' ? 'text-blue-500' : 'text-gray-500'}`}>
                    {stage.status === 'completed' ? 'Завершен' : stage.status === 'in-progress' ? 'В процессе' : 'Ожидает'}
                  </span>
                </div>
                {(stage.startDate || stage.endDate) && (
                  <div className="text-sm text-gray-500 mt-1">
                    {stage.startDate && (
                      <span>
                        Начало: {formatDate(stage.startDate)}
                      </span>
                    )}
                    {stage.startDate && stage.endDate && (
                      <span className="mx-2">
                        <ArrowRight className="inline h-3 w-3" />
                      </span>
                    )}
                    {stage.endDate && (
                      <span>
                        Окончание: {formatDate(stage.endDate)}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderStatus;
