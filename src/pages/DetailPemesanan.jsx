import React from 'react'
import DetailTransaksi from '../layouts/DetailTransaksi'
import Navbar from '../layouts/Navbar'
import Sidebar from '../layouts/Sidebar'
import Footer from '../layouts/Footer'

const DetailPemesanan = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="pb-8 pt-24 px-4 sm:px-8 md:px-12 xl:px-40">
        <DetailTransaksi/>
      </main>
      <Footer />
    </>
  )
}

export default DetailPemesanan