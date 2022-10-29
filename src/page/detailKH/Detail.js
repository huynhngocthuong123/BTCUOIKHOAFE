import React, { useEffect } from 'react'
import ItemDetailKH from './component/ItemDetailKH'
import { useParams, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { courseReducer } from '../../Redux/Reducers/CourseReducer'
import "./Detail.scss"


export default function Detail(props) {
    const id = useParams().id
    console.log(id)
    let { detailCourse } = useSelector((state) => state.courseReducer)
    console.log(detailCourse, "lấy xuống")
    useEffect(() => {
    }, [])
    return (
        <div>
            <div className="carousel-content">
                <img src="https://t3.ftcdn.net/jpg/04/00/77/64/360_F_400776431_5JxdDYRr1mn9yISiUFMPcLtLp3zt6NA1.jpg" alt="" />
            </div>
            <div className='xl:container mx-auto'>
                <ItemDetailKH detailKH={detailCourse} />
            </div>
        </div>
    )
}
