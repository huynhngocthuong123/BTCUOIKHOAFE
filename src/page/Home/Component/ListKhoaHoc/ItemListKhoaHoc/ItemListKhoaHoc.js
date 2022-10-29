import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { history } from '../../../../../App';
import Detail from '../../../../detailKH/Detail';
import { CHI_TIET_KH } from '../../../../../Redux/action/Type/KHTypes';

export default function ItemListKhoaHoc(props) {
    const dispatch = useDispatch()
    let [heart, setHeart] = useState(false);
    let { khoaHoc, key } = props
    return (
        <Fragment>
            <div className="card--top">
                <img src="./img/user.png" alt="" />
                <div className="top_content">
                    <h1>{khoaHoc.tenKhoaHoc}</h1>
                    <p>ngày tạo: {khoaHoc.ngayTao}</p>
                </div>
            </div>
            <div className="card--body" style={{ background: `url(${khoaHoc.hinhAnh}), url(https://anhdepbonphuong.com/wp-content/uploads/2016/12/hinh-nen-dep-cho-may-tinh-nature-wallpapers-nature-wallpaper-latest-beautiful-wallpapers-800x480.jpg)` }}>
                <img src={khoaHoc.hinhAnh} alt="" />
            </div>
            <div className="card--bottom">
                <h1>{khoaHoc.moTa}</h1>
            </div>
            <div className="button-icon">
                <div className="icon--left">
                    <i onClick={() => { setHeart(true) }} style={{ color: heart ? "red" : "" }} className="fa fa-heart mr-2"></i>
                    <i className="fa fa-share"></i>
                </div>
                <div className="icon--right">
                    <i className="fa fa-eye"></i>
                    <span> : {khoaHoc.luotXem} người quan tâm</span>
                </div>
            </div>
            <div className="card--hover">
                <div className="hover--top">
                    <h1 className='text-center'>{khoaHoc.danhMucKhoaHoc.tenDanhMucKhoaHoc}</h1>
                </div>
                <div className="hover--body">
                    <div className="body-content  flex justify-between px-5 py-1">
                        <div>
                            <i className="fa fa-user-cog "></i>

                            <p className='text-center'>{khoaHoc.nguoiTao.hoTen}</p>
                        </div>
                        <div>
                            <i className="fa fa-chalkboard-teacher"></i>
                            <p className='text-center'>{khoaHoc.nguoiTao.maLoaiNguoiDung}</p>
                        </div>
                        <div>
                            <i className="fa fa-user-graduate"></i>
                            <p className='text-center'>{khoaHoc.soLuongHocVien}</p>
                        </div>
                    </div>
                </div>
                <div className="hover--bottom flex justify-between px-3">
                    <Link to={{
                        pathname: '/detail',
                        search: `?detail=${khoaHoc.tenKhoaHoc}`,
                    }} onClick={() => {
                        console.log("khóa học truyền", khoaHoc)
                        dispatch({
                            type: CHI_TIET_KH,
                            dataId: khoaHoc.tenKhoaHoc
                        })

                    }}
                        className='btn_info'>Hiển thị chi tiết</Link>
                    <button onClick={() => {
                        console.log("khóa học truyền", khoaHoc)
                    }} className='btn_info okok'>Ghi Danh</button>
                </div>
            </div>
        </Fragment >
    )
}
