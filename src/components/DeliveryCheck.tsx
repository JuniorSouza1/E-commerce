import React, { useState, useEffect } from 'react';
import { Address } from '../types';
import { fetchAddressByCEP } from '../utils/api';
import Button from './Button';

interface DeliveryCheckProps {
  cep: string;
  address: Address | null;
  onCepChange: (cep: string, address: Address | null) => void;
}

const DeliveryCheck: React.FC<DeliveryCheckProps> = ({
  cep,
  address,
  onCepChange,
}) => {
  const [inputCep, setInputCep] = useState(cep);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formatCep = (value: string): string => {
    const digits = value.replace(/\D/g, '');
    if (digits.length <= 5) return digits;
    return `${digits.slice(0, 5)}-${digits.slice(5, 8)}`;
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formatted = formatCep(value);
    setInputCep(formatted);
    setError(null);
  };

  const handleCheckDelivery = async () => {
    const cleanCep = inputCep.replace(/\D/g, '');
    
    if (cleanCep.length !== 8) {
      setError('CEP deve conter 8 dígitos');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const addressData = await fetchAddressByCEP(cleanCep);
      
      if (!addressData) {
        setError('CEP não encontrado');
        onCepChange(cleanCep, null);
      } else {
        onCepChange(cleanCep, addressData);
      }
    } catch (err) {
      setError('Erro ao verificar o CEP');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-6 p-4 rounded-lg  shadow-sm">
      <h3 className="text-sm font-medium text-[#fffff] mb-3">Verificar disponibilidade de entrega</h3>
      
      <div className="flex items-start gap-2">
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              id="cep"
              value={inputCep}
              onChange={handleCepChange}
              placeholder="Digite o CEP"
              maxLength={9}
              className={`w-full px-3 py-2 bg-slate-300 border rounded-md text-sm focus:outline-none focus:ring-2 transition-all duration-200 placeholder-gray-800 ${
                error ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-[#FF4500]'
              }`}
            />
            {error && (
              <p className="mt-1 text-xs text-red-200">{error}</p>
            )}
          </div>
        </div>
        <Button 
          type="primary"
          size="md"
          onClick={handleCheckDelivery}
          disabled={isLoading || inputCep.replace(/\D/g, '').length !== 8}
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Verificando
            </span>
          ) : "Verificar"}
        </Button>
      </div>

      {address && (
        <div className="mt-4 p-3  rounded border border-gray-200 animate-fadeIn">
          <h4 className="text-sm font-medium text-[#fffff] mb-2">Endereço encontrado:</h4>
          <div className="text-sm text-[#fffff] space-y-1">
            <p>{address.logradouro}{address.complemento ? `, ${address.complemento}` : ''}</p>
            <p>{address.bairro} - {address.localidade}/{address.uf}</p>
            <p>CEP: {address.cep}</p>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
            <span className="text-sm font-medium text-[#fffff]">Entrega disponível</span>
            <span className="text-sm text-[#fffff]">Prazo: 3-5 dias úteis</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryCheck