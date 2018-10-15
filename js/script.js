//Домашка 1)
for (var i = 2; i <= 10; i++) { 
	if(i % 2 == 0){
	 alert(i); }
	}
//Домашка 2)
var i = 0;
while (i < 3) {
  alert( "номер " + i + "!" );
  i++;
}

// var b= 1;
// for (var i = 0; i < 10; i++) {
// 	b+=b;
// 	alert(b );
// 	}

// function summa(obj) {
// var summa=0;
// var a1=1*obj.a1.value;
// var a2=1*obj.a2.value;
// for (var i = a1; i <= a2; i++) {
//  summa+=i;
// }
// obj.result.value = summa;
// }
// //пример с while
// var sum = 0; 
// while (true) { 
// var value = +prompt("Введите число", ''); 
// if (!value) break; // (*) 
// sum += value; } 
// alert( 'Сумма: ' + sum );

// //Директива continue прекращает выполнение текущей итерации цикла
// // цикл ниже использует continue, чтобы не выводить чётные значения
// for (var i = 0; 
// 	i < 10; i++) { 
// 	if (i % 2 == 0) 
// 		continue; alert(i); }

//Бывает нужно выйти одновременно из нескольких уровней цикла. 
//Например, внутри цикла по i находится цикл по j, 
//и при выполнении некоторого условия мы бы хотели выйти из обоих циклов сразу:
// outer: for (var i = 0; i < 3; i++) 
// { for (var j = 0; j < 3; j++) 
// { var input = prompt('Значение в координатах '+i+','+j, ''); 
// если отмена ввода или пустая строка 
// завершить оба цикла if (!input) break outer; 
// (*) } } alert('Готово!');

function nTime(obj) { 
	var t=new Date();
	var d=t.getFullYear(); 
	var a=t.getMonth();
	var b=t.getDate(); 
	var h=t.getHours(); 
	var m=t.getMinutes(); 
	var s=t.getSeconds(); 
	var result=d +". "+b +". "+a +". "+h+":"+m+":"+s; 
	obj.res.value=result; }
