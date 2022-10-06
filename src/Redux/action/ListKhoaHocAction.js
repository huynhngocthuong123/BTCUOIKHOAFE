import { KHService } from "../../Service/KhoaHocService"

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
export const GetKhoaHocAction = async (setState) => {
    try {
        const result = await KHService.ListKhoaHoc()
        if (result.status === 200) {
            setState(result.data)
        }
    } catch (error) {
        console.log(error)
    }
}