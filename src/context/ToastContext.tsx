// ToastContext.tsx
import { createContext, useState, ReactNode } from 'react';

interface ToastContextProps {
  message: string | null;
  toastType: 'success' | 'error' | null;
  setToastMessage: (msg: string, type: 'success' | 'error') => void;
}

export const ToastContext = createContext<ToastContextProps>({ message: null, toastType: null, setToastMessage: () => {} });

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider = ({ children } : ToastProviderProps) => {
  const [message, setMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'success' | 'error' | null>(null);

  const setToastMessage = (msg: string, type: 'success' | 'error') => {
    setMessage(msg);
    setToastType(type);
    setTimeout(() => {
      setMessage(null);
      setToastType(null);
    }, 4000);
  };

  return (
    <ToastContext.Provider value={{ message, toastType, setToastMessage }}>
      {children}
      {message && <div className={`toast ${toastType}`}>{message}</div>}
    </ToastContext.Provider>
  );
};