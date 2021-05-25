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
