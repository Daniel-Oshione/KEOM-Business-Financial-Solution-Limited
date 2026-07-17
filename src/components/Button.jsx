import { Button } from 'flowbite-react';

export default function CustomButton({ children, className, ...props }) {
  return (
    <Button 
      className={`!px-3 !py-1.5 !cursor-pointer !text-xs md:!px-5 md:!py-2.5 md:!text-sm ${className || ''}`} 
      {...props}
    >
      {children}
    </Button>
  );
}