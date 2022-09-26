document.getElementById('title').innerHTML="My Third Day Javascript Experience";
document.getElementById('experience').innerHTML="In my third day Javascript class, I was introduced to Operators in Javascript. I learnt that there are different types of Operators in Javascript and I was introduced to two types that particular day which are; Arithmetic operators and Assignment operators.";
document.getElementById('assignment').innerHTML="Homework";
document.getElementById('subheading').innerHTML="Assignment Operator";
document.getElementById('multiply').innerHTML="Multiplication Assignment Operator";
document.getElementById('ans').innerHTML="<code>let MyAge=30</code> <br/> <code> MyAge *=2</code><br/> <code> MyAge *=1</code><br/>";
document.getElementById('value2').innerHTML="<code>let value=60</code> <br/> <code> value *=40</code><br/> <code> value *=80</code><br/>";
document.getElementById('divide').innerHTML="Division Assignment Operator";
document.getElementById('result2').innerHTML="<code>let x=10</code> <br/> <code> x /=5</code><br/> <code> x /=3</code><br/>";
document.getElementById('output').innerHTML="<code>let y=12</code> <br/> <code> x /=4</code><br/> <code> y /=2</code><br/>";
 document.getElementById('modulus').innerHTML="Modulus Assignment Operator";
 document.getElementById('outcome2').innerHTML="<code>let a=100</code> <br/> <code> a %=20</code><br/> <code> a %=10</code><br/>";


let MyAge = 30;
MyAge *= 2;
MyAge *= 1;
document.getElementById('answer').innerHTML=MyAge;

let value = 60;
value *= 40;
value *= 80;
document.getElementById('value').innerHTML=value;

let x = 10;
x /= 5;
x /= 3;
document.getElementById('result').innerHTML=x;

let y = 12;
y /= 4;
y /= 2;
document.getElementById('returnvalue').innerHTML=y;

let a = 100;
a %= 20;
a %= 10;
document.getElementById('outcome').innerHTML=a;


