// alert("this is my program");
// // single line comment
// alert(4+9);

// console.log("you cannot view this content in normal browser");


// >>>>>>>>>>>>>>>>>VARIABLES------------------------------------------------------------------

// let name="saran";
// var msg="my name is "+ name+"now only i am learning javascript";
// alert(name);
// alert(msg);
// console.log(msg);


// >>>>>>>>>>>>>>>>>simple examples-----------------------------------------------------------

// let number1=45;
// let number2=67
// let rs=number1+number2;
// console.log(rs);


/*
   rules to create variable names-----------------------------------------------
   1.no keywords are not allowed as variable name
   2.its is case sensitive
   3.white space,underscore are not allowed
   4.give variables as meaningfull name because then only you will easily identify
   5.should not start with number

*/
/*
//>>>>>>>>>>>>>>>>>>>>>> CONSTANT keyword is used to fix the varaiable name-----------------------------

const name="saran";
console.log(name);

//>>>>>>>>>>>>>>>>> DATA TYPE-----------------------------------------------------------------------
/*
PRIMITIVE DATA TYPE: number,string,undefined,boolean,null
*/
// let name1="saran";
// let age=20;
// let isYoung=true;
// let saran=undefined;
// let sanjith=null;


//>>>>>>>>>>>>>>>>>>>>>>OBJECT----------------------------------------------------------------------------

// let person={
//     name:"saran",
//     gender:"male",
//     age:20,
//     sibilings:{
//         brother:"chandru",
//         sister:"saranya"
//     }
// }

// console.log(person.age);
// // console.log(person.sibilings.sister);

// >>>>>>>>>>>>>>>>>>ARRAY----------------------------------------------------------------------------

// let array=["saran",23,"sanjith",56];
// array[6]="neymar";
// console.log(array.length);
// typeof(array);


//>>>>>>>>>>>>>>>FUNCTIONS---------------------------------------------------------------------

// function add(number1,number2){
//     console.log(number1+number2);
// }
// add(34,45)

//>>>>>>>>>>>>>>>>OPERATORS--------------------------------------------------------------------

// console.log("Anbu">"Arun"); // A-A  N-R
// console.log("1"< 5);  // 1<5
// console.log("2">"6");  // 2>6
// console.log(true==1);  // 1  -  0

//>>>>>>>>>>>>>>STRICTY EQUALITY OPERATOR------[data+value] ===============================

// console.log(1===1);  //true
// console.log("1"===1); //false
 
//LOSELY EQUALITY OPERATOR ==============================================

// console.log(1=="1");  // ------ 1 = 1 trur[[[[[important]]]]]
// console.log(1==1);

//TERNARY OPERATOR---------------------------------------------------------

// let age=24;
// let type=(age>24)?"adult ticket":"child ticket";
// console.log(type);

//LOGICAL OPERATOR---------------------------------------------------------

// let highIncome=true;
// let civilScore=true;
// let income=false;
// console.log(highIncome && civilScore);
// console.log(income || civilScore);

//NON BOOLEAN VALUES-----------------------------------------------------

/*
Falsy(false)
undefined
null
0
false
' ' --> " "
NaN
*/

//>>>>>>>>>>>>>>>Truty --------Anything that not is falsy->>> truty //============

// false ||"Anbu"
// false || 3

// let userColor="red";
// let defaultColor="blue";
// let currentColor = userColor || defaultColor
// console.log("selected Color: "+currentColor);

// let userColor1=undefined;
// let defaultColor1="blue";
// let currentColor1 = userColor1 || defaultColor1
// // console.log("selected Color: "+currentColor1);

// BITWISE OPERATOR-------------------------------------------

// const readPermission=4;                // 0000 0100
// const writePermission=2;               // 0000 0010
// const updatePermission=1;              // 0000 0110 -->> 6
// let myPermisssion= readPermission | writePermission;
// console.log(myPermisssion);

//OPERATOR PRECEDENCE-->>> BODMAS----------------------------

// >>>>>>>>>>>>>>IF-ELSE STATEMENTS----------------------------------------

// let weather="cold";
// if(weather=="hot")
// console.log("condition:");
// else
// console.log("weather is cold");

// if(1)
// {
//   document.write("hello world");
// }

