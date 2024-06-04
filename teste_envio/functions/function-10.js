function calculateCircleArea(ray) {
    const area = Math.PI * Math.pow(ray, 2);
    return area;
}

const ray = 5;
const areaOfCirculo = calculateCircleArea(ray);
console.log("A área do círculo é:", areaOfCirculo);

module.exports = calculateCircleArea;