import { Product } from '../types';

export const product: Product = {
  id: '1',
  name: 'Premium Wireless Headphones',
  price: 799.99,
  description: 'Experimente som com qualidade de estúdio com nossos fones de ouvido sem fio premium. Com cancelamento de ruído ativo, bateria com duração de 30 horas e materiais premium para conforto o dia todo.',
  images: [
    'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ],
  colors: [
    { id: 'c1', name: 'Matte Black', value: '#222222' },
    { id: 'c2', name: 'Silver', value: '#C0C0C0' },
    { id: 'c3', name: 'Navy Blue', value: '#000080' },
    { id: 'c4', name: 'Rose Gold', value: '#B76E79' },
  ],
  sizes: [
    { id: 's1', name: 'Standard', available: true },
    { id: 's2', name: 'Compact', available: true },
    { id: 's3', name: 'Pro', available: false },
    { id: 's4', name: 'Studio', available: true },
  ],
  features: [
    'Cancelamento Ativo de Ruído',
    'Bateria com duração de 30 horas',
    'Almofadas auriculares de espuma viscoelástica premium',
    'Certificação para áudio de alta resolução',
    'Design dobrável com estojo de viagem',
    'Conexão multiponto',
  ],
  rating: 4.8,
};