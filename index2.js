// var hello = 'Hello world';
// document.write(hello);
// console.log(hello);
// alert(hello);

function sum (a,b) {
    var result = a+b;
    return result ;
}
function print (var) {
document.write(var);
document.write('<br>');}

var var1=100;
    var2=200;

var result1 = sum(2,3);
var result2 = sum(var1,var2);

print (result1);
print (result2);

function lg(a,b) {
    if (a > b){ return a;
    }  else { 
        return b;
    }
}

print (lg (20, 20));
print (lg (8, -3));
print (lg (7, 2));

print(Math.sqrt(256));