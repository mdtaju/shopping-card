const numberParse = (number) => {
    return parseFloat(number)
}
const totalCalculation = () => {
    const phonePrice = document.getElementById("iPhone_price").innerText;
    const casePrice = document.getElementById("case_price").innerText;
    const currentSubtotal = numberParse(phonePrice) + numberParse(casePrice);
    const divideSubtotal = currentSubtotal / 100;
    const currentTax = divideSubtotal * 2;
    const currentTotal = currentSubtotal + currentTax;
    document.getElementById("subtotal").innerText = currentSubtotal;
    document.getElementById("tax").innerText = currentTax;
    document.getElementById("total").innerText = currentTotal;
}
const incrementPhonePrice = () => {
    const iPhoneValue = document.getElementById("iPhone_value").value;
    const updateValue = numberParse(iPhoneValue) + 1;
    document.getElementById("iPhone_value").value = updateValue;
    const updatePrice = 1219 * updateValue;
    document.getElementById("iPhone_price").innerText = updatePrice;
    totalCalculation();
}

const decrementPhonePrice = () => {
    console.log("decrement")
    const iPhoneValue = document.getElementById("iPhone_value").value;
    const parseIPhoneValue = numberParse(iPhoneValue);
    let decrementValue;
    if (parseIPhoneValue > 0) {
        decrementValue = parseIPhoneValue - 1;
    } else {
        decrementValue = 0;
    }
    document.getElementById("iPhone_value").value = decrementValue;
    const iPhonePrice = document.getElementById("iPhone_price").innerText;
    const parseIPhonePrice = numberParse(iPhonePrice);
    let currentPrice;
    if (parseIPhonePrice > 0) {
        console.log(typeof parseIPhonePrice)
        currentPrice = parseIPhonePrice - 1219;
    } else {
        currentPrice = 0;
    }
    document.getElementById("iPhone_price").innerText = currentPrice;
    totalCalculation()
}
const incrementCasePrice = () => {
    const caseValue = document.getElementById("case_value").value;
    const incrementValue = numberParse(caseValue) + 1;
    document.getElementById("case_value").value = incrementValue;
    const casePrice = document.getElementById("case_price").innerText;
    const incrementPrice = incrementValue * 59;
    document.getElementById("case_price").innerText = incrementPrice;
    totalCalculation()
}
const decrementCasePrice = () => {
    const caseValue = document.getElementById("case_value").value;
    const parseCaseValue = numberParse(caseValue);
    let currentValue;
    if (parseCaseValue > 0) {
        currentValue = parseCaseValue - 1;
    } else {
        currentValue = 0;
    }
    document.getElementById("case_value").value = currentValue;
    const casePrice = document.getElementById("case_price").innerText;
    const parseCasePrice = numberParse(casePrice);
    let currentCasePrice;
    if (parseCasePrice > 0) {
        currentCasePrice = parseCasePrice - 59;
    } else {
        currentCasePrice = 0;
    }
    document.getElementById("case_price").innerText = currentCasePrice;
    totalCalculation()
}