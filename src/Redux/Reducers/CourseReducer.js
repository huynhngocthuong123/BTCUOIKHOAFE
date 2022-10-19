import { FILTER_COURSE, LAY_DS_KH } from "../action/typeAction/courseType"
const allCourse = {
    maDanhMuc: 'all',
    tenDanhMuc: 'Tất cả khóa học',
    value: 'all',
    key: 'all'
}
const initialState = {
    course: [],
    courseFilter: []
}
export const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case LAY_DS_KH:
            state.course = [...action.arrayCourse]
            state.courseFilter = [...action.arrayCourse]
            return { ...state }
        case FILTER_COURSE:
            if (action.key === "all") {
                state.courseFilter = state.course
            } else {
                const datafilter = state.course.filter((item) => item.danhMucKhoaHoc.maDanhMucKhoahoc === action.key)
                state.courseFilter = datafilter
            }
            return { ...state }
        default:
            return state
    }
}
