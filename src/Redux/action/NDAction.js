import { createBrowserHistory } from '@remix-run/router';
import { Navigate, unstable_HistoryRouter, useNavigate } from 'react-router-dom';
import { history } from '../../App';
import { QLNDServices } from '../../Service/NDServices'
import { DANG_KY, DANG_NHAP } from "./Type/UserType";
export const DangKyAction = (thongTinND) => {
    // const navigate = useNavigate()
    return async (dispatch2) => {
        try {
            const result = await QLNDServices.dangKyND(thongTinND);
            console.log(result.status)
            if (result.status == 200) {
                await dispatch2({
                    type: DANG_KY,
                    dataDK: result.data
                });
            }
            // await navigate("/login")
        } catch (error) {
            console.log(error.response.data.content)
        }
    }
}
export const DangNhapAction = (thongTinND) => {
    return async (dispatch2) => {
        try {
            const result = await QLNDServices.dangNhapND(thongTinND);
            console.log(result)
            if (result.data.status == 200) {
                await dispatch2({
                    type: DANG_NHAP,
                    dataDK: result.data
                });
                await history.push("/")
            }
            // window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }
}