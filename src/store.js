const initialState = {
    texts: [],
    text: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TEXTS":
            return { ...state, texts: action.payload };
        case "GET_TEXT":
            return { ...state, text: action.payload };
        default:
            return state;
    }
}

export default reducer;