// what is keys object 
//name of the property 

// How to get value from object through array? 

const person = {
  name : 'hena',
  age : 10,
  country : 'bd'
}

// console.log(person[name])

// for (let key in person){
//   // console.log(person[key]) 
//   console.log(`key: ${key}  value:${person[key]}`)
// }


// destructuring ------------------
// const {name,age} = person;

// console.log(name,age);

// console.log(Object.entries(person));

// for(let key of Object.entries(person)){
//   console.log(key[0])
// }



// for (let [key,value] of Object.entries(person)){
//   console.log(`key:${key}  value:${value}`)
// }


// Array destructurin ---------------

// const friend = ['rayhan','arman'];

// const [,o]=friend;

// console.log(o)



// for(let [o,i] of Object.entries(person)){

//   // console.log(o);
//   // console.log(i);
//   console.log(`key ${o}  value ${i}`)

// }




// swap the value ---------------


// const ne = (a,b) =>{
//    return [a,b] = [b,a];
// }

// console.log(ne(12,3))