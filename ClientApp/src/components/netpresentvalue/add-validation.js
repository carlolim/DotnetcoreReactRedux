export const validate = (inputs) => {
    let errors = {
        hasError: false,
        lowerBoundDiscount: false,
        upperBoundDiscount: false,
        discountIncrement: false,
        amount: false,
        cashFlows: false,
    }

    if (inputs.lowerBoundDiscount === '' || isNaN(inputs.lowerBoundDiscount) || inputs.lowerBoundDiscount === '0') {
        errors.lowerBoundDiscount = true;
        errors.hasError = true;
    }
    if (inputs.upperBoundDiscount === '' || isNaN(inputs.upperBoundDiscount) || inputs.upperBoundDiscount === '0') {
        errors.upperBoundDiscount = true;
        errors.hasError = true;
    }
    if (inputs.discountIncrement === '' || isNaN(inputs.discountIncrement) || inputs.discountIncrement === '0') {
        errors.discountIncrement = true;
        errors.hasError = true;
    }
    if (inputs.amount === '' || isNaN(inputs.amount) || inputs.amount === '0') {
        errors.amount = true;
        errors.hasError = true;
    }

    return errors;
}