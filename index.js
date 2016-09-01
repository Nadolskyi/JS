
var arr = [1,1];
console.log (arr[0]); 
for(var i=1; i<100; i++) {arr.push(arr[i]+arr[i-1]);
 console.log (arr[i]);
}
var a = Number(prompt('Вкажіть порядковий номер ряду чисел Фібоначчі'));
	
alert('Значення числа ряду Фібоначчі під порядковим номером '+[a]+' становить '+arr[a] );