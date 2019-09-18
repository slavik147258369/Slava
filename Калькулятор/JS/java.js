//Прибавляем
function plus(){
	var number1,number2,result;
	number1 = document.getElementById("num1").value;
	number1 = parseInt(number1);
	number2 = document.getElementById("num2").value;
	number2 = parseInt(number2);
	result = number1+number2;
	document.getElementById("res").innerHTML = result;
}
//Вычетаем
function minus(){
	var number3,number4,result;
	number3 = document.getElementById("num1").value;
	number3 = parseInt(number3);
	number4 = document.getElementById("num2").value;
	number4 = parseInt(number4);
	result = number3-number4;
	document.getElementById("res").innerHTML = result;
	}
//Умножаем
function multiply(){
	var number5,number6,result;
	number5 = document.getElementById("num1").value;
	number5 = parseInt(number5);
	number6 = document.getElementById("num2").value;
	number6 = parseInt(number6);
	result = number5*number6;
	document.getElementById("res").innerHTML = result;
}
//Делим
function divide(){
var number7,number8,result;
number7 = document.getElementById("num1").value;
number7 = parseInt(number7);
number8 = document.getElementById("num2").value;
number8 = parseInt(number8);
result = number7/number8;
document.getElementById("res").innerHTML = result;	
if(result == Infinity){
	document.getElementById("res").innerHTML = 0;
	}
}