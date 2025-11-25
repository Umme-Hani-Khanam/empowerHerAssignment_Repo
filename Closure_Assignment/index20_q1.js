//Question1 :
 function createCounter()
 {let count=0;//outer function variable 
    function increment()
    { //inner function remembers the outer function variables
    // even after outer function execution has been finished
        count++;//increments the count value
        console.log(`Current count: ${count} `);

    }
    function decrement()
    {//inner function remembers the outer function variables
    // even after outer function execution has been finished
        count--;//decrements count value
        console.log(`Current count: ${count} `) ;   
    }
    return {increment,decrement};//returns increment and decrement function
 }
 const counter=createCounter();
 counter.increment();// Output: Current count: 1
 counter.increment();// Output: Current count: 2
 counter.decrement();// Output: Current count: 1

 const counter2=createCounter();//this is a different counter and hence has different values of count 
 counter2.increment();//different execution context ,so count will be different for this function
 counter2.decrement();
 counter2();
