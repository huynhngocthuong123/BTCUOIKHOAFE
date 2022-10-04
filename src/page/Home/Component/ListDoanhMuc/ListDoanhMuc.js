import React, { Fragment, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./ListDoanhMuc.scss"
import { GetKhoaHocAction } from '../../../../Redux/action/ListKhoaHocAction'

export default function ListDoanhMuc() {
    let [doanhMuc, setDoanhMuc] = useState([])
    useEffect(() => {
        GetKhoaHocAction(setDoanhMuc)
    }, [])
    console.log(doanhMuc, "lấy thành công")
    const RenderListDM = () => {
        return doanhMuc.map((item, index) => {
            return <NavLink className="item_list" to={`/${item.maDanhMuc}`} key={index}>
                <div className="overflow_item">
                    <img src={`./img/imgListKH/${index + 1}.jpg`} alt="" />
                    <div className="text_content">
                        <h1>{item.tenDanhMuc}</h1>
                    </div>
                </div>
            </NavLink >
        })
    }
    return (
        <Fragment>
            <div className="list__dm">
                <h1 className='title-content text-center pt-10 pb-10'>DANH MỤC ĐÀO TẠO</h1>

                <div className='ListDM xl:container mx-auto grid grid-cols-6'>
                    {RenderListDM()}

                </div >
            </div>
        </Fragment>
    )
}
