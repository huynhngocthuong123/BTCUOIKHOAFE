import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { GetDoanhMucAction, GetKhoaHocAction } from '../../Redux/action/ListKhoaHocAction'
import { FILTER_COURSE } from '../../Redux/action/typeAction/courseType'
import ItemListKhoaHoc from '../Home/Component/ListKhoaHoc/ItemListKhoaHoc/ItemListKhoaHoc'
import CarouselCourse from './Component/CarouselCourse'
import "./Course.scss"
export default function Course() {
    const dispatch = useDispatch()
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("course"))
    let { courseFilter } = useSelector((state) => state.courseReducer)
    console.log(courseFilter, "danh sách lọc")
    const allCourse = {
        maDanhMuc: 'all',
        tenDanhMuc: 'Tất cả khóa học',
    }
    let [category, setCategory] = useState([])
    let categoryAdd = [allCourse, ...category]
    useEffect(() => {
        GetDoanhMucAction(setCategory)
    }, [])
    const renderKhoaHoc = () => {
        return courseFilter.map((khoaHoc, index) => {
            <ItemListKhoaHoc />
        })
    }
    return (
        <Fragment>
            <CarouselCourse />
            <div className="search">

                <h1>tìm kiếm</h1>
                <input type="text" />
            </div>
            <div className='course flex xl:container mx-auto'>
                <div className=" flex flex-col">
                    <h1 className='text-center'>Tìm kiếm theo mục</h1>
                    <div className="sidebar btn_filter">
                        {categoryAdd.map((item, index) => {
                            const isActive = (item) => {
                                return item?.maDanhMuc === searchParams.get("course")
                            }
                            return <div key={index}>
                                <button className={`btn_course ${isActive(item) ? 'active' : null}`} onClick={() => {
                                    setSearchParams({ course: `${item.maDanhMuc}` })
                                    dispatch({
                                        type: FILTER_COURSE,
                                        key: item?.maDanhMuc
                                    })

                                }} >{item.tenDanhMuc}</button>
                            </div>
                        })}

                    </div>
                </div>
                <div className="tab-content ml-10 p-8 grid grid-cols-3 gap-3">
                    {courseFilter.map((khoaHoc, index) => {
                        return <div className="card" key={index}>
                            <ItemListKhoaHoc khoaHoc={khoaHoc} />
                        </div>
                    })}
                </div>
            </div>
        </Fragment >
    )
}