// let hour=21;
// let hour=new Date().getHours(); //========// get the hours as input=====================
// if(hour<=12 && hour>=0)
// console.log("good morning");
// else if(hour>12 && hour<=18)
// console.log("good afternoon");
// else
// console.log("good night");


// SWITCH CASE--------------------------------------------------------
 // let grade="s";
// let grade=prompt("enter the grade");

// switch (grade) {
//   case "o":
//     console.log("ur excellent student");
    

//     case "s":
//     case "a":
//       console.log("ur good student");
    
//          case "5":
//           console.log("poda joker");
//           break;
//            //==============// output: ur keep trying============================
//         case "c":
//           console.log("ur keep trying student"); 
//           break;
      
            
//   default:
//     console.log("ur are worst student");
  
    
// }

// >>>>>>>>>>>>>>>>>>>FOR LOOP ------------------------------------------------------------------------

//  for(let i=1;i<=10;i++){          here i is inline variable
//   if(i%2==0)
//   console.log("number is even",i);
// if(i%2!=0)
// console.log("number odd is",i);
//  }


//WHILE LOOP ------------+++++++++++++++++++++++++++=======

// let i=1;
// for(;i<10;)
// {
//   console.log("number is",i);
//   i++;
// }

//______________________________________

// let i=1;
// while(i<10)
// {
//   console.log("number is",i);
//   i++;
// }

 //DO-WHILE LOOP-------------------------------------------

//  let i=0;
//  do{
//   console.log("number",i);
//   i++;
//  }while(i<=1);

// //FOR IN ------------------------------------------------
// const person={                          //variables
//    name:"saran",
//    age:22,
//    sex:"male"
// };

// for(let key in person){
//    console.log(key+":"+person[key]);
// }

// let color=["red","blue","green"];
// for(let i in color)
// {
//    console.log(color[1]);
// }
// // FOR OF LOOP+++++++++++++++++++++++++++++++++++++++++++++++
// for(let j of color){
//    console.log("color:",j);
// }

//INFINITE LOOP ---------------------------------------------
// for(;;)
// {
//    console.log("this is infinite loop");
// }

// >>>>>>>>>>>>>>>>>>>>>OBJECT ORIENTED  PROGRAMMING--------+++++++++++++++++++++++++++++++++
// let person={
//    name:"saran",
//    age:56,
//    interest:['creating,this new letter'],
//    isBoolean:false,
//    address:{
//       city:"cbe",
//       state:"tamil nadu"
//    },
//       greeting: function(){
//          let msg=`my name is ${this.name},i love ${this.interest}`; //=====
//          console.log(msg);
//       }
//    };
//    person.greeting()

//>>>>>>>>>>>>>>>>>>>>>>FACTORY FUNCTIONS++++((CAMELCASE)++++++++++++++++++++++++++++++++++++++++

// function createPerson(name){
//    return{
//       name,
//       greeting(){
//          let msg=`my name is ${this.name}`;
//          console.log(msg);

//       }
//    };
// }

// let saran=createPerson("saran");
// let sanjith=createPerson("sanjith");
// saran.greeting()
// sanjith.greeting()   


// //>>>>>>>>>>>>>>>>>>>CONSTRUCTOR FUNCTION  ++++(PASCAL )++++++++++++++++++++++++++++++++++

// function  Person(name){
//    this.name=name;
//    this.greeting=function(){
//       console.log(`my name is ${this.name}`);
//    }
// }

// let saran= new Person("saran");
// saran.greeting();

//>>>>>>>>>>>>>>>>>>>>DYNAMIC OBJECTS ++++++++++++++++++++++++++++++++++++++++++++++++++

// const person ={
//    name:"saran"
// }

// person.age=24;
// person.gender="male";
// person.greeting=function(){}

// // delete the object values using delete keyword
// delete person.greeting;
// delete person.name;
// delete person.age;

// console.log(person);

//>>>>>>>>>>>>>>>>>>>CONSTRUCTOR PROPERTY+++++++ (object la ula default constructor)  +++++++++++++++++++++++++++++++++++++

// let name="saran"; //it create as >>> new String("saran")
// let age=24;    //it create as >> new Number(24)
// let isAlive=true;   // it creare as >> new Boolen()

