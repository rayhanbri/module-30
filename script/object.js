// what is obejct destructuring and array also
// Destructuring means extracting values from arrays or objects and assigning them to variables easily.

//what is entries ,

// Object.entries(obj) returns an array of key-value pairs of an object.


//what is seal 
// A sealed object in JavaScript is an object whose structure is locked:

// You cannot add new properties

// You cannot delete existing properties

// But you can modify the values of existing properties


// what is freeze 
// After freezing:
// You cannot add new properties
// You cannot delete existing properties
// You cannot modify existing property values
// It’s like locking the object completely.

// const person = { name: "Rayhan", age: 22 };

// const entries = Object.entries(person);
// console.log(entries);
// // ✅ [['name', 'Rayhan'], ['age', 22]]

// 

// const women = {
//   name : 'hena',
//   age : 10,
//   country : 'bd'
// }

// women.status = "married"; 


// console.log(women['name'])
// console.log(women['age'])
// console.log(women.age)

// const  {name,age,country} = women

// console.log(name,age,country)

// const bondhu =['hena','jena','monna'];

// const [,ladies,chele] = bondhu;
// console.log(ladies,chele)




// Object.seal(person);

// Object.freeze(person); 



// person.hight = 15;

// person.age = 20


// // console.log(Object.keys(person)) 
// // console.log(Object.values(person))  

// console.log(Object.entries(person));  