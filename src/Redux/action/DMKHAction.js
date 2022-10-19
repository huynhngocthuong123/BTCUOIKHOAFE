import React from 'react'
import { GET_DMKH } from './Type/KHTypes'
import { KHService } from "../../Service/KhoaHocService";


export const LayDMKH = () => {
    return async (dispatch2) => {
        try {
            const result = await KHService.ListDanhMuc();
            // console.log(result.data)
            if (result.status === 200) {
                let action = {
                    type: GET_DMKH,
                    dmkh: result.data,
                }
                dispatch2(action);
            }
        } catch (error) {
            console.log(error);
        }
    }
}
