const initialState = {
    isLoading: false,
    result: {
        isSuccess: false, id: 0, message: ''
    },
    lowerBoundDiscount: 0,
    upperBoundDiscount: 0,
    discountIncrement: 0,
    amount: 0,
    cashFlows: [
        { period: 1, amount: 0},
        { period: 2, amount: 0},
    ]
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