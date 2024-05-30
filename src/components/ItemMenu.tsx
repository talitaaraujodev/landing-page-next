import { useState } from 'react';
import Image from 'next/image';
import Arrow from '../assets/arrow-down.svg';

type ItemMenuProps = {
  name: string;
  submenu?: string[];
};

function ItemMenu({ name, submenu }: ItemMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      <button
        onClick={toggleSubmenu}
        className='flex w-full items-center justify-between bg-primary-orange px-4 py-2 font-bold text-white transition-all hover:bg-opacity-80'
      >
        <span>{name}</span>
        {submenu && (
          <Image
            src={Arrow}
            alt='Arrow'
            className={`h-4 w-4 transform lg:ml-1.5 ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
      </button>
      {submenu && isOpen && (
        <ul className='absolute left-0 top-full z-10 mt-2 w-full rounded-lg bg-white text-black shadow-lg sm:w-52'>
          {submenu.map((item, index) => (
            <li
              key={index}
              className={`px-4 py-2 transition-all hover:cursor-pointer hover:bg-gray-200 ${index === 0 ? 'rounded-t-lg' : ''} ${index === submenu.length - 1 ? 'rounded-b-lg' : ''}`}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemMenu;
