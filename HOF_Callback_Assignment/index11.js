const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 },
];

const productNames=products.map((value)=>{
    return value.name; }
);

products.forEach((element)=> {
    if(element.price>50)
    {
        console.log(`${element.name} is above 50`)
    }
    else
    {
        console.log(`${element.name} is below 50`)
    }
});
