import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="bg-primary flex rounded-full px-8 py-2 text-black hover:opacity-80">
      {children}
    </button>
  );
};

export default Button;
