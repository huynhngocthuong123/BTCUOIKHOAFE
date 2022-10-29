import { DANG_KY } from "../action/Type/UserType"

const initialState = {
    NDRegister: {}
}

export const NDReducer = (state = initialState, action) => {
    switch (action.type) {
        case DANG_KY:
            state.NDRegister = action.NDRegister
            return { ...state }
        default:
            return state
    }
}
