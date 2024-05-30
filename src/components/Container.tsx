import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <div className='item-center mx-auto flex  w-full max-w-[1246px] justify-between px-[15px]'>
      {children}
    </div>
  );
}

export default Container;
