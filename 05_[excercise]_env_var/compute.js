var radius = process.env.diameter / 2;
var area = Math.pow(radius, 2) * Math.PI;
console.log(
    `Area of a ${radius} cm radius disk:
    ${area} cm²`
);

// docker build -t jsparam .
// docker run --rm jsimage
// docker run --rm -e diameter=20 jsimage