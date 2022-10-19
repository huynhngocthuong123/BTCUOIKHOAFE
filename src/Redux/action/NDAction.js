import { createBrowserHistory } from '@remix-run/router';
import { Navigate, unstable_HistoryRouter } from 'react-router-dom';
import { history } from '../../App';
import { QLNDServices } from '../../Service/NDServices'
import { DANG_KY, DANG_NHAP } from "./Type/UserType";

export const DangKyAction = (thongTinND) => {
    return async (dispatch2) => {
        try {
            const result = await QLNDServices.dangKyND(thongTinND);
            if (result.data.statusCode == 200) {
                await dispatch2({
                    type: DANG_KY,
                    dataDK: result.data
                });
                alert('Đăng ký thành công')
            }
        } catch (error) {
            console.log(error.response.data.content)
            alert(`${error.response.data.content}`)
        }
    }
}


export const DangNhapAction = (thongTinND) => {
    return async (dispatch2) => {
        try {
            const result = await QLNDServices.dangNhapND(thongTinND);
            console.log(result)
            alert(`Đăng Nhập thành công`)
            await dispatch2({
                type: DANG_NHAP,
                dataDK: result.data
            });
            history.push('/')
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }
}