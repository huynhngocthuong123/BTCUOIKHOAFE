import React, { Fragment } from 'react'
import "./Carousel.scss"
export default function Carousel() {
    return (
        <Fragment>
            <div className='carousel_BG '>
                <div className="carousel_content xl:container mx-auto p-6 justify-center">
                    <h1 className='title_crs text-4xl font-semibold py-2' > KHỞI ĐẦU SỰ NGHIỆP CỦA BẠN</h1 >
                    <p className='text-2xl pb-2'>Trờ thành lập trình viên chuyên nghiệp tại CyberSoft</p>
                    <div className="btn__carousel">
                        <button className='btn_info mr-3'>Xem Khóa Học</button>
                        <button className='btn_info'>Tư vấn ngay về khóa học</button>
                    </div>
                    <div className="search">
                        <h1 className='search__title'>Tìm kiếm thêm thông tin về khóa học...</h1>
                        <div className="btn__search">
                            <input type="text" placeholder='Nhập từ khóa bạn quan tâm' />
                            <i className="icon fa fa-search" />
                        </div>
                    </div>
                </div >
            </div >
        </Fragment>
    )
}
