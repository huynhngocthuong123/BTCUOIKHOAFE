import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Component/Footer/Footer'
import Header from '../../Component/Header/Header'
import Carousel from './Component/Carousel/Carousel'
import ListDoanhMuc from './Component/ListDoanhMuc/ListDoanhMuc'
import ListKhoaHoc from './Component/ListKhoaHoc/ListKhoaHoc'

export default function Home() {
    return (
        <div className=''>
            <Carousel />
            <ListDoanhMuc />
            <ListKhoaHoc />
            <Footer />
            {/* <Outlet /> */}
        </div>
    )
}
