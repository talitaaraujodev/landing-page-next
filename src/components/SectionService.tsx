import Image from 'next/image';
import Container from './Container';
import PhoneIcon from '../assets/icon-phone.svg';
import SolutionsIcon from '../assets/icon-solutions.svg';
import OptionsIcon from '../assets/icon-options.svg';
import CardIcon from '../assets/icon-card.svg';
import ImagePhone from '../assets/phone.png';

export function SectionService() {
  return (
    <section className='relative w-full bg-gray-phone lg:h-[965px]'>
      <Container>
        <div className='flex flex-col-reverse items-center justify-between gap-y-4 pt-16 lg:flex-row lg:gap-x-16 lg:pt-32'>
          <div className='order-2 max-w-[594px] flex-1 lg:order-1'>
            <span className='mb-4 block text-sm font-bold uppercase text-primary-orange lg:mb-9'>
              Serviços Exclusivos
            </span>
            <h2 className='mb-4 text-3xl font-bold leading-tight text-primary-gray lg:mb-6 lg:text-[56px]'>
              Gerencie suas finanças sem sair de casa
            </h2>
            <p className='mb-8 max-w-[554px] text-base text-second-gray lg:mb-16 lg:text-lg'>
              Veja como você pode cuidar das suas finanças pelo app Itaú de
              forma segura, rápida e o melhor, no conforto da sua casa.
            </p>
            <ul className='flex flex-col items-start gap-4 lg:gap-9'>
              <li className='flex items-center gap-4 border-b-[1px] border-opacity-gray pb-4 lg:gap-9 lg:pb-9'>
                <div className='flex h-7 w-7 items-center justify-center'>
                  <Image src={PhoneIcon} alt='Phone Icon' loading="lazy"/>
                </div>
                <p className='flex-1 pr-2 text-black'>
                  Acompanhar sua conta, fazer transferências e pagamentos onde
                  estiver
                </p>
              </li>
              <li className='flex items-center gap-4 border-b-[1px] border-opacity-gray pb-4 lg:gap-9 lg:pb-9'>
                <div className='flex h-7 w-7 items-center justify-center'>
                  <Image src={SolutionsIcon} alt='Solutions Icon' />
                </div>
                <p className='flex-1 pr-2 text-black'>
                  Soluções de empréstimos e renegociação para organizar suas
                  finanças
                </p>
              </li>
              <li className='flex items-center gap-4 border-b-[1px] border-opacity-gray pb-4 lg:gap-9 lg:pb-9'>
                <div className='flex h-7 w-7 items-center justify-center'>
                  <Image src={OptionsIcon} alt='Options Icon' />
                </div>
                <p className='flex-1 pr-2 text-black'>
                  Diversas opções de investimentos, de acordo com o seu perfil
                  de investidor
                </p>
              </li>
              <li className='flex items-center gap-4 lg:gap-9'>
                <div className='flex h-7 w-7 items-center justify-center'>
                  <Image src={CardIcon} alt='Card Icon' />
                </div>
                <p className='flex-1 pr-2 text-black'>
                  Acompanhe a fatura do seu cartão de crédito e faça compras
                  online com seu cartão virtual.
                </p>
              </li>
            </ul>
          </div>
          <div className='order-1 mb-8 flex w-full items-center justify-center lg:order-2 lg:mb-0 lg:w-[32%]'>
            <Image
              src={ImagePhone}
              alt='Image Phone'
              className='h-auto w-2/3 lg:w-full'
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