// console.log(name,age,isAlive);

//instead of using like this we create

// let name= new String("saran");
// let age=new Number(24);
// let isAlive=new Boolean(true);
// console.log(name,age,isAlive);
//    // OR

   // let name=String("saran");
   // let age=Number(24);
   // let isAlive=Boolean(true);
   // console.log(name,age,isAlive);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>FUNCTONS ARE OBJECTS   


// PRIMITIVE DATA TYPE LA VALUE THAN RETURN PANNUM SO
// let x=10;
// let y=x;
// x=20;
// console.log(y); // its only 10

// //but in reference data type 

// let cart={
//    value:5
// }

// let saran=cart;
// console.log(saran); // return address so value also update

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>ENUMERATING PROPERTIES OF AN OBJECT-----------------------------------------------
// const user={
//    name:"saran",
//    getFullName(){
//       console.log(`My name is ${this.name}`);
//    }
// }
// for(let key in user)
// console.log(key,user[key]);

// for(let key of Object.keys(user))
// console.log(key);

// for(let entry of Object.entries(user))
// console.log(entry);

// if('name' in user)
// console.log("yess");

//>>>>>>>>>>>>>>>>>>>>>>>CLONES AN JAVASCRIPT OBJECT--------------------------------------------------- 
// const user={
//    name:"saran",
//    getFullName(){
//       console.log(`My name is ${this.name}`);
//    }
// }

// // let another=Object.assign({age:24},user);
// // console.log(another);

// // SPREAD OPERATOR ----------FORMAT (3 DOT ...ANOTHER OBJECT NAME)
// let another={...user}
// console.log(another);


//>>>>>>>>>>>>>>>>>GARBAGE COLLECTION+++++++++++++++++++++++++++++++++++++++++++++++++
//it automatically delete the memory after executing the program

// >>>>>>>>>>>>>>>>>>>INBUILD FUNCTION OBJECT+++++++++++++++++++++++++++++++++++++++++++
//                   // MATH OBJECT____________________________________

//  console.log(Math.PI);
//  console.log(Math.pow(2,3));
//  console.log(Math.abs(-98));
//  console.log(Math.ceil(1.9));
//  console.log(Math.min(1,4,5,6));
//  console.log(Math.max(1,4,5,6));
//  console.log(Math.random());  //0 to 1 kula random number return pannum different different ha
//  console.log(Math.random());

//  console.log(Math.floor(23.6));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>STRING OBJECT -----------------------------------------------

// //PRIMITIVE STRING
// let saran="sanjith";
// let sanjith="saran";

// const name=new String("neymar");

// console.log(typeof(saran));
// console.log(saran.length);
// console.log(saran.startsWith("sa"));
// console.log(saran.endsWith("h"));
// console.log(saran.charAt(""));
// console.log(saran.includes("h"));
// console.log(saran.includes("a"));
// console.log(saran.concat(' ',sanjith));
// console.log(saran.indexOf("h"));
// console.log(saran.repeat(6));
// console.log(saran.replace("sanjith","ajith"));
// console.log(saran);
// console.log(saran.toLowerCase());
// console.log(saran.toUpperCase());

// >>>>>>>>>>>>>>>>>>>>TEMPLATE LITERAL [` `]+++++++++++++++++++++++++++++++++++++++++++
// let name="saran"m;
// const sg=`thank you ${name}
// for watching this 
// youtube channel`;
// console.log(msg);


//>>>>>>>>>>>>>>>>>>>>>>>>>>>DATE OBJECT +++++++++++++++++++++++++++++++++++++++++++++++++++++

// const num=Date().toString();    //string

// const now=new Date();
// now.setFullYear('1233');

// console.log(typeof(num));
// console.log(typeof(now));


// console.log(now.getDay());
// console.log(now.getMonth());
// console.log(now.getFullYear());
// console.log(now.getHours());

// //>>>>>>>>>>>>>>>>>>>>>>> ARRAYS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const num=["apple","lemon","orange"];
// num[4]="watermelon";

// console.log(num[1]);
// console.log(num);

// num.push("fruit","strawberry");  //push the value at the end

