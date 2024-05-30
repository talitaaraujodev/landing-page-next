'use client';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '../assets/logo.svg';
import IconMenu from '../assets/icon-menu.svg';
import IconClose from '../assets/icon-close.svg';
import Search from '../components/Search';
import ItemMenu from './ItemMenu';
import Link from 'next/link';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='relative flex w-full flex-col bg-primary-orange text-white'>
      <div className='flex h-20 w-full items-center'>
        <div className='flex flex-1 items-center justify-between px-10'>
          <div className='flex items-center gap-x-2'>
            <button onClick={toggleMenu} className='lg:hidden'>
             {menuOpen ? (  <Image src={IconClose} alt='Close' className='h-9' /> ): (<Image src={IconMenu} alt='Menu' className='h-9' />)}
            </button>
            <Link href={'/'}>
              <Image src={Logo} alt='Logo' />
            </Link>
          </div>
          <ul className='hidden items-center justify-center gap-8 lg:flex'>
            <li>
              <ItemMenu submenu={['Subitem 1', 'Subitem 2']} name='Para você' />
            </li>
            <li>
              <ItemMenu
                submenu={['Subitem 1', 'Subitem 2']}
                name='Para empresas'
              />
            </li>
            <li>
              <ItemMenu submenu={['Subitem 1', 'Subitem 2']} name='Serviços' />
            </li>
            <li>
              <ItemMenu submenu={['Subitem 1', 'Subitem 2']} name='Ajuda' />
            </li>
          </ul>
          <div className='flex items-center gap-x-5'>
            <div className='hidden lg:block'>
              <Search />
            </div>
            <button className='flex h-10 items-center gap-2 rounded-lg border-2 border-white p-4 text-base font-medium transition-all hover:border-opacity-80 hover:bg-white hover:text-primary-orange lg:px-4 lg:py-6 lg:text-lg lg:font-semibold'>
              Acessar Conta
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className='bg-primary-orange text-white lg:hidden'>
          <ul className='flex flex-col items-center gap-2 p-4'>
            <li className='w-full'>
              <ItemMenu submenu={['Subitem 1', 'Subitem 2']} name='Para você' />
            </li>
            <li className='w-full'>
              <ItemMenu
                submenu={['Subitem 1', 'Subitem 2']}
                name='Para empresas'
              />
            </li>
            <li className='w-full'>
              <ItemMenu submenu={['Subitem 1', 'Subitem 2']} name='Serviços' />
            </li>
            <li className='w-full'>
              <ItemMenu submenu={['Subitem 1', 'Subitem 2']} name='Ajuda' />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
