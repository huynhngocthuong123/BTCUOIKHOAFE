import { KHService } from "../../Service/KhoaHocService"
import { LAY_DS_KH } from "./typeAction/courseType"

export const GetDoanhMucAction = async (setState) => {
    try {
        const result = await KHService.ListDanhMuc()
        if (result.status === 200) {
            setState(result.data)
        }
    } catch (error) {
        console.log(error)
    }
}
export const GetKhoaHocAction = () => {
    return async (dispatch) => {
        try {
            const result = await KHService.ListKhoaHoc()
            if (result.status === 200) {
                await dispatch({
                    type: LAY_DS_KH,
                    arrayCourse: result.data,
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}