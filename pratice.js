//ananomous
// function()
// {
//     console.log("hello");//error function not define
// }

//ananomus function is use declare a variable and value//use expressin function
let jspider=function()
{
    console.log("hello");
};
jspider();


//IIFE(immediate invoke function expression)
(function(){

console.log();

})();


//ex2 IIFE all invoke at once

(function(){
var $="jquery";
console.log($);

})();

(function(){
    var $="react";
    console.log($);
    
    })();


    (function(){
        var $="angular";
        console.log($);
        
        })();


   
  console.log("**********************************************************");
//using let //traditional
  (function(){
    let $="jquery";
    console.log($);
    
    })();
    
    (function(){
        let $="react";
        console.log($);
        
        })();
    
    
        (function(){
            let $="angular";
            console.log($);
            
            })();

console.log("***********************************************************************");

//function declaration(named function)

function jspdr(){
    console.log("sdnfijkjs");
}//called function

jspdr();

console.log("************************************************************************");

//function with parameter

function funwithpara(emp_name,empid,emp_sal)
{
    return {emp_name,empid,emp_sal};
}
 var emp1=funwithpara("ubed",34,30000);
 console.log(emp1);

 var emp2=funwithpara("abd",37,40000);
 console.log(emp2);

 console.log("************************************************************************");

 //funti with passing 1 pramater and multiple value

 function user(name)
 {
     return name;

 }
console.log(user("arif",20000,"java"));//it will print only arif rest of undefine

console.log("*************************************************************************");

//arguments its only for normal function

function user1(){

    return arguments;
}
console.log(user1("ubd",40000,"java developer"));

console.log("****************************************************************************");

//argument not available for arrow function

// let arrowfunction= () =>{
//     return arguments;//not define because aguments only for normal function

// }
// console.log(arrowfunction("shashi",20,"testyantra"));

console.log("**********************************************************************************");

//rest parameter

function course(...rest){
    return rest;
}
console.log(course("ubdullah",20,"java trainer",2000));

console.log("*************************************************************************************");

//

let ax=( function(){
    console.log("message print");
})();

console.log("*****************************************************************************************");

//variable hoisting

console.log(ab);
var ab=10; //undefine

// console.log(as);
// let as="ubed" //Uncaught ReferenceError: Cannot access 'as' before initialization

console.log("***************************************************************************************");

//function hoisting
// X(); //calling function expression is not support function hoisting
// //cannot access x before initialization 
// let x=function()
// {
//     console.log("i am x");
// };

console.log("***************************************************************************************");
//functiong hoisting ............its work here......

Work();
function work(){
    console.log("function hoisting is working here");
}






  







    




