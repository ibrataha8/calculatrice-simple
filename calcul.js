var stock = document.getElementById("display");
var cuurentChar;
var perviouseChar;
var operations = ['+','-','*','/','%','²'];
var operationsSpecial = ['*','/','%','²']
var ans;
var care;
function clearStock() {
    stock.value = "";  
}
function clearoneStock() {
    stock.value=stock.value.slice(0,-1) 
    }
  
  

function addNumber(c) {
    stock.value += c;
    numChar = stock.value.length;
    cuurentChar = c;
    // console.log(cuurentChar)
    getPreviousChar();
    }


function Calculate(){
    stock.value = eval(stock.value);
    ans= stock.value;


}

function getPreviousChar(){
    perviouseChar =stock.value.substring(numChar-2,numChar-1);
    console.log(perviouseChar)
    checkSyntax();
}

function checkSyntax(){
    if (operationsSpecial.includes(cuurentChar) && numChar == 1){
        removeChar();
    }
    if (operations.includes(perviouseChar)  && operations.includes(cuurentChar)){
        if (perviouseChar == cuurentChar){
            removeChar();
        }else{
            overwrite()
        }
    }
    }

function removeChar(){
    stock.value = stock.value.substring(0,numChar-1);
}
function overwrite(){
    stock.value =(stock.value.slice(0,numChar-2) + stock.value.slice(numChar-1));

}
function carre(){
    care = stock.value.slice(0,numChar-2)
    stock.value = (Math.pow(care,2))
    ans= stock.value;
    

}
function historique(){
    stock.value=ans;
}
