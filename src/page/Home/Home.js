import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Component/Header/Header'
import Carousel from './Component/Carousel/Carousel'
import ListDoanhMuc from './Component/ListDoanhMuc/ListDoanhMuc'

export default function Home() {
    return (
        <div className=''>
            <Header />
            <Carousel />
            <ListDoanhMuc />
            <Outlet />
        </div>
    )
}
