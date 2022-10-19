import { GET_DMKH } from "../action/Type/KHTypes"

const initialState = {
    dmkh: [],
}

export const DMKHReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DMKH:
            state.dmkh = action.dmkh;
            return { ...state }

        default:
            return state
    }
}
