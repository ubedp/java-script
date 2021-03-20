// work();
// function work()
// {
//     console.log("function hoisting work here");
// }

// //function with default parameter

// var jspider=function (x="raja",y="rani")
// {
//     return {x,y};
// };

// console.log(jspider());

// //ex2

// function multiply(a, b=1)
// {
//     return a*b;
// }
// console.log(multiply(2));
// console.log(multiply(5));

// console.log("**********************************************************************");
// //arrow function syntax
// //arrow function only work for ananomous and expression function

// // () => {
// //     //code...........
// // }

// //normal function
// let normalfunction=function(){
//     console.log("i am normal function");
// }
// normalfunction();

// //convert to normal function to arrow function

// let arrowfunction = () =>{
//     console.log("i am arrow function 🏹");
// }
// console.log(arrowfunction());

// console.log("*************************************************************************");

// //arrow function its not working
// // qspider() =>{
//     // console.log("yes i have arrow but its not use");
// // }
// // qspider();//Malformed arrow function parameter list

// console.log("**************************************************************************");
// //normal function

// let x=function()
// {
//     return "i am x";
// }
// console.log(x());

// //converted to normal function to arrow function

// console.log("------------------arrow started here--------------------------");
// // one line body remove curly braces and return keyword
// let y= () => "i am y";
//  console.log(y());// i amy

//  //in arrow function no parameter  or without parameter remove paranthesis () and apply or call underscore_
//  let z=_ => 'i am z'
//  console.log(z());
//  //------------------------------
//  //we can use var
//  let b=name => name;
//  console.log(b('ubed'));

//  //normal function with multiple values(array)
//  console.log("normal function with multiple values(array)");

//  let normalfunctionwitharray=function(x,y){
//      return ["shubam students","dinesh student","madhusir student"];
//  };

//  console.log(normalfunctionwitharray());

//  console.log("***************************************************************");
// //arrow function with array
//  let arrowfunctionwitharray=(x,y) => [x,y]
//  console.log(arrowfunctionwitharray("ubed","patait"));

//  //normal function with object

//  let normalfunctionobject=function(name,salary)
//  {

//    return{name,salary}

//  }

//  console.log(normalfunctionobject("xyz",598769));

//  //arrow function with object

//  let arrowfunctionobject= (name,sal) => ({ name, sal})
//  console.log(arrowfunctionobject("ubd",43687));


//  //callback fuction
//  function child(){
//      console.log("i am child function");
//  }

//  function parent(callback){
//      return callback();
     
//  }
//  console.log(parent(child));


//  //call back function

// //  let add= (a,b) => a+b;

// //  let multiply =(x,y) => a*b;

// //  function calculate(num1,num2,callback){
// //      return callback(num1,num2)
// //  }
// //  console.log(calculate(num1,num2,multiply));
     
 

// //

// function carobject(carname){
//     return carname();

// }

// carobject(function(){
//     console.log("i am chombu car");
// });


//imp

let add=(a,b) => a+b;
let multiply=(x,y) => x*y;

function calculate(num1,num2,callback){
    return callback(num1,num2);
}

console.log(calculate(12,34,add));

console.log(calculate(12,34,multiply));

//closure imp

var outertext="its outer text its global scope"

function outerblock()
{
    var innertext= "ites outer block inner text"
    function innerblock(){
        var x="its inerrblock variable";
        console.log(outertext);
        console.log(innertext);
        console.log(x);
    }

innerblock();


}
outerblock();
 


//constructor function

function employee(emp_name,emp_id,emp_salary,emp_designation)
{
   this.emp_name=emp_name;
   this.emp_id=emp_id;
   this.emp_salary=emp_salary;
   this.emp_designation=emp_designation;
}

var res= new employee("ubed",1,40000,"java developer");

console.log(res);

var res1= new employee("ubd",2,50000,"jsp developer");
console.log(res1);