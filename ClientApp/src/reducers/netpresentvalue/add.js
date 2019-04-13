const initialState = {
    isLoading: false,
    result: {
        isSuccess: false, id: 0, message: ''
    },
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_ADD':
            return { ...state, isLoading: true };
        case 'DONE_REQUEST_ADD':
            return { ...state, isLoading: false, result: action.payload };
        default:
            return state
    }
}