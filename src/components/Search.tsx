import IconSearch from '../assets/icon-search.svg';
import Image from 'next/image';

function Search() {
  return (
    <div className='item-center flex gap-4'>
      <Image src={IconSearch} alt='Search'/>
      <input
        type='text'
        className='bg-transparent pr-12 text-white outline-none placeholder:text-white focus:border-b focus:border-white'
        placeholder='Buscar...'
      />
    </div>
  );
}
export default Search;
