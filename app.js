var arr=["Math","Science","Social","English","Bussiness"]

function show([value1,value2,...rest]){
  console.log(value1);
  console.log(value2);
  console.log(rest);

}

show(arr)

/*........................*/

var arr=[10,20,30,80,90]

function show(z){
  return z
}

var x=show(arr)

var[element1,element2,element3,,element5]=x

console.log(element1)
console.log(element2)
console.log(element3)
// console.log(element4)
console.log(element5)

/-------------call back-hell----------------/

console.log("start")

function message(name,callback){
  setTimeout(()=>{
    console.log("This is a message field")
    callback (name)
  },2000)
}

function messageHobbies(name,callback){
  setTimeout(()=>{
    console.log("This are list of hobbies")
    callback(["Criket","FootBall","BasketBall"])
  },5000)
}

var nm=message("Rahul",(nm)=>{console.log(nm);
messageHobbies(nm,(hobby)=>{console.log(hobby)})})





console.log("End")


//---------Promise-------------



const promiseObj=new Promise((resolve,reject)=>{
  let req=true
 
  if(req==true){
    resolve("Request Accepted")
  }
  else{
    reject("Request Rejected")
  }
}).then((value)=>{console.log(value)})
 .catch((error)=>{console.log(error)})


 --------array push method-----------------------

 var arrObj=['apple','mango','graps']

arrObj.push('kivi','orange')
var water=arrObj
console.log(water)

var newLength=arrObj.length

console.log(newLength)

arrObj.length=2

console.log(water)

arrObj.length=20


console.log(water)

var arrWater=[1,20,30,50]

console.log(arrWater.indexOf(20))


-------Find No. of Duplicates in an array--------------









-----------Reverse array-----------------

let x="hi"
let y="ih"

const message=(x)=>x.split("").reverse().join("")

const msgCheck=message(x)===y

console.log(msgCheck)


----------------sort the array elements-------------

const a=[1,2,5,7,9]
const b=[2,5,7,12,100]

const numbers= [...a,...b,]

const sortArr=numbers.sort(function(a,b){
  if(a>b){
    return 1
  }
  else  if(a<b){
    return -1
  }
  else{
    return 0
  }
})

console.log(sortArr)

-------add two numbers using reduce function-----


let arr=[1,2,3,,4,5,6,7,8,9,10]

newArr=arr.reduce(function(a,b){
  return a+b
},0)

console.log(newArr)

--------count most repeating element in an array--------

let x=[9,9,9,9,9,2,2,2,4,4,4]

let mxN=Math.max(...x)

let count=0

for(let i=0;i<x.length;i++){
  if((mxN)==x[i]){
  count+=1
}
}

console.log(count)

-------------------Closure--------------------------------

 function x(){
   var a=7
   function y(){
     console.log(a)
   }
   y()
 }
x()

------------JS setTimeout functionality-----------------------


console.log("a")

let timestamp=setTimeout(function(){
  console.log("g")
})

setTimeout(function incrementFunction() {
  numfunction += 10;
  console.log(numfunction);
}, 5000);

let timmers=setTimeout(function(){
  console.log("c")
},0)

let timingily=setTimeout(function(){
  console.log("d")
},2)

let timesqad=setTimeout(function(){
  console.log("f")
},1000)

let timmey=setTimeout(function(){
  console.log("b")
},1)

let timeslap=setTimeout(function(){
  console.log("i")
},5000)

----------------async await example--------------

let num =0

async function increment(){
   num +=await 10
   console.log(num)
}

increment()

let numTwo=0

var newNum=numTwo+=1

console.log(newNum)


let numThree=0

var newNum=numThree+=1

console.log(newNum)

let numFour=0

var newNum=numFour+=1

console.log(newNum)

--------------Finding number of arguments in javascript-----------------

function message(a,b,c){
if(arguments.length===message.length){
  console.log("correct number of arguments")

}else{
console.log("wrong number of arguments")
}

}


message(1,3)
message(1,2,3)
message(1,2)

-----------ASI(Automatic SemiColon Ejection)------------------

let a={
  a:123
};
[a].forEach(function(x){
  console.log(x)
})

-----------------setInterval function in event loop------------

let a=true

let c=0


setTimeout(()=>{
a=false
},5000)

setInterval(()=>{
if(a){
  console.log("hello world")
}
},1000)

--------------constructor in javascript-----------------
// Constructor function for Person objects
function Person(first,last,age,eye){
  this.firstName=first;
  this.lastName=last;
  this.age=age;
  this.eyeColor=eye
}
// Create 2 Person objects
 var men=new Person("John","Doe",20,"brown")
 var women=new Person("Jean","Dean",32,"blue")

//// Add nationality to  object
 men.nationality="British"
 women.country="England" 
 
// Display nationality 
 console.log("hello " + men.firstName +" " +  men.nationality)
 console.log("hello " + women.country )


-----------prototype inheritance "add property to the constructor"------------------


 //prototype inheritance add property

function Person(first,last,age,eye){
  this.firstName=first;
  this.lastName=last;
  this.age=age;
  this.eyeColor=eye
}

Person.prototype.country=("England")

 var men=new Person("John","Doe",40,"brown")

 console.log("my name is " +men.country)

 -------prototype method and prototype property-------

 function Person(first,last,age,eye){
  this.firstName=first;
  this.lastName=last;
  this.age=age;
  this.eyeColor=eye;
}

//prototype property
Person.prototype.country="England"


//prototype method
Person.prototype.name=function(){
 return this.firstName+""+this.lastName
}

var men=new Person("John","Doe",50,"black")

console.log("Name: "+men.name()+ ", Country: "+men.country)


