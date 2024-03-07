import React from 'react'
import SearchDetailPemesanan from '../components/SearchDetailPemesanan'
import DetailPemesananPertama from '../components/DetailPemesananPertama'
import RingkasanTransaksi from '../components/RingkasanTransaksi'
import ButtonPemesanan from '../components/ButtonPemesanan'

const DetailTransaksi = () => {
  return (
    <div className='relative mb-20'>
        <p className='font-semibold text-3xl ml-40 mt-20'>
            Pengiriman
        </p>
        <div className='flex space-between place-content-center mr-40'>
            <div className='w-full  rounded-xl mr-4 ml-40 mt-16'>
                <SearchDetailPemesanan/>
                <div className='bg-white shadow-md rounded-xl'>
                <DetailPemesananPertama/>
                </div>
            </div>
            <div className='w-full bg-white shadow-md rounded-xl mr-4 ml-40 mt-16 px-4 py-4'>
                <RingkasanTransaksi/>
                <div className='flex items-center justify-center text-center'>
                    <ButtonPemesanan/>
                </div>
                <p className='text-center pt-60 px-4 text-xs text-grayText md:text-sm'>
                Dengan melanjutkan, kamu menyetujui S&K pemesanan
                bahan resep aplikasi Foodo
                </p>
            </div>
        </div>
        
    </div>
    
  )
}

export default DetailTransaksi