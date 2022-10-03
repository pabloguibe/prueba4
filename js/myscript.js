//alert("Hello to JS");

var table = "Normal Table";
let chair = "one chair";
console.log(table);
console.log(chair);

let testBoolean= true;
console.log(testBoolean);

let testNumber= 10;
console.log(testNumber);

let testString = "text";
console.log(testString);

let testBooleanObject = new Boolean(true);
console.log(testBooleanObject);

let testStringObject= new String("text");
console.log(testStringObject);


//Concatenate variables

let name1= "John";
let surname = "Doe";
let question = "How are you "+name1+" "+surname+"?";
console.log(question);

//Concatenate variables
let name2= "John";
let surname2= "Doe";
let age = 23;
let question2= `How old is ${name2} ${surname}?`;
let answer= "He is "+age+" years old";
console.log(question2);
console.log(answer);

//Concatenate variables
let name3 = "John";
let surname3= "Doe";
let question3= "How are you ".concat(name3)+" ".concat(surname3)+"?";
console.log(question);

//Arithmetic operations
//Sum,Rest...

let operador_a= 12;
let operador_b = 6;
let sum = operador_a+operador_b;
let rest= operador_a-operador_b;
let mult= operador_a*operador_b;
let division=operador_a/operador_b;
console.log(sum);
console.log(rest);
console.log(mult);
console.log(division);

//Arithmetic operations II
//Exponentiation / Increment / Decrement

let operador_c= 3;
let operador_d= 3;
let expo2= operador_c ** operador_d;
console.log(expo2);
console.log(++operador_c);
console.log(operador_d--);
console.log(operador_d);

//Assignment Operators

let x= 5;
let y = 6;
console.log(x+=5);
console.log(x-=5);
console.log(y*=3);
console.log(y/=2);

//typeof, null y undefinded

let testBoolean2 = true;
let testNumber2= 12;
let testString2= "Hello!";
let testBooleanObject2= new Boolean (true);
console.log(typeof(testBoolean));
console.log(typeof(testNumber));
console.log(typeof(testString));
console.log(typeof(testBooleanObject));

let testNull= null;
console.log(typeof(testNull));

let testUndefined;
console.log(testUndefined);

//Array

var first_array=[];
var second_array= new Array(3);
var third_array=new Array (3,5);
var fourth_array= new Array(3,5,"Seville",true,third_array);
console.log(first_array);
console.log(second_array);
console.log(third_array);
console.log(fourth_array);

//Array acces

console.log(third_array[1]);
console.log(fourth_array[2][0]);

//Array length

console.log(fourth_array.length);

//Array push

console.log(fourth_array.push("Spain"));

fourth_array.push("Spain");
console.log(fourth_array);

//Array unshift

fourth_array.unshift(1);
console.log(fourth_array);

//For / For Each

for(var i=0;i<fourth_array.length; i++){
    console.log("Entramos en la iteracion de "+fourth_array [i]);
}

for (var i= fourth_array.length-1;i>=0 ;i--) {
    console.log("Second iteration "+fourth_array[i]);

}

var i =fourth_array.length-1;
for(;i>=0;i--){
    console.log("Third iteration "+fourth_array[i]);

}

fourth_array.forEach(function(element){
    console.log("Entramos en la iteracion de "+fourth_array[i])
});

