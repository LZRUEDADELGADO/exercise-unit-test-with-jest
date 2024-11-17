const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('suma 7 + 3 para obtener 10', () => {
    expect(sum(7, 3)).toBe(10);
});

test('convierte 10 euros a dólares', () => {
    expect(fromEuroToDollar(10)).toBeCloseTo(10.7);
});

test('convierte 10 dólares a yenes', () => {
    expect(fromDollarToYen(10)).toBeCloseTo(1462.62, 2); // Cambiar valor esperado y precisión
});

test('convierte 1000 yenes a libras', () => {
    expect(fromYenToPound(1000)).toBeCloseTo(5.56);
});
