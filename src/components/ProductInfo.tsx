import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '../types';
import Button from './Button';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  const originalPrice = product.price * 1.1;
  const formattedOriginalPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(originalPrice);

  const discountPercentage = 10;

  return (
    <div className="w-full">
      <div className="mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#fffff] mb-2">{product.name}</h1>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={16}
                className={`${
                  index < Math.floor(product.rating) 
                    ? 'text-[#FF4500] fill-[#FF4500]' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-[#fffff]">
            {product.rating.toFixed(1)} ({Math.floor(Math.random() * 500) + 100} avaliações)
          </span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-gray-100">{formattedPrice}</span>
          <span className="text-lg text-[#A52A2A] line-through">{formattedOriginalPrice}</span>
          <span className="px-2 py-1 text-xs font-medium bg-[#A52A2A] bg-opacity-10 text-[#A52A2A] rounded">
            -{discountPercentage}%
          </span>
        </div>
        <p className="text-sm text-[#fffff] mt-1">
          Em até 12x de {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(product.price / 12)} sem juros
        </p>
      </div>

      <div className="mb-6">
        <p className="text-[#fffff]">{product.description}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium text-[#fffff] mb-3">Características</h3>
        <ul className="list-disc list-inside space-y-1 text-[#fffff]">
          {product.features.map((feature, index) => (
            <li key={index} className="text-sm">{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <Button type="primary" size="lg" fullWidth>
          Adicionar ao Carrinho
        </Button>
        <Button type="outline" size="lg" fullWidth className="mt-3">
          Comprar Agora
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo