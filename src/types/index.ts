
export interface Product {
  id: string;
  name: string;
  category: string;
  type: 'video' | 'fire' | 'access';
  price: number;
  discountPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  description: string;
  features: string[];
  specifications: Record<string, string>;
}

export interface ServiceOrder {
  id: string;
  type: 'video' | 'fire' | 'access';
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  createdAt: string;
  completionDate?: string;
  address: string;
  description: string;
  price: number;
  stages: {
    name: string;
    status: 'pending' | 'in-progress' | 'completed';
    startDate?: string;
    endDate?: string;
  }[];
}

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  orders: ServiceOrder[];
}
