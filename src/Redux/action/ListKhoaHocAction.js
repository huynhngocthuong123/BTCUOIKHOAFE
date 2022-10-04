import { KHService } from "../../Service/KhoaHocService"

export const GetKhoaHocAction = async (setState) => {
    try {
        const result = await KHService.ListDanhMuc()
        if (result.status === 200) {
            setState(result.data)
        }
    } catch (error) {
        console.log(error)
    }
}
