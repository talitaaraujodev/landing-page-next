import Image from 'next/image';
import Container from './Container';
import ImgAppleStore from '../assets/btn-apple-store.svg';
import ImgGooglePlay from '../assets/btn-google-play.svg';
import Arrow from '../assets/arrow-explorer.svg';
import WomanImage from '../assets/woman.png';

function SectionHero() {
  return (
    <section className='h-auto w-full bg-img_bg_hero bg-cover bg-center bg-no-repeat'>
      <Container>
        <div className='flex flex-col-reverse items-center justify-between py-6 lg:flex-row'>
          <div className='max-w-[500px] lg:flex-1'>
            <h1 className='mb-4 text-4xl font-bold text-white lg:text-6xl'>
              Tenha seu banco na palma da mão.
            </h1>
            <p className='mb-8 text-lg text-white lg:text-xl'>
              Todas as operações que você precisa em um só lugar. Simples,
              completo e feito pra você.
            </p>

            <div className='mb-8 flex flex-col gap-4 sm:flex-row'>
              <button className='flex-1'>
                <Image src={ImgAppleStore} alt='Apple Store' loading="lazy" />
              </button>
              <button className='flex-1'>
                <Image src={ImgGooglePlay} alt='Google Play' loading="lazy" />
              </button>
            </div>
            <button className='flex items-center gap-3 transition-all hover:cursor-pointer hover:opacity-90'>
              <Image src={Arrow} alt='Arrow Down' />
              <span className='text-base font-bold text-white sm:text-lg lg:text-xl '>
                Continue explorando
              </span>
            </button>
          </div>
          <div className='flex-1'>
            <Image
              src={WomanImage}
              alt='Woman Image'
              className='h-auto w-full'
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionHero;
