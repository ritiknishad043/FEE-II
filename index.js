// console.log("Hello World");
//let,var,const
// var a=1;
// var a=2;
// console.log(a);
// function s(){
//     var b=10;
// }
// console.log(b);
// if(true){
//     var c=5;
// }
// console.log(c);
// let a=10; //can be reassigned but not redeclared,block scoped
// a=11;
// console.log(a);
// if(true){
//     let d=20;
// }
// console.log(d);
// const a=5; //cannot be reassigned or redeclared,block scoped

// function sum(a,b){
//     return a+b;
//     console.log("Hello")
// }
// let ans=sum(2,3);
// console.log(ans);

// const a=(a,b)=>{
//     return a+b;
// }
// console.log(a(2,3));

// let a=[1,2,3,4,5,6,7,8,9]
// console.log(Math.max(...a));

// const a= new Array(1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,3,1,1,2,3,4,5,6,7,7,6,5,4,3,4,5,6,7,7,5,4,34,3,3,5,6,7,5,4,4,3,3,35,6,6,7);
// console.log(a); 
// const student={
//     name:"Ritik",
//     age:25,
//     address:"Hehe"
// };
// console.log(student)

const a={
    name:"ritik",
    city:"chandigarh"
}
console.log(Object.entries(a));
Object.keys(a).forEach((element,index)=>console.log(a[element]));

Object.keys(a).forEach((_,index)=>console.log(index)); // to only access the index

const {name}=a;
console.log(name); 