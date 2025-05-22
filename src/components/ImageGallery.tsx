import React, { useState, useEffect } from 'react';

interface ImageGalleryProps {
  images: string[];
  selectedImageIndex: number;
  onImageSelect: (index: number) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ 
  images, 
  selectedImageIndex,
  onImageSelect 
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const handleThumbnailClick = (index: number) => {
    if (index === selectedImageIndex) return;
    
    setIsTransitioning(true);
    onImageSelect(index);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };
  
  return (
    <div className="w-full md:w-[35%] flex flex-col gap-4">
      {/* Main Image */}
      <div className="w-full aspect-square rounded-lg overflow-hidden bg-gray-100 relative">
        <img 
          src={images[selectedImageIndex]} 
          alt="Product"
          className={`w-full h-full object-cover ${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        />
        {isTransitioning && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
      
      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`relative min-w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 ${
              selectedImageIndex === index 
                ? 'border-blue-500 shadow-md' 
                : 'border-transparent hover:border-gray-300'
            }`}
          >
            <img 
              src={image} 
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;