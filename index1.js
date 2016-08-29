
function x1(a,b,c) {
    var result = (-b + Math.sqrt(b*b-4*a*c))/(2*a);
	return result ;
}
function x2(a,b,c) {
    var result = (-b - Math.sqrt(b*b-4*a*c))/(2*a);
	return result ;
}

	var a = String(prompt('вкажіть змінну a'));
	var b = String(prompt('вкажіть змінну b'));
	var c = String(prompt('вкажіть змінну c'));

	var a = Number (a);
	var b = Number (b);
	var c = Number (c);
	
	function D(a,b,c) {
    if ((b*b-4*a*c)<0){ return 'D < 0, дійсних коренів немає';
    } else { 
      return 'D > 0, є два дійсні корені';
    }
	}
	
var result1 = D(a,b,c);	
var result2 = x1(a,b,c);
var result3 = x2(a,b,c);

document.write(result1);
document.write('<br>');
document.write('x1 = ',result2);
document.write('<br>');
document.write('x2 = ',result3);