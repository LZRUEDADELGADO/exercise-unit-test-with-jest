let oneEuroIs = {
    "JPY": 156.5, // yen
    "USD": 1.07, // dollar
    "GBP": 0.87, // libra esterlina
};

const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs.USD;
};

const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    return parseFloat((valueInEuro * oneEuroIs.JPY).toFixed(2));
};

const fromYenToPound = function(valueInYen) {
   
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    return valueInEuro * oneEuroIs.GBP;
};

const sum = function(a, b) {
    return a + b;
};

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
