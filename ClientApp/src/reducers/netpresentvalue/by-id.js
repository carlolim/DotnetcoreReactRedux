const initialState = {
    isLoading: false,
    lowerBoundDiscount: 0,
    upperBoundDiscount: 0,
    discountIncrement: 0,
    amount: 0,
    cashFlowInputs: [],
    result: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_SINGLE':
            return { ...state, isLoading: true };
        case 'DONE_REQUEST_SINGLE':
            return { ...state, ...action.payload, isLoading: false };
        default:
            return state
    }
}