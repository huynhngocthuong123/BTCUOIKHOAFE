import React, { Fragment, useEffect, useState } from 'react'
import { GetKhoaHocAction } from '../../../../Redux/action/ListKhoaHocAction'
import ItemListKhoaHoc from './ItemListKhoaHoc/ItemListKhoaHoc'
import "./ListKhoaHoc.scss"

export default function ListKhoaHoc() {
    let [khoaHoc, setKhoaHoc] = useState([]);
    let [showmore, setShowMore] = useState(8);
    const Slice = khoaHoc.slice(0, showmore)
    console.log(Slice, "thành công")
    useEffect(() => {
        GetKhoaHocAction(setKhoaHoc)
    }, [])
    console.log(khoaHoc)
    return (
        <div className='List_khoahoc xl:container mx-auto'>

            <h1 className='title-content text-center pb-9'>DOANH SÁCH KHÓA HỌC</h1>
            <div className="class_list grid grid-cols-4 gap-y-10">
                {Slice.map((khoaHoc, index) => {
                    return <div className="card" key={index}>
                        <ItemListKhoaHoc khoaHoc={khoaHoc} />
                    </div>
                })}
            </div>
            <div className="button_Showmore flex justify-center mt-3">
                <button className='btn_info mr-5' onClick={() => {
                    setShowMore(showmore + 4)
                }}>Show More</button>
                <button className='btn_info' onClick={() => {
                    setShowMore(8)
                }}>Show Less</button>
            </div>
        </div>

    )
}