// num.unshift("Gauva");   // unshift >> add the value in the front off the array
// num.splice(3,0,"Gauva"); //splice(start value,element want to delete,value)
// console.log(num);  // output of the array

// >>>>>>>>>>>>>>>>>>>FINDING THE ELEMENT THE ARRAY in primitive value+++++++++++++++++++++++++++++++++++++++

// const  item=["apple","lemon","grapes","apple"];

// console.log(item);
// console.log(item.indexOf("Lemon"));  //case sensitive nala output la -1 varum
// console.log(item.lastIndexOf('apple'));   //3
// console.log(item.indexOf('grapes')!=-1);  //true
// console.log(item.includes('strawberry')); //false because this item is not in item array
// console.log(item.includes('apple'));  //true

// >>>>>>>>>>>>>>>>>>>>>FINDING THE ELEMENT THE ARRAY in reference value+++++++++++++++++++++++++++++++++++++++

// // find,findIndex
// const order=[
//    {
//       name:"saran",
//       qualification:"be"
//    },
//    {
//       name:"selva",
//       qualification:"msc"
//    },
//    {
//       name:"chand",
//       qualification:"python"
//    }

// ];

// console.log(order.includes("saran"));  // false
// //instead of using this we use
//  result=order.find(function(order){
//    return order.name=="saran";


// });
// console.log(result);

//instead of using this we use
//  result=order.findIndex(function(order){
//    return order.name=="saran";


// });


//>>>>>>>>>>>>>>>>>>>>>>>ARROW FUNCTIONS___________________________________________________________

// const order=[
//    {
//       name:"saran",
//       qualification:"be"
//    },
//    {
//       name:"selva",
//       qualification:"msc"
//    },
//    {
//       name:"chand",
//       qualification:"python"
//    }

// ];

//  console.log(order.find((order)=>order.name=="saran")); //()()()()()()
//  console.log(order.findIndex((order)=>order.name=="saran"));


//>>>>>>>>>>>>>>>>>>>> REMOVING ELEMENT FROM THE ARRAY+++++++++++++++++++++++++++++++

// const number=[1,2,3,4];

// console.log(number.pop());  //4 last element delete akum

// console.log(number.shift()); //1 first element  delete akum

// console.log(number.splice(1,1));

//>>>>>>>>>>>>>>>>>>>>>>>>>>EMPTYING THE ARRAY ++++++++++++++++++++++++++++++++++++++++++++++++

// let number=[1,2,3,4];

// //solution 1 Reinitalize 
// number=[];
// console.log(number.length);
// console.log(number);

// //solution 2
// number.length=0;
// console.log(number);

// // solution 3
// number.splice(0,number.length);
// console.log(number);

// //solution 4
// while(number.length)number.pop();
// console.log(number);

//>>>>>>>>>>>>>>>>>>>>>COMBINING ARRAYS

// const num=[1,2,3,4,5];
// const num1=[6,7,8,9];
// console.log(num.concat(num1));
// console.log(num.slice(0,9));

// const person=[{
//    name:'saran'
// }];
// const saran=[1,2,3,45,6];
// console.log(person.concat(saran));

//>>>>>>>>>>>>>>>>>>SPREAD OPERATOR+++++++++++++++++(...firstarray_name,...secondarray_name)+++++++++++++++++++++++++++++++++++++++++

// const num1=[1,2,3,4,5];
// const num2=[7,8,9,6];

// let add=[...num1,45,...num2];
// console.log(add);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>ITERATING ELEMENTS

// const dailyRoutine=["wake up","eat","sleep"];

// //FOR-OF
// for(let routine of dailyRoutine)    // wakeup,eat,sleep
// console.log(routine);

// //FOR-IN
// for(let routine in dailyRoutine)    // 0,1,2
// console.log(routine);

// for(let routine1 in dailyRoutine)
// console.log(routine1 ,dailyRoutine[routine1]);  //0 wake up 1 eat 2 sleep

// //FOR-EACH +++++++++++++++++++++++++++++
// dailyRoutine.forEach(function(routine2){
//    console.log(routine2);
// });

// //>>>>>>>>>>>>>>>>>>>>>SINGLE ARROW FUNCTION
// dailyRoutine.forEach(routine2=> console.log(routine2));

