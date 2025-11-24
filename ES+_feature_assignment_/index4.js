let profile={
    name:"hani",
    age:19,
    address:{
        city:"Gulbarga",
        zipcode:585014
    }
};
let updates={
    age:20,
    address:{
        zipcode:585102,
        country:"india"
    }
}
let merged={...profile,...updates,
    address:{
        ...profile.address,...updates.address
    }
};
console.log(merged);