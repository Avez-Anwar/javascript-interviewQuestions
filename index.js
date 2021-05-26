let name={
  firstName:"Akshay",
  lastName:"Saini",
}

let name2={
  firstName:"John",
  lastName:"Doe"
}
  
let printName=function(homeTown,state){
  console.log(this.firstName+" something here "+this.lastName+" "+homeTown+" "+state)
}

//function borrowing

//call method
printName.call(name,"Mumbai","Maharastra")
printName.call(name2,"NewDelhi","Delhi")

//apply method
printName.apply(name,["Mumbai","Pune"])
printName.apply(name2,["NewDelhi","Delhi"])

//bind method

let printMyName = printName.bind(name2,"Mumbai","Maharastra");
console.log(printMyName)

printMyName()

