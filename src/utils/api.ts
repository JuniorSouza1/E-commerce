import { Address } from '../types';

export const fetchAddressByCEP = async (cep: string): Promise<Address | null> => {
  if (!cep || cep.length !== 8) {
    return null;
  }
  
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    
    if (!response.ok) {
      throw new Error('CEP não encontrado');
    }
    
    const data = await response.json();
    
    if (data.erro) {
      return null;
    }
    
    return data as Address;
  } catch (error) {
    console.error('Error fetching address:', error);
    return null;
  }
};