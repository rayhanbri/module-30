// What is es6 

// ES6 stands for ECMAScript 6, also officially known as ECMAScript 2015.
// It’s a major update to JavaScript that added many new features and modern syntax improvements.

// | Feature            | Description                        |
// | ------------------ | ---------------------------------- |
// | let & const        | Block-scoped variable declarations |
// | Arrow Functions    | Shorter function syntax            |
// | Template Literals  | String interpolation               |
// | Default Parameters | Default function values            |
// | Destructuring      | Extract data from arrays/objects   |
// | Spread/Rest        | Expand or collect elements         |
// | Classes            | Object-oriented programming        |
// | Modules            | Import/export code                 |
// | Promises           | Handle asynchronous operations     |
// | Enhanced Objects   | Shorthand for object creation      |


// what is spread operator ? 

// The spread operator (...) in JavaScript is used to expand (spread out) elements of an array, object, or iterable into individual elements.

//how delete and element from an object ?

// A property is a named value that belongs to an object.
// Each property has a name (key) and a value.

// what is elements ? 
// Array → contains elements (values stored by index).


// We don’t use var in ES6 because:

// It’s not block-scoped

// It allows redeclaration

// It causes hoisting bugs

// It pollutes the global scope

// what is default parameter 
// You can assign a default value to a function parameter —
// that will be used if no argument is passed (or the argument is undefined).


// what it will do ? 
// let a = 12, b = 3;
// [a, b] = [b, a];



// const nayikas=['mousumi' , 'popy' ,'shabnur', 'purnima' ]

// const array2 = [...nayikas,"hero alom"]

// const array3=(...nayikas)

// console.log(array2)

const mobile = {
    model : 'smasung',
    name : 23
}

// how delete property from object 

delete mobile.model

console.log(mobile)

// value of it 
// const obj = { foo: 1 };
// obj.bar = 2;

// console.log(obj)




// console.log(name)
// var name = 'rayhan'

//why we don't use var in es6

// function sum (num1,num2){
//   const result = num1 + num2;
//   console.log(result);
// }

// console.log(sum.length)

// const  add
//  = sum(10);

// //  output NaN ;



// what is default parameter 
// function sum (num1 = 0,num2 =0){
//   // default value 
//   const result = num1 + num2;
//   console.log(result);
// }

// const  add
//  = sum(10);

// //  output 10 ;


// গুন করতে হলে  ১ দিতে হবে ,নইলে ০ আসবে 

// function sum (num1 = 1,num2 =1){
//   // default value 
//   const result = num1 * num2;
//   console.log(result);
// }

// const  add
//  = sum(10);

// //  output 10 ;