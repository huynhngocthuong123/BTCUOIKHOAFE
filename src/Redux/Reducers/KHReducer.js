import { GET_CHITIETKH, GET_KH } from "../action/Type/KHTypes"

const initialState = {
    arrayKH: [],
    thongTinKH: {},
}

export const KHReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_KH:
            state.arrayKH = action.arrayKH;
            return { ...state }
        case GET_CHITIETKH:
            state.thongTinKH = action.thongTinKH;
            return { ...state }
        default:
            return state
    }
}
