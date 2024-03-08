import banner from '../assets/img/Card/fishandchips.png';

const Banner = () => {
  return (
    <div className=''>
      <div className='border pb-3 mt-3 w-[200px]'>
        <img className='w-[200px]' src={banner} />
        <p className='px-1 pt-3 text-xs text-headline'>Fish & Chips</p>
        <div className='px-1 flex justify-between'>
          <span className='text-xs'>⭐⭐⭐⭐⭐ (24)</span>
          <p className='text-tertiary text-xs font-semibold'>Rp50.000</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
