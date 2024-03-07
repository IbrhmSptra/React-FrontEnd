import React from 'react'
import ImgPesanan from '../assets/img/Pesanan.png'

const ButtonPemesanan = () => {
  return (
        <div className="inline-flex mt-12 items-center justify-center p-2 w-44 bg-primary rounded-lg sm:mx-auto">
          <a href="#" className="font-bold">
              Pesan Bahan
          </a>
          <img src={ImgPesanan} alt="shoppingcart" />        
        </div>
  )
}

export default ButtonPemesanan