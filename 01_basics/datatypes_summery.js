// primitive data types

// 7 types : String, Number, Booblean, Null, Undefinded, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
//console.log( id === anotherId );

const bigNumber = 26363474859596968674848443n
//console.log(typeof bigNumber);

// Reference ( Non Primitive ) data types

// Array, Objects, Functions

// Array example- array badi bracet me hota hai

const heros = ["shaktimaan", "naagraj", "doga" ]

// objects - object data type { madhyam bracet } me likha jata hai, aur = ke badle : likha jata hai value batane ke liye, shayad. isko variable me bhi store kar sakte hain

let myobj = {
    name: "hitesh",
    age: 22,

}

//console.log(heros)


// Functions 

// memory- stack memory - primitive type data me use hoti hai jiski copy milti hai
// heap memory- non primitive type data me use hoti hai, iska reference milta hai, original copy me change hoti hai universaly sabke liye


//ex- primitive data types jisme stack memory use hoti hai

let myYoutubeName = "hiteshchoudharydotcom"
let anotherName = "chaiaurcode"
console.log(anotherName);
console.log(myYoutubeName);

// non-primitive type yani reference type jisme heap memory use hoti hai

//(note- agar object me kisi value ko likh diya jata hai to usko pure code me kahi phir object.value name se use kiya ja sakta hai bina us object me ghuse hi)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"

}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

