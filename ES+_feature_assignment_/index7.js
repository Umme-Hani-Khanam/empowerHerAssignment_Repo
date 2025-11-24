const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4, 5]
const sum = (...nums) => nums.reduce((acc, n) => acc + n, 0);
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

const { name, address: { city, pin } } = user;

console.log(name, city, pin);
