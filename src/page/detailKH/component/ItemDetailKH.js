import React from 'react'
import "./ItemDetailKH.scss"
export default function ItemDetailKH(props) {
    let { detailKH } = props
    // console.log(detailKH[0].tenKhoaHoc, "props detail")
    let { tenKhoaHoc, ngayTao, danhMucKhoaHoc, hinhAnh, luotXem, maKhoaHoc, moTa, nguoiTao, soLuongHocVien } = detailKH[0]
    return (
        <div className="detail-kh">
            <div className="item-title flex justify-around">
                <h1>Khóa học: {tenKhoaHoc}</h1>
                <p>Ngày tạo: {ngayTao}</p>
            </div>
            <div className='item-content flex justify-center'>
                <div className="img-product">
                    <img src={hinhAnh} alt="" />
                </div>
                <div className="info-product">
                    <div className="top-product">
                        <div className="top-teacher flex justify-start">
                            <h1>Người tạo: {nguoiTao.hoTen}</h1>
                            <h1 className='ml-5'>Chức vụ: {nguoiTao.tenLoaiNguoiDung}</h1>
                        </div>
                        <h1>Doanh Mục: {danhMucKhoaHoc.tenDanhMucKhoaHoc}</h1>
                    </div>
                    <div className="body-product">
                        <button className='bg-orange-300'>Ghi danh</button>
                        <p className='text-center text-red-400'>Ghi danh sớm nhất để hưởng các ưu đãi từ elearning</p>
                    </div>
                    <div className="bottom-product">
                        <h6>{moTa}</h6>
                        <ul>
                            <li>{maKhoaHoc}</li>
                            <li>số lược quan tâm khóa học : {luotXem}</li>
                            <li>số lượng học viên đã ghi danh: {soLuongHocVien}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