//>>>>>>>>>>>>>>>> JIONING & SPLITTING ++++++++++++++++++++++++++++++++++++++++++++++


// const dailyRoutine=["wake up","eat","sleep"];
// console.log(dailyRoutine.join(":"));

// let fullName="saran sanjith";
// let name=fullName.split(" ");
// let firstName=name[0];
// let lastName=name[1];
// console.log(`my firstname is ${firstName} and last name is ${lastName}`);

// let postTitle="This is My page";
// let post=postTitle.split(" ");
// let final=post.join("_");
// console.log(final);

// >>>>>>>>>>>>>>>>>>>>>>>>>SORTING+_+_+_+___+_+_+___________+____++++++++++++++++__+_

// const students=[1,3,0,5];
// console.log(students.sort());  // ascending
// students.sort(function(a,b){           //decending
//    return b-a;
// });

// console.log(students);

// console.log(students.reverse());

// const students=[
//    {id:3, name:"Saran"},
//    {id:8, name:"Guna"},
//    {id:1, name:"Anbu"}
// ];

// students.sort((a,b) =>{
//    if(a.id<b.id)return -1;

//    if(a.id>b.id) return 1;

//    return 0;

// });

// console.log(students);

//>>>>>>>>>>>>>>>>>>>>>>>>>TESTING THE ELEMENT IN JAVASCRIPT++-----{every(),some()}+++++++++++++++++++++++++++++

// const queue_by_age=[24,46,87];

// let isAllow=queue_by_age.every(function(value,index,array){
//    return value>=18
// });

// console.log("isAllowed:",isAllow); //output:true  its like AND operator

// const queue_by_age=[16,46,87];

// let isAllow=queue_by_age.some(function(value,index,array){
//    return value>=18
// });

// console.log("isAllowed:",isAllow); //output:true  its like OR operator

//>>>>>>>>>>>>>>>interview question------------------------------------------------------

// const number=[1,2,3,4,5];

// let isEven=number.some(function(value){
//    return value%2==0;
// });

// console.log("isEven",isEven);


//>>>>>>>>TESTING OBJECTS IN JAVASCRIPT++++++++++++++++++++++++++++++++++++++++++

// const items=[
//    {id:1,name:"saran",isDelivery:true},
//    {id:2,name:"sanjith",isDelivery:true},
//    {id:3,name:"selva",isDelivery:true}
// ];

// let allDelivery=items.every(function(values){
//    return values.isDelivery==true;
// });
// let notDelivery=items.some(function(values){
//    return values.isDelivery==true;
// });
// console.log("allDelivery",allDelivery);  //true
// console.log("notDelivery",notDelivery); //true

//>>>>>>>>>>>>>>>>>>>>>>FILTERING THE ARRAY IN JAVASCRIPT+++++++++++++++++++++++

// const queue_by_age=[16,46,87];

// let isAllow=queue_by_age.filter(function(value,index,array){
//    return value>=18
// });

// console.log(isAllow);

// const number=[1,2,3,4,5];

// let isEven=number.filter(function(value){
//    return value%2==0;
// });

// console.log("isEven",isEven);

// const cart_items=[
//    {id:1,item:"android mobiles",cost:6500},
//    {id:2,item:"iphone mobiles",cost:27000},
//    {id:3,item:"windows mobiles",cost:8500},
// ];

// let phones=cart_items.filter((value)=>value.cost<10000);
// console.log(phones);  // output 1:android,6500
                         // 3:window,8500

//>>>>>>>FINDING IN JAVASCRIPT+++++{find na filter panathula first value}+++++++++++++++++++++++++++++++

// const cart_items=[
//       {id:1,item:"android mobiles",cost:6500},
//       {id:2,item:"iphone mobiles",cost:27000},
//       {id:3,item:"windows mobiles",cost:8500},
//    ];
   
//    let phones=cart_items.find((value)=>value.cost<10000);
//    console.log(phones);    // output:1,item:"android mobiles",cost:6500
//    let phones1=cart_items.findIndex((value)=>value.cost<10000);
//    console.log(phones1);   // output :index of the find:0


//>>>>>>>>>>>>>>>>>>>MAPPING IN JAVASCRIPT++++++++++++++++++++++++++
// const number=[1,2,3,4,5];
// console.log(number);
// let final=number.map(function(val){
//    return val*2;
// });
// console.log(final);  //output : [2,4,6,8,10]

