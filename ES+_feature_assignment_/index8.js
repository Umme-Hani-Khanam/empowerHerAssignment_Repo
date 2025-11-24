// 1️⃣ Optional Chaining + Let/Var Scope
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y); // 20 (var = function scoped)
try {
  console.log(x); // Error (let = block scoped)
} catch (err) {
  console.log("x is not accessible here because let is block scoped");
}

const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile?.user?.details?.email);  // "test@mail.com"
console.log(profile?.user?.details?.phone); // undefined

// Example: prevents runtime error
const company = {};
console.log(company?.info?.address?.city); // undefined

// --------------------- Template Literals + Expressions
console.log(`5 + 7 = ${5 + 7}`);

const multiline = `
Line1
Line2
Line3
`;
console.log(multiline);

let firstName = "John";
let lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);

// --------------------- Arrow Functions & this
const square = n => n * n;
console.log(square(5));

const obj = {
  value: 50,
  test: () => console.log(this.value) // undefined (arrow doesn't bind "this")
};
obj.test();

const objFixed = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
objFixed.test();

// --------------------- Rest, Spread & Copying Objects
const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };

const a = { x: 1 };
const b = { y: 2 };
const mergedObj = { ...a, ...b };

const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(2, 10, 5));

// --------------------- Destructuring & Optional Chaining
const arr = [10, 20, 30];
const [a1, b1] = arr;

const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;

const info = {};
console.log(info?.user?.name); // undefined

// --------------------- Scoping (let/var/const)
for (var i = 0; i < 3; i++) {}
console.log(i); // 3 (var leaks)

for (let j = 0; j < 3; j++) {}
try {
  console.log(j); // error
} catch {
  console.log("j is not accessible because let is block scoped");
}
// const reason: prevents reassignment

// --------------------- Ternary Operator
let speed = kmph > 60 ? "Fast" : "Normal";

let age = 17;
console.log(age >= 18 ? "Adult" : "Minor");

let num = -5;
console.log(
  num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative"
);

// --------------------- Spread, Rest & Arrays
const nums = [1,2,3];
const numsUpdated = [...nums, 4, 5];

const arrA = ["x", "y"];
const arrB = ["z"];
const combined = [...arrA, ...arrB];

const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));

// --------------------- Object Destructuring & Shorthand
const user = { id: 101, status: "active" };
const { id, status } = user;

const role = "admin";
const newUser = { id, role };

const item = {
  type: "Book",
  show() {
    console.log("Item Listed");
  }
};

// --------------------- Template Literals + Date + Score
console.log(`Today is: ${new Date().toDateString()}`);

let score = 88;
console.log(`Hello ${firstName}, your score is ${score}/100`);

// --------------------- Arrow Shorthand
const add = (x, y) => x + y;
const isAdult = age => age >= 18;
const double = n => n * 2;

// --------------------- Spread Operator (More Practice)
const arrClone = [...nums];
const arrStart = [100, ...nums];
const mergedUser = { ...user, status: "inactive" };

// --------------------- Optional Chaining (More)
const usr = {
  name: "Alex",
  address: { city: "Bangalore" }
};
console.log(usr?.address?.city);
console.log(usr?.job?.title);

const nested = {};
console.log(nested?.level?.deep?.value);
