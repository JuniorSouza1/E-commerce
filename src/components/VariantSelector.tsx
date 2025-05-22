import React from 'react';
import { Color, Size } from '../types';

interface VariantSelectorProps {
  colors: Color[];
  sizes: Size[];
  selectedColor: string;
  selectedSize: string;
  onColorChange: (colorId: string) => void;
  onSizeChange: (sizeId: string) => void;
}

const VariantSelector: React.FC<VariantSelectorProps> = ({
  colors,
  sizes,
  selectedColor,
  selectedSize,
  onColorChange,
  onSizeChange,
}) => {
  return (
    <div className="space-y-6 mb-6">
      {/* Color Selector */}
      <div>
        <h3 className="text-sm font-medium text-gray-100 mb-3">Cor</h3>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color.id}
              type="button"
              onClick={() => onColorChange(color.id)}
              className={`relative w-10 h-10 rounded-full flex items-center justify-center ${
                selectedColor === color.id 
                  ? 'ring-2 ring-offset-2 ring-[#FF4500]' 
                  : 'ring-1 ring-gray-200 hover:ring-gray-300'
              }`}
              title={color.name}
            >
              <span 
                className="w-8 h-8 rounded-full" 
                style={{ backgroundColor: color.value }}
              />
              {selectedColor === color.id && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF4500] rounded-full text-white flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3L4 7L2 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Size Selector */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-gray-100">Tamanho</h3>
          <span className="text-xs text-gray-100">Selecione uma opção</span>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {sizes.map((size) => (
            <button
              key={size.id}
              type="button"
              onClick={() => size.available && onSizeChange(size.id)}
              disabled={!size.available}
              className={`
                py-3 px-4 text-sm font-medium rounded-md border transition-all duration-200
                ${!size.available && 'opacity-40 cursor-not-allowed bg-gray-50'}
                ${selectedSize === size.id 
                  ? 'bg-[#FF4500] border-[#FF4500] text-white' 
                  : size.available 
                    ? 'border-gray-200 text-gray-100 hover:border-[#FF4500]' 
                    : 'border-gray-200 text-gray-500'
                }
              `}
            >
              {size.name}
              {!size.available && <span className="block text-xs mt-1">(Indisponível)</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VariantSelector;