let rectangle = (num1, num2) => {
  return num1 * num2;
};
let triangle = (num1, num2) => {
  return (num1 / 2) * num2;
};
let circle = (num) => {
  return num ** 2 * Math.PI;
};

console.log(rectangle(10, 5));
console.log(triangle(4, 3));
console.log(circle(5));
