// Contenido de app.js 
// Declaramos una función con el nombre exacto "formEuroToDollar"
// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

const oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87, // libra esterlina
};

const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs["USD"]; // Convertir dólares a euros
    const yen = euros * oneEuroIs["JPY"]; // Convertir euros a yenes
    return yen;
};

const fromEuroToDollar = (euros) => {
    const dollars = euros * oneEuroIs["USD"]; // Convertir euros a dólares
    return dollars;
};

const fromYenToPound = (yen) => {
    const euros = yen / oneEuroIs["JPY"]; // Convertir yenes a euros
    const pounds = euros * oneEuroIs["GBP"]; // Convertir euros a libras
    return pounds;
};



// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };