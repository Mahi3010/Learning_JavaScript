//Conversion to Number

let score = "33";

let valueInNumber = Number(score); //value of score is converting to Number

console.log(score)
console.log(valueInNumber)

console.log(typeof (score))         //String
console.log(typeof valueInNumber)   //Number


let age = "22BCA"
let ageInNumber = Number(age)

console.log(age)
console.log(ageInNumber)  //NaN

console.log(typeof age)             //String
console.log(typeof ageInNumber)    //Number


let isHappy = true;
let isHappyInNumber = Number(isHappy);
console.log(isHappyInNumber)           //1

let myName ="Mahi"
let myNameInNumber = Number(myName)
console.log(myNameInNumber)           //NaN

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


//Conversion to Boolean

let isLogged = 1;
let booleanIsLogged = Boolean(isLogged)
console.log(booleanIsLogged)

// 1 => true ; 0 => false
// "" =>false ; "Mahi" => true


//Conversion to String 
let stateNo = 466001

let stringStateNo = String(stateNo)
console.log(stringStateNo)
console.log(typeof stringStateNo) //string


// *******************************Operations************************
console.log(2+2)
console.log(5-5);
console.log(2**5); //2 to the power 5
console.log(2/6);
console.log(3%8);


console.log("1" + 2 + 2)  // 122 if string is first then whole treat as string 
console.log(1 + 2 + "2")  //32 if numbers are first then conversion can be done

let str1 = "hello"
let str2 = " Mahi"
console.log(str1 + str2);

console.log(+true)             //1          true => 1 
console.log(+"")               //0          empty return 0
