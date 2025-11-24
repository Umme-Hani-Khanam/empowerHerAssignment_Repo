const people = [
  {
    name: "Alice",
    address: {
      city: "New York",
      street: { name: "Broadway", number: 123 }
    }
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 }
    }
  }
];

let result = people.map(({name:nameofperson, address: {city, street: { name: streetName } } }) =>
  `${nameofperson} lives in ${city} on ${streetName}`
);

console.log(result);
