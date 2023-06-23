import logo from './logo.svg';
import './App.css';
import MyButton from '../MyButton';
import MyStyles from './normal.module.css';
import MyStyles2 from './article.module.css';
import Header from '../Header';
import React from 'react';

function App() {

// Tugas4







//=================================================================================
// Tugas3
//1
// const bajumerah = (str) => {
//   console.log('Baju merah : ', str.length);
// };

// const jumlah = (angka3, angka4) => angka3 + angka4;

// const hitung = (a, b) => {
//   let c = 5;
//   return (a + b) * c;
// };

// //2
// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   plus(otherPoint) {
//     const newX = this.x + otherPoint.x;
//     const newY = this.y + otherPoint.y;
//     return new Point(newX, newY);
//   }
// }

// //3
// class point {
//   constructor(titikx,titiky){
//     this.titikx = titikx;
//     this.titiky = titiky;
//   }

//   plus(a,b){
//     let sumx = this.titikx + a;
//     let sumy = this.titiky + b;
//     return `point baru : ( ${sumx} , ${sumy} )`;
//   }
// }

// const mypoint = new point(2,3);
// console.log(mypoint.plus(3,4));

// const invent = [
//   {type:'s', value : 5000},
//   {type:'a', value : 650},
//   {type:'g', value : 10},
//   {type:'c', value : 1200},
//   {type:'d', value : 77},

// ]

// let total = 0;
// invent.map((item) =>{
//   total = total + item.value;
// })
// console.log(total);

// //5
// const lastelement = (arr) => {
//   console.log(arr[arr.length-1]);
// }

// lastelement([1,2,3,4,5]);

// //6
// //6.1
// const companies = [
//   {id:1, name:"PT A", cat:"Finance1", start:1981, end: 2020},
//   {id:2, name:"PT B", cat:"Finance2", start:1992, end: 2020},
//   {id:3, name:"PT C", cat:"Finance3", start:2031, end: 2020},
//   {id:4, name:"PT D", cat:"Finance4", start:1931, end: 2020},
// ]

// companies.forEach(comp =>{
//   console.log(comp.name)
// })

// //6.2
// companies.forEach(comp => {
//   if(comp.start > 1987)
//   console.log(comp.name);
// });

// //6.3
// companies.forEach( comp => {
//   if(comp.cat === "Retail")
//     return `<div> ${comp.name} </div>`
// });

// const person = {
//   name : "Tono",
//   addr : {
//     street : "Jl. Tukad",
//     postcode : 1234
//   }
// };

// //6.4
// const findEnd = companies.map((value) => {
//   return value.end;
// })
// console.log(findEnd);

// //6.5
// const {addr: {street}} = person;
// const {addr: {postcode}} = person;
// console.log(street);
// console.log(postcode);

// // //7
// // //7.1
// const user = companies.find(item => item.id === 2);
// console.log(user.id);

// // //7.2
// // const mycategory = companies.map(comp =>{
// //   return comp.cat;
// // });
// // console.log{mycategory};

// // const filtercrop = companies.filter(item => item.start > 1931);
// // console.log(filterComp);

// const users = [
//   { name: 'John', city: 'denpasar', age: 25 },
//   { name: 'Jane', city: 'gianyar', age: 30 },
//   { name: 'Bob', city: 'surabaya', age: 35 },
//   { name: 'Alice', city: 'jakarta', age: 40 }
// ];

// const mycity = users.map(user => user.city);
// console.log('mycity', mycity);

// //7.3
// const userss = [
//   { id: 1, name: 'John', age: 25 },
//   { id: 2, name: 'Doni', age: 17 },
//   { id: 3, name: 'Jane', age: 30 },
//   { id: 4, name: 'Komang', age: 20 }
// ];

// const adults = userss.filter(user => user.age > 18);
// console.log('adults', adults);
//=============================================================================

//Tugas2
//1
// let cityName= "Denpasar";
// let number1 =200 ;
// let number2 =800 ;
// console.log(cityName, number1, number2);

// //2
// function sum (no1,no2) {
//   return no1+no2;
// }
// let sum1 = sum(number1, number2);

// console.log(sum(number1,number2));

// //3
// for (var i = 0; i < 3;i++) {
//   console.log('dony')
// }
// for (var i = 0; i < 3;i++) {
//   console.log('150')
// }

// function myClone(a) {
//   let number = ""
//   for (let i =0;i<3;i++) {
//     number += a+" ";
//   }
//   return number;
// }

// //4
// const cartItem = {
//   itemId: 1,
//   itemName: "Shoe Nike",
//   itemPrice: "$56",
//   itemQuantity: 2,
//   cartID:201
// };
// function showItemInfo() {
//   const { itemName, itemQuantity } = cartItem;
//   console.log("Item Name:", itemName);
//   console.log("Item Quantity:", itemQuantity);
// }

// //5
// let headName='This is Bootcamp Full Stack Web Developer By "Koding Akademi"'
// console.log(headName)

// //6
// const fruit= ["Jambu", "Mangga","Durian","Anggur"];
// fruit[3]="Salak"
// fruit[4]="Rambutan"
// console.log(fruit)
// console.log(`jumlah data dari fruit adalah ${fruit.length}`)

// //7
// function tambah (nilai1,nilai2) {
//   return nilai1 + nilai2
// }
// console.log(tambah(40,30))

// if (tambah < 100) {
//   console.log(true);
// }  
// else {
//   console.log(false);
// }

// //8
// const student = {
//   name: 'Wayan Suksme',
//   age:30,
//   hobbies:['baca','ngoding','tidur']
// }

// for (let x in student){
//   console.log(x,': ' + student[x]);
// }

// const hobbiesWithSpaces = student.hobbies.join(' ');

// console.log(hobbiesWithSpaces);

  return (
    <div className="App">
    
{/* Tugas 3 */}


{/* Tugas 2       */}
      {/* <div className="City Name">{cityName}</div>

      <div className="number 1">{number1}</div>

      <div className="number 2">{number2}</div>
      <div>{sum1}</div>

      <div>{student.name}</div>

      <div>
      <button onClick={showItemInfo}>Tampilkan List Item</button>
    </div>

    <div className="headname">{headName}</div>

    <div>
    {fruit.map((item, index) => (
      <div key={index}>{item}</div>
    ))}
  </div>
      
  <div>
    <div>{hobbiesWithSpaces}</div>
  </div> */}
      
{/* Tugas 1 */}
      {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div><img src={process.env.PUBLIC_URL + './logo-koding-akademi.jpg'} style={{ width: '350px', height: '100px', margin: '10px'  }} /></div>
      <div style={{ marginRight: '900px' }}><button className={MyStyles.normal}>Login</button></div>
      </div>
      <div style={{ textAlign: 'left', margin: '20px' }}>
      <h2>{process.env.REACT_APP_WEBSITE_NAME}</h2>
      <h2 style={{ fontStyle: 'italic', color: 'blue' }}>Copyright 2023</h2>
      </div> */}

    </div>
    
  );


}


export default App;
