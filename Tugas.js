// contoh soal persiapan
// filter
// const ages = [32, 33, 16, 40];
// function checkAdult(age) {
//     return age >= 18;
// }
// console.log(ages.filter(checkAdult))
// pop
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.pop());
// push
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi", "Lemon", "Pineapple");
// reduce
// const numbers = [175, 50, 25];
// 50 - 25
// 100 - 25
// console.log(numbers.reduce(myFunc));
// function myFunc(total, num) {
//   return total - num;
// }


// let data = {
//     id: 1,
//     name: "budi pratama",
//     gender: "female",
//     height: "165 cm",
//     educational: 
//     [
//         {
//         priode: "2013-2016",
//         school: "Kalam kudu High School",
//         major: "-"
//         }
//     ],
//     phone: {
//         primary : "0812312323",
//         secondary: "0082342343"
//     }   
// }    

// let newEducation = {
//     priode: "2016-2020",
//     school: "State University of Jakarta",
//     major: "Accountancy"
// }

// let dataOld = { nama: "zaki"}

// let dataNew = {...data, name:"zaki", gender:"male", phone:"08888888888"}

// console.log(dataNew)
// console.log(data.phone.secondary)

// const {primary, secondary} = data.phone;
// console.log(primary)
// console.log(secondary)

// console.log({...data,...newEducation});


// const discount = (qty, harga) => {
//     let total = qty * harga;
//     let potongan;
//     let diskon;
//     let subTotal;
//     console.log(`Total    : ${total}`);
//     if(total>60000){
//         potongan = total * 0.35;
//     }
//     if(potongan<50000){
//         console.log(`Potongan : ${diskon=potongan}`)
//     }else {
//         console.log(`Potongan : ${diskon=0}`)
//     }
//     return subTotal = `subtotal : ${total-diskon}`
// }
// console.log(discount(30, 1500))