// const people=[
//    {id:1,firstName:"saran",lastName:"sanjith"},
//    {id:2,firstName:"selva",lastName:"raj"},
//    {id:3,firstName:"chandru",lastName:"soupboy"}
// ];

// let final=people.map(function(val){
// let fullName=[val.firstName,val.lastName].join(" ");
// let obj={id:val.id, fullName};
// return obj;
// }
// );
// console.log(final);

//>>>>>>>>>>>>>>>>>>>>>  CHAINING METHOD++++++++++++++++++++++++++++
// let products=[
//    {id:1,title:"androind phone",cost:7500},
//    {id:2,title:"Gaming computer",cost:90500},
//    {id:3,title:"head phone",cost:2500},
// ];

// // sort it using lowest price
// let lowsetPrice=products.sort(function(a,b){
//   return a.cost-b.cost;
// });

// //sort it by title ascending
// let sortByTitle=lowsetPrice.sort(function(a,b){
//    if(a.title<b.title) return -1;
//    if(a.title>b.title) return 1;
//    return 1;
// });

// //filter products less than 8000
// let filtered=sortByTitle.filter(function(value){
//    return value.cost<=8000;
// });

// //map it like this//android phone -7500
// let final=filtered.map(function(val){
//    return val.title+"-"+val.cost;
// });

// console.log(final);

//REDUCE METHOD>> SUM OF THE ARRAY USING REDUCE METHOD++++++++++++++++++++++

// const person=[12,34,56,78,90];

// let result=person.reduce(function(previousVal,CurrentVal){
//    return previousVal+ CurrentVal;
// });

// console.log("result of sum",result);

// const shopping_cart=[
//    { id:1,item:"organic",cost:45},
//    { id:2,item:"green",cost:34},
//    { id:3,item:"maagi",cost:24}

// ];

// let totalCost=shopping_cart.reduce(function(accumulator,currentVal){
//    console.log(accumulator);
//    return accumulator+currentVal.cost;
// },0);    //initial value is must  +++++++++++++++++++++
// console.log("Your total amount is:",totalCost);

// let totalCost1=shopping_cart.reduceRight(function(accumulator,currentVal){
//    console.log(accumulator);
//    return accumulator+currentVal.cost;
// },0);    //initial value is must  +++++++++++++++++++++{reduceRight add the value right to left}
// console.log("Your total amount is:",totalCost1);

//FUNCTIONS  IN JAVASCRIPT IN DEPTH +++++++++++++++++___________________________________________________________________________________________________

// function Declaration 
// let num1=34;
// let num2=67;

// function addNo(){
//    let result=num1+num2;
//    console.log(result);

// }
// addNo(45,78)

// FUNCTION EXPRESSION{NAMED FUNCTION EXPRESSION}{}{}   Ananoymous function ++++++++++++++++++++++++
// let no 
// Error not use this technique soo confusing+++++++++++++++++++++++++

//JAVASCRIPT HOISTING [Priority ]++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Function Declaration(we also call the function before or after the function definition it will give the output because while executing the program function definition go above it automatically convert)

// addNoDeclaration();    //this type

// function addNoDeclaration(){
//    console.log("adding no from function,declaration");
// }

// // addNoDeclaration();  /this type


// //Function Expression (we cannot declare the function as above it will return error because it consider function defination as expression)
// let addNoExpression=function(){
//    console.log("this is function expression");
// };

// addNoExpression();

//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)++_+_+__+_+__+_+_+_)+_+_+_+__+_+)__+__+_+_+_+_

// let no1=45346;
// let no2=7485;

//Immediately Invoked Function Expression
//syntax
//(function name(){

//})();

// (function sumNumber(num1,num2){
//    let result=num1+num2;
//    console.log(result);
// })(no1,no2);

//FUNCTION ARGUMENTS

// let tiffen=65;
// let lunch=250;
// let petrol=99;

// function sumExpense(){
//    let result=tiffen+lunch+petrol;
//    console.log(`your total expense is: ${result}`);
// }
// sumExpense()   //output 414

//FUNCTION ARGUMENTS++++++++++++++++++++++++++++++++++++++++++++++++

