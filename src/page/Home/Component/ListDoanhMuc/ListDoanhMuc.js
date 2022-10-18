import React, { Fragment, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./ListDoanhMuc.scss"
import { GetDoanhMucAction, GetKhoaHocAction } from '../../../../Redux/action/ListKhoaHocAction'
import { useDispatch, useSelector } from 'react-redux'
import { FILTER_COURSE } from '../../../../Redux/action/typeAction/courseType'

export default function ListDoanhMuc() {
    const dispatch = useDispatch()
    let [doanhMuc, setDoanhMuc] = useState([])
    useEffect(() => {
        GetDoanhMucAction(setDoanhMuc)
    }, [])
    const RenderListDM = () => {
        return doanhMuc.map((item, index) => {
            return <NavLink onClick={() => {
                dispatch({
                    type: FILTER_COURSE,
                    key: item?.maDanhMuc
                })
            }} className="item_list" to={{
                pathname: '/course',
                search: `?course=${item.maDanhMuc}`,
            }} key={index}>
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
