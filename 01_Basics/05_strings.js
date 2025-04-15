let firstName = "Mahi"
let lastName = " Gour"
//console.log(firstName + lastName)

console.log(`Hello my name is ${firstName}${lastName} and I am from Sehore`)

let name = new String("Mahi_Gour")
console.log(name);
console.log(typeof name);
console.log(name[5]);
console.log(name.length);
console.log(name.toLowerCase());
console.log(name.charAt(2));
console.log(name.indexOf('a'));

const newName = name.substring(2,6) 
console.log(newName);

const anothername = name.slice(-6,4)
console.log(anothername);

let address = "    Sehore   "
console.log(address.trim());

const url = "mahi.gour88151@gmail.com"
console.log(url.replace('.' , '_'));

console.log(name.includes("Mahi"));
console.log(name.includes("Thakur"));


let newaddress = "Sehore_Pachama_Madhya_Pradesh"
console.log(newaddress.split('_'));
