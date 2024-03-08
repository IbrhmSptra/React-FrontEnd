import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import Sidebar from '../layouts/Sidebar';
import Filter from '../components/Filter';
import BannerKedua from '../components/BannerKedua';
import CardKatagori from '../components/CardKatagori';
import { useRef } from 'react';

const FavoritePage = () => {
  const favoriteSearch = useRef(null);
  return (
    <div className='font-poppins'>
      <Navbar ref={favoriteSearch} />
      <Sidebar style={{ zIndex: 1000 }} />
      <main className='pb-8 pt-24 px-4 sm:px-8 md:px-12 xl:px-40'>
        <BannerKedua />
        <Filter
          filter={[
            'Harga Terendah',
            'Harga Tertinggi',
            'Ulasan Terbaik',
            'Pesanan Terbanyak',
          ]}
        />
        <div className='flex justify-between flex-wrap'>
          <CardKatagori />
          <CardKatagori />
          <CardKatagori />
          <CardKatagori />
          <CardKatagori />
          <CardKatagori />
          <CardKatagori />
          <CardKatagori />
          <CardKatagori />
          <CardKatagori />
          <CardKatagori />
          <CardKatagori />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FavoritePage;
