const initialState = {
    isLoading: false,
    items: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_ALL':
            return { ...state, isLoading: true };
        case 'DONE_REQUEST_ALL':
            return { ...state, isLoading: false, items: action.payload };
        default:
            return state
    }
}