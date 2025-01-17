import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`max-w-[1200px] px-8 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Wrapper;
