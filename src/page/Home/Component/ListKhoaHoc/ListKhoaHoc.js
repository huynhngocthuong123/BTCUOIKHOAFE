import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { GetKhoaHocAction } from '../../../../Redux/action/ListKhoaHocAction'
import ItemListKhoaHoc from './ItemListKhoaHoc/ItemListKhoaHoc'
import "./ListKhoaHoc.scss"
import courseReducer from '../../../../Redux/Reducers/CourseReducer'

export default function ListKhoaHoc() {
    const dispatch = useDispatch()
    const { course } = useSelector((state) => state.courseReducer)
    let [showmore, setShowMore] = useState(8);
    const sliceCourse = course.slice(0, showmore)
    useEffect(() => {
        dispatch(GetKhoaHocAction())
    }, [])

    return (
        <div className='List_khoahoc xl:container mx-auto'>
            <h1 className='title-content text-center pb-9'>DOANH SÁCH KHÓA HỌC</h1>
            <div className="class_list grid grid-cols-4 gap-y-10">
                {sliceCourse.map((khoaHoc, index) => {
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
