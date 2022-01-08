const initialState = {
    list: []
}

const mainReducer = (state = initialState,action) => {
    switch (action.type) {
        case "Create_Account":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        default:
            return state
    }
}

export default mainReducer