import React from 'react'

const RingkasanTransaksi = () => {
  return (
    <div className='px-4 pt-4'>
        <h1 className='ml-4 text-tertiary text-xl font-semibold'>Ringkasan Transaksi</h1>
        <div className="flex space-x-4 my-4 ml-4 font-poppins">
                <div className='text-slate-400'>
                    <div>Total Bahan</div>
                    <div>Total Harga</div>
                    <div>Pembayaran</div>
                </div>
                <div>
                    <div>:</div>
                    <div>:</div>
                    <div>:</div>
                </div>
                <div>
                    <div>19</div>
                    <div>Rp100.000</div>
                    <div>COD (Cash On Delivery)</div>
                </div>
            </div>
    </div>
  )
}

export default RingkasanTransaksi