export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  colors: Color[];
  sizes: Size[];
  features: string[];
  rating: number;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface Size {
  id: string;
  name: string;
  available: boolean;
}

export interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export interface UserSelections {
  selectedImageIndex: number;
  selectedColor: string;
  selectedSize: string;
  cep: string;
  address: Address | null;
  timestamp: number;
}