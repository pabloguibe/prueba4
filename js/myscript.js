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

console.log("------------------------")

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

console.log("------------------------")

//Arithmetic operations II
//Exponentiation / Increment / Decrement

let operador_c= 3;
let operador_d= 3;
let expo2= operador_c ** operador_d;
console.log(expo2);
console.log(++operador_c);
console.log(operador_d--);
console.log(operador_d);

console.log("------------------------")

//Assignment Operators

let x= 5;
let y = 6;
console.log(x+=5);
console.log(x-=5);
console.log(y*=3);
console.log(y/=2);

console.log("------------------------")

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

console.log("------------------------")

//Array

var first_array=[];
var second_array= new Array(3);
var third_array=new Array (3,5);
var fourth_array= new Array(3,5,"Seville",true,third_array);
console.log(first_array);
console.log(second_array);
console.log(third_array);
console.log(fourth_array);

console.log("------------------------")

//Array acces

console.log(third_array[1]);
console.log(fourth_array[2][0]);

console.log("------------------------")

//Array length

console.log(fourth_array.length);

console.log("------------------------")

//Array push

console.log(fourth_array.push("Spain"));

fourth_array.push("Spain");
console.log(fourth_array);

console.log("------------------------")

//Array unshift

fourth_array.unshift(1);
console.log(fourth_array);

console.log("------------------------")

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

console.log("------------------------")

//If / else/ elseif

let aux=3;
if (aux>0){
    console.log("This number is positive");
}else if(aux <0){
    console.log("This number is negative");

}else{
console.log ("This number is 0");

}

console.log("------------------------")
// Regular Expressions

var DNI_REGEX = /^(\d{8})([A-Z])$/;
let dni="12345678K";
if(dni.match(DNI_REGEX)){
    console.log("Correct DNI");
}else{
    console.log("Incorrect DNI");
}

console.log("------------------------")
// Compasrison Operators
console.log(8==8);
console.log(8=="8");
console.log(8===8);
console.log(8==="8");
console.log("------------------------")
console.log("test"=="test")
console.log("test"==='test')
console.log("test"=="Test")

console.log("------------------------")

//Loop while

var i=1;

while(i<10){
    console.log("The number is " + i);
    i++;
}

console.log("------------------------")

//Date Object

let today = new Date();
let first_october= new Date(2019, 10, 1);
console.log(today);
console.log(first_october);
console.log(today.getDay());

if(today>first_october){
    console.log("Today is after to fist octuber");

}else{
    console.log("Today is before to first octuber");
}

console.log("------------------------")

//Eventos

function myFirstFunction(){
    console.log("Thank you for you click")
}

function mySecondFunction(){
    console.log("Thank you for you interest.")
}

console.log("------------------------")


//Select DOM

var div= document.getElementById("my_div");
div.classList.add("my_class");
console.log(div)

console.log("------------------------")

var div2= document.getElementsByTagName("div");
console.log(div2);

console.log("------------------------")

var second_div= document.querySelector("#my_second_div");
console.log(second_div);


console.log("------------------------")

/*function $(selector) {
    return document.querySelectorAll(selector);

}
*/
//console.log($("#my_third_div"));
//console.log($(".div_especial"));

console.log("------------------------")

//Funciones

var numbers =[1,2,3,4];
var n_elevator_2= numbers.map(function(n){ return n*n; });
console.log(n_elevator_2);

console.log("------------------------")

var n_elevator_2= numbers.map((n) => {return n*n; });
console.log(n_elevator_2);

console.log("------------------------")

var n_elevator_2 =numbers.map ((n) => { console.log(n*n); return n*n;});
console.log(n_elevator_2);

console.log("------------------------")

var n_elevator_2=numbers.map(n =>n*n);
console.log(n_elevator_2);

console.log("------------------------")

let numbers5 = [[1,1],[2,2],[3,3],[4,4]];
let itself = numbers5.map(([x,y]) => x*y);
console.log(itself);



console.log("------------------------")

//Create Dom Nodes I

/*$("#btn2").addEventListener("click",function(){
    var input = document.createElement("input");
    console.log(input);

});
*/
/*function $(selector) {
    return document.querySelector(selector);

}
*/

console.log("------------------------")

//Create Dom Nodes 

$("#btn2").addEventListener("click",function(){
    var input= document.createElement("input");
    input.setAttribute("type","email");
    input.setAttribute("placeholder","E-mail");
    input.setAttribute("name","emails[]");
    $("#form").appendChild(input);
    myAlert("Add new email input");
});   

function $(selector) {
    return document.querySelector(selector);

}

function myAlert(msg) {
    var div=document.createElement("div");
    div.classList.add("alert");
    div.innerHTML= msg;
    var close=document.createElement("span");
    close.style.float="right";
    close.classList.add("close");
    close.innerHTML= "X";
    div.appendChild(close);
    $("body").insertBefore(div,$("body").firstChild);
    bind_close();


}

function bind_close(){
    let elements= document.querySelectorAll(".close");
    for(var i=elements.length-1;i>=0;i--){
        let el = elements [i];
        el.addEventListener("click", function(){
            this.parentNode.style.display = "none";
        });
    }
}
