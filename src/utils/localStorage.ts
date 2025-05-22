import { UserSelections } from '../types';

const STORAGE_KEY = 'product_selections';
const EXPIRATION_TIME = 15 * 60 * 1000; // 15 minutes in milliseconds

export const saveSelectionsToStorage = (selections: UserSelections): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(selections));
};

export const getSelectionsFromStorage = (): UserSelections | null => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  
  if (!savedData) return null;
  
  try {
    const parsedData: UserSelections = JSON.parse(savedData);
    const now = Date.now();
    
    // Check if data is still valid (within 15 minutes)
    if (now - parsedData.timestamp > EXPIRATION_TIME) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    
    return parsedData;
  } catch (error) {
    console.error('Error parsing saved selections:', error);
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
};

export const clearSelectionsStorage = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};