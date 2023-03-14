var stock = document.getElementById("display");
var egal = document.getElementById("=");
var cuurentChar;
var perviouseChar;
var operations = ["+", "-", "*", "/", "%", "²"];
var operationsSpecial = ["*", "/", "%", "²"];
var alphabet = ["a","z","e","r","t","y","i","o","q","s","d","f","g","h","h","j","k","l","m","w","x","c","v","n"]
var operationsNumber = [
  "+",
  "-",
  "*",
  "/",
  "%",
  "²",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];
var ans;
var care;
var content = document.getElementsByTagName("body")[0];
var darkMode = document.getElementById("dark-change");
let trad = document.querySelector("select")
let age = document.querySelector('#age')
let bin = document.querySelector('#bin')
let roman = document.querySelector('#ra')
let anss = document.querySelector('#Ans')
let factt = document.querySelector('#fact')


darkMode.addEventListener("click", function () {
  darkMode.classList.toggle("active");
  content.classList.toggle("night");
});
document.addEventListener("keydown", function (e) {
  if (operationsNumber.includes(e.key)) {
    console.log(e.key)
    stock.value = stock.value + e.key;
  }
  else{
    stock.value = remove(stock.value)
  }

});
document.addEventListener('keydown', function(e) {
  if(e.key == "Enter"){
    console.log(stock.value)
    egal.onclick()
     }
});

function mo9abil(){
  stock.value = -(stock.value)
}
function clearStock() {
  stock.value = "";
}

function clearoneStock() {
  stock.value = stock.value.slice(0, -1);
}

function addNumber(c) {
  stock.value += c;
  numChar = stock.value.length;
  cuurentChar = c;
  getPreviousChar();
 }

function clalculate(){
    stock.value = eval(stock.value)
    ans= stock.value;
      if (stock.value == "Infinity") {
        stock.value = "Cannot divide by zero";
      }    
}

function historique() {
  stock.value = ans;
}



function getPreviousChar() {
  perviouseChar = stock.value.substring(numChar - 2, numChar - 1);
  checkSyntax();
}

function checkSyntax() {
  if (operationsSpecial.includes(cuurentChar) && numChar == 1) {
    removeChar();
  }
  if (operations.includes(perviouseChar) && operations.includes(cuurentChar)) {
    if (perviouseChar == cuurentChar) {
      removeChar();
    } else {
      overwrite();
    }
  }
}

function removeChar() {
  stock.value = stock.value.substring(0, numChar - 1);
}
function overwrite() {
  stock.value =
    stock.value.slice(0, numChar - 2) + stock.value.slice(numChar - 1);
}
function carre() {
  care = stock.value.slice(0, numChar - 2);
  stock.value = Math.pow(care, 2);
  ans = stock.value;
}
function binaire() {
  let N = stock.value;
  let binary = "";
  while (N !== 0) {
    let r = N % 2;
    N = Math.floor(N / 2);
    binary = r + binary;
  }
  stock.value = binary;
}
function Age() {
  var d = new Date();
  var year = d.getFullYear();
  NewAge = year - stock.value;
  stock.value = "Votre Age ==> " + NewAge;
}
function racine() {
  stock.value = Math.sqrt(stock.value);
}
function fact() {
  var f = 1;
  for (var i = 1; i <=stock.value ; i++) {
    f = i * f;
  }
  stock.value =  "Le factorielle est ==>"+f;
}

function romai() {
  let t = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], 
           [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], 
           [10, "X"], [5, "V"], [4, "IV"], [1, "I"]];
  let ts = [];
  for (let i = 0; i < t.length; i++) {
    let num = t[i][0];
    let ch = t[i][1];
    while (stock.value >= num) {
      stock.value -= num;
      ts.push(ch);
    }
  }
  stock.value =  ts.join("");
}
function traduction() {
  if (trad.selectedIndex == 0) {
    age.innerHTML="Age"
    bin.innerHTML="Bin"
    roman.innerHTML="Roman"
    factt.innerHTML="Fact"
    anss.innerHTML="Ans"
    
  }
  if (trad.selectedIndex == 1) {
    age.innerHTML="العمر"
    bin.innerHTML="بينير"
    roman.innerHTML="رومان"
    factt.innerHTML="عاملي"
    anss.innerHTML="سجل"
    
  }
}
addEventListener("change",()=>{
  traduction() 
}

)
