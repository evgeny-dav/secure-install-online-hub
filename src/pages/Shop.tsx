
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/data/mockData';
import { Product } from '@/types';
import { Search } from 'lucide-react';

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeType, setActiveType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    // Получаем все продукты из моковых данных
    const allProducts = getProducts();
    setProducts(allProducts);
    setFilteredProducts(allProducts);
  }, []);

  useEffect(() => {
    // Фильтрация продуктов при изменении типа или поискового запроса
    let filtered = products;
    
    if (activeType !== 'all') {
      filtered = filtered.filter(product => product.type === activeType);
    }
    
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(filtered);
  }, [activeType, searchQuery, products]);

  const handleTypeChange = (type: string) => {
    setActiveType(type);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Интернет-магазин оборудования</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          {/* Поисковая форма */}
          <form onSubmit={handleSearch} className="w-full md:w-1/2">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск товаров..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-guard-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </form>
          
          {/* Фильтры по типу */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={activeType === 'all' ? 'default' : 'outline'}
              onClick={() => handleTypeChange('all')}
              className={activeType === 'all' ? 'bg-guard-primary hover:bg-guard-secondary' : ''}
            >
              Все товары
            </Button>
            <Button
              variant={activeType === 'video' ? 'default' : 'outline'}
              onClick={() => handleTypeChange('video')}
              className={activeType === 'video' ? 'bg-guard-primary hover:bg-guard-secondary' : ''}
            >
              Видеонаблюдение
            </Button>
            <Button
              variant={activeType === 'fire' ? 'default' : 'outline'}
              onClick={() => handleTypeChange('fire')}
              className={activeType === 'fire' ? 'bg-guard-primary hover:bg-guard-secondary' : ''}
            >
              Пожарная сигнализация
            </Button>
          </div>
        </div>
      </div>
      
      {/* Список товаров */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <h3 className="text-xl font-medium text-gray-600 mb-4">Товары не найдены</h3>
          <p className="text-gray-500">
            Попробуйте изменить параметры поиска или выбрать другую категорию.
          </p>
        </div>
      )}
    </div>
  );
};

export default Shop;
