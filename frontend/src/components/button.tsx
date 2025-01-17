import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="flex rounded-full bg-primary px-8 py-2 text-black hover:opacity-80">
      {children}
    </button>
  );
};

export default Button;

const CircleButton: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={'flex rounded-full bg-primary px-8 py-2 text-black hover:opacity-80 ' + className}
    >
      {children}
    </button>
  );
};

export { CircleButton };