// function sumExpense(tiffen,lunch,petrol){
//    return tiffen+lunch+petrol;
   
// }
// let result=sumExpense(67,890,99);  //undefined-not argument passed
// console.log(result);

// function sumExpense(tiffen,lunch,petrol,items){
//    console.log(arguments);  //>>>>>[67,890,1,56,98,12]
//    let total=0;
//    for(let value of arguments){
//       total+=value;
//    }
//    return total;
   
// }

// let result1=sumExpense(67,890,1,56,98,12); 
// console.log(result1);

//REST OPERATOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function sumExpense(loan,...expenses){
//       console.log(expenses);  //>>>>>[67,890,1,56,98,12]
      
//       let total= expenses.reduce((a,b)=>a+b);
//       return total-loan;
      
//    }
   
//    let result1=sumExpense(100,67,890,1,56,98,12); 
//    console.log(result1);
   

//FUNCTION DEFAULT PARAMETRERS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function calculateTax(cost,tax=18){    //18 default
//    taxAmount= cost*(tax/100);
//    console.log(`total cost is:${cost}
//    gst of tax (${tax}%) is: ${taxAmount}
//    total amount is:${cost+taxAmount}`);
// }
// calculateTax(45,25)  //25 optional

//GETTERS AND SETTERS+++++++++++++++++++++++++++++++++++++++++++++++++++

// let student={
//    firstName:"saran",  //data properties
//    lastName:"sanjith"
// };

// console.log(student.firstName+" "+student.lastName);

    //{or}

   // let student={
   //    firstName:"saran",  //data properties
   //    lastName:"sanjith",
   //     fullName(){
   //       return `${student.firstName} ${student.lastName}`;
   //    },
   // };
   
   // console.log(student.fullName());

   //getter>> used to get data
   //setter>>used to se data

   // let student={
   //    firstName:"saran",  //data properties
   //    lastName:"sanjith",
   //    get fullName(){  //get the data
   //       return `${student.firstName} ${student.lastName}`;
   //    },
   //    set fullName(value){     //set the data
   //       let values=value.split(" ");
   //       this.firstName=values[0];
   //       this.lastName=values[1]?? "";  //nullify
   //    }
   // };
   
   // student.fullName="trisha krishnan"
   // console.log(student.fullName);


   //ERROR HANDLING+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//    let student={
//       firstName:"saran",  //data properties
//       lastName:"sanjith",
//       get fullName(){  //get the data
//          return `${student.firstName} ${student.lastName}`;
//       },
//       set fullName(value){     //set the data
//          if(typeof value!="string"){
//             const err=new Error("it is not string");
//             throw err;
//          };
//          if(value.length<=3) throw "name invalid";
//          let values=value.split(" ");
//          this.firstName=values[0];
//          this.lastName=values[1]?? "";  //nullify
//       }
//    };
// try{
//    student.fullName=45;   //45 is not string it must return alert
// }catch(ex){

//    alert(ex);
// }


//GLOBAL SCOPE{} LOCAL SCOPE++++++++++++++++++++++++++++++++++++++++++++++++++

// {
//    let name="saran";
//    console.log(name);   //local scope
// }

// function greetUser(){
//    let msg="hello";
//    console.log(msg);
//    if(true){
//       let name="saran";
      
//    }
//    console.log(name);  // not working>> local variable cannot be accessed by outside

// }
// greetUser();

//VAR VS LET+_++_+__+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+__+_+_+_+__++_+_+__+_++_+_
// var >>>> function scope  ,if we user var it will merge with windows object
//let>>>>blocklevel scope,not merged with window
// function displayNum(){
//    for( i=1;i<10;i++){
//       console.log("my num is"+i);

//    }
//    console.log(i);
// }
// displayNum()

//THIS KEYWORD+_+_+_+_+_+_+_+_++_+_+_+__+_+_+_+_+_+_

//this>>> METHOD>> obj
//this>>> FUNCTION>>> global(window,global)

// const channel={
//    title:"saran",
//    language:["tamil","english"],
//    subscribe(){
//       console.log(this);
//    },
//    showVideos(){
//       console.log(this.language);
//    },

// };

// channel.showVideos();

//this more examples........................................