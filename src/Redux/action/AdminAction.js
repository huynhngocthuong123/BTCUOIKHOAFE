import { KHService } from "../../Service/KhoaHocService";
import './Type/KHTypes'
import { GET_CHITIETKH, GET_KH } from "./Type/KHTypes";
// import Swal from 'sweetalert2/dist/sweetalert2.js'
export const LayKhoaHocAction = () => {
    return async (dispatch2) => {
        try {
            const result = await KHService.ListKhoaHoc();
            // console.log(result.data)
            if (result.status === 200) {
                let action = {
                    type: GET_KH,
                    arrayKH: result.data,
                }
                dispatch2(action);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const ThemKhoaHocAction = (addcourse) => {
    return async (dispatch2) => {
        try {
            const result = await KHService.themKhoaHoc(addcourse);
            console.log('result', result);
            // await Swal.fire({
            //     position: 'top-center',
            //     icon: 'success',
            //     title: 'Bạn đã đăng ký thành công',
            //     showConfirmButton: false,
            //     timer: 1500
            // });
        } catch (error) {
            console.log(error)
        }
    }
}

export const layThongTinKHAction = (maKhoaHoc) => {
    return async (dispatch2) => {
        try {
            const result = await KHService.layThongTinKhoaHoc(maKhoaHoc);
            console.log('result', result.data);
            dispatch2({
                type: GET_CHITIETKH,
                thongTinKH: result.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const capNhatKHAction = (updateCourse) => {
    return async (dispatch2) => {
        try {
            const result = await KHService.CapNhatKH(updateCourse);
            alert('thành công')
            console.log(result)
        } catch (error) {
            alert('thất bại')
            console.log(error.response?.data)
        }
    }
}