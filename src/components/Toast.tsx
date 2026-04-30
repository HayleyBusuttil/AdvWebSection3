'use client';

import { useState } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

export function Toast({ message, type, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const bgColor =
    type === 'success'
      ? 'bg-green-100 border-green-300'
      : type === 'error'
        ? 'bg-red-100 border-red-300'
        : 'bg-blue-100 border-blue-300';

  const textColor =
    type === 'success'
      ? 'text-green-800'
      : type === 'error'
        ? 'text-red-800'
        : 'text-blue-800';

  const iconSrc =
    type === 'success' ? '/icons/success.svg' : type === 'error' ? '/icons/error.svg' : '/icons/info.svg';

  return (
    <div
      className={`fixed bottom-4 right-4 p-4 rounded-lg border transition-all duration-300 z-50 ${bgColor} ${textColor} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <div className="flex items-center gap-3">
        <img src={iconSrc} alt="" aria-hidden="true" className="h-5 w-5" />
        <span>{message}</span>
        <button
          onClick={handleClose}
          className="ml-4 hover:opacity-70 transition"
          aria-label="Dismiss notification"
        >
          <img src="/icons/close.svg" alt="" aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
