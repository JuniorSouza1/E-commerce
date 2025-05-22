import React, { useState, useEffect } from 'react';
import { Product, Address, UserSelections } from '../types';
import ImageGallery from './ImageGallery';
import ProductInfo from './ProductInfo';
import VariantSelector from './VariantSelector';
import DeliveryCheck from './DeliveryCheck';
import { saveSelectionsToStorage, getSelectionsFromStorage } from '../utils/localStorage';

interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const firstAvailableSize = product.sizes.find(size => size.available)?.id || '';
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].id);
  const [selectedSize, setSelectedSize] = useState(firstAvailableSize);
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState<Address | null>(null);
  
  useEffect(() => {
    const savedSelections = getSelectionsFromStorage();
    
    if (savedSelections) {
      setSelectedImageIndex(savedSelections.selectedImageIndex);
      setSelectedColor(savedSelections.selectedColor);
      setSelectedSize(savedSelections.selectedSize);
      setCep(savedSelections.cep);
      setAddress(savedSelections.address);
    }
  }, []);
  
  useEffect(() => {
    const selections: UserSelections = {
      selectedImageIndex,
      selectedColor,
      selectedSize,
      cep,
      address,
      timestamp: Date.now(),
    };
    
    saveSelectionsToStorage(selections);
  }, [selectedImageIndex, selectedColor, selectedSize, cep, address]);
  
  const handleImageSelect = (index: number) => {
    setSelectedImageIndex(index);
  };
  
  const handleColorChange = (colorId: string) => {
    setSelectedColor(colorId);
  };
  
  const handleSizeChange = (sizeId: string) => {
    setSelectedSize(sizeId);
  };
  
  const handleCepChange = (newCep: string, newAddress: Address | null) => {
    setCep(newCep);
    setAddress(newAddress);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 bg-[#696969] text-white rounded-lg p-6 border border-[#fffff]/20">
        <ImageGallery 
          images={product.images} 
          selectedImageIndex={selectedImageIndex}
          onImageSelect={handleImageSelect}
        />
        
        <div className="flex-1">
          <ProductInfo product={product} />
          
          <VariantSelector 
            colors={product.colors}
            sizes={product.sizes}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            onColorChange={handleColorChange}
            onSizeChange={handleSizeChange}
          />
          
          <DeliveryCheck 
            cep={cep}
            address={address}
            onCepChange={handleCepChange}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductPage