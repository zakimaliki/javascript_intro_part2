// var person = {
//     name: "zero",
//     age : 28,
//     address : {
//         province : "central java",
//         city : "Blora"
//     },
//     hobbies : ["membaca","menulis","mendengarkan"],
//     detail : function(){
//         return `Nama saya ${name}`; 
//     },
//     details : function() {
//         return "Nama saya"+" "+ name+"\n"+"Umur saya"+" "+ age;
//     },
//     location : function() {
//         return "Saya dari provinsi"+" "+address.province+"\n"+"Saya dari Kota"+" "+address.city;
//     },
//     hobi : function(){
//        const hobi = hobbies.map(temp => {return "Hobi saya" +" "+temp+"\n"})
//        return hobi;
//     } 
// };
// const {name, age, address, hobbies,detail, details, location, hobi} = person;
// console.log(details());






// var person = {
//     name: "zero",
//     age : 28,
//     address : {
//         province : "central java",
//         city : "Blora"
//     },
//     hobbies : ["membaca","menulis","mendengarkan"],
//     details : function() {
//         return `Nama saya ${this.name} \nUmur saya ${this.age}`;
//     },
//     location : function() {
//         return `Saya dari provinsi ${this.address.province} \nSaya dari Kota ${this.address.city}`;
//     },
//     hobi : function(){
//        const hobi = this.hobbies.map(Item => {return`Hobi saya ${Item} \n`})
//        return hobi;
//     } 
// };
// console.log(person.name);





// var person = {
//     name: "zero",
//     age : 28,
//     address : {
//         province : "central java",
//         city : "Blora"
//     },
//     hobbies : ["membaca","menulis","mendengarkan"],
//     details : function() {
//         return `Nama saya ${name} \nUmur saya ${age}`;
//     },
//     location : function() {
//         return `Saya dari provinsi ${address.province} \nSaya dari Kota ${address.city}`;
//     },
//     hobi : function(){
//        const hobi = hobbies.map(Item => {return`Hobi saya ${Item} \n`})
//        return hobi;
//     } 
// };
// const {name, age , address, hobbies, details, location, hobi} = person;
// console.log(...hobi());