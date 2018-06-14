// 한줄 주석처리
/* multi
lines
*/


console.log("data");


// 식별자
// 상수 : SNAKE_CASE(대문자 스네이크 케이스)
// 변수명 : camelCase(카멜 케이스)
// 모듈 : PascalCase(파스칼 케이스)
// python 식별자 특수기호 : _
// javascript 식별자 특수기호 : $, _
// _name : private variable, function
// $target : selector를 변수로 사용할때

var $target = 1;
console.log($target);

var name = "juno"; // 변수 선언과 ;(semi colon)을 적어줘야함
console.log(name);

var a = 1.1;
var b = 2;
console.log(a+b, typeof a);


// 연산자
// +, -, *, /, %, ++, --
//  +, -, *, /, %는 파이썬과 동일
var number = 5;
var result = ++number;
console.log(number, result);
// >>> 6 6

var number = 5;
var result = number++; // 뒤에 ++연산자가 사용되면 값을 대입 후에 1을 증가
console.log(number, result);
// >>> 6 5

// 데이터 타입
var a =1; // Number
var b = 1.9; // Number
var c = "data"; //String
var d = [1, 2, 3]; // Object
var e = {a:1, b:2}; // Object
var f = true; // Boolean
console.log(typeof a, typeof b, typeof c, typeof d,typeof e, typeof f);

// null, notdefined, NaN
// null : 값이 없음을 지정 "값이 없다"라고 넣어주는것
// undefined : 값이 지정되지 않음, 값이 할당되지 않음
// NaN : 존재하지않는 데이터 형태

var a = null;
console.log(a);

var b;
console.log(b);

var c = 0/0;
console.log(c);

// Garbage collection
// 메모리에 자원을 반환하기 위해 참조하고 있는 연결을 끊어 저장되어있는 데이터를 없앰.

var abc = 1; // 1을 메모리(RAM)에 할당
abc = null; // 메모리에 자원 반환(연결을 끊어버림)


// 비교연산자
// >, <, >=, <=, !=, ==,, !==, ===
// 결론부터 말하면 무조건 ===를 쓰세요.

// 데이터 값만 비교
console.log(1 == 1); //true
console.log(1 == "1"); //true

// 데이터 값과 타입을 모두 비교
console.log(1 === 1); //true
console.log(1 === "1"); // false

// NaN
// 비교연산을 사용하지 않습니다.
// 비교연산에서 NaN이 한번이라도 언급되면 무조건 false를 리턴합니다.
console.log(NaN === NaN); // 무조건 false

// 할당연산자
// +=, -=, *=, /=, %= ....
var a = 1;
a += 2;
console.log(a);

// 논리연산자
// &&(and), ||(or)
console.log(true && false); //false
console.log(true || false); //true

// 조건문
if(false){
  console.log("hello");
}else if (true) {
  console.log("dss");
}else{
  console.log("world");
}

// false로 간주되는 데이터
// null, undefined, NaN, 0, ""

// true로 간주되는 데이터
// [], {}....

// 문제 1 : 점수를 입력하면 학점이 출력되는 코드를 작성.
var point = 88;
if(point>=90){
  console.log("A");
}else if (point>=80) {
  console.log("B");
}else if (point>=70){
  console.log("C");
}else if (point>=60){
  console.log("D");
}else if (point>=50) {
  console.log("E");
}else{
  console.log("F");
}

// 반복문
// while, for, do-while
var a = 10;
while (true) {
  a++;
  if (a>15) {
    break;
  }
  if (a === 12) {
    continue;
  }
  console.log(a);
}

// for(초기값; 조건; 실행(변수값 변경))
for (var i = 0; i <3; i++) {
  console.log(i);
}

// 배열
var arr = ['a','b','c','d','e'];
console.log(arr[2]);
console.log(arr.length);
arr.push('f'); // python에서 append
console.log(arr);
arr.unshift('z'); // 배열 가장 앞에 붙여줌
console.log(arr);
var result = arr.pop();
console.log(arr, result);

var result = arr.splice(2,3); // 2번 자리부터 3개 cutting
console.log(arr, result);

// 객체 - Object
var obj = {};
obj.name = "juno";
obj.familyName = "Kim";
console.log(obj);

for(var key in obj){
  console.log(key, obj[key]);
}

var user = {
  name: 'juno',
  age : 26,
  addr: 'seoul',

  skill: function(){
    console.log('coding');
  }
};


// OOP - 추상화, 캡슐화
// Module이라는 객체가 이미 선언되어있으면 Module 객체
// Module변수에 대입되고, 없으면 {}에 대입
var Module = Module || {};
// _Modue 모듈에 setName, getName함수를 추가해줍니다.
// Module에서 setName, getName함수 호출이 가능
(function(_Module){
  var _name = 'juno';

  _Module.getName = function(){
    return _name;
  };

  _Module.setName = function(){
    _name = name;
  };
})(Module);
console.log(Module.getName());

// 함수
// 호이스팅 - hoisting : 변수가 함수보다 먼저 실행됨.(minus가 sum보다 먼저 실행됨)
function sum(num1, num2){
  return num1 + num2;
}
var result = sum(1,2);
console.log(result);

var minus = function(num1, num2){
  return num1 - num2;
};

// 스코프
var a = "dss1";
function disp(){
  a = "dss2"; // global variable
  console.log(a); // dss2

}
disp();
console.log(a); //dss2


var a = "dss1";
function disp(){
  var a = "dss2"; // local variable
  console.log(a); //dss2

}
disp();
console.log(a); //dss1

// 즉시 실행함수(익명함수)
// 자바스크립트는 프론트엔드 언어입니다.
// 여러분이 브라우져에서 함수를 마음대로 가져다가 쓸 수 있습니다
// 이를 방지하기 위해 즉시실행함수, 익명함수를 사용합니다.
(function(){
  // 자바스크립트는 문자열 사용시 웬만하면 ' '를 사용해주세요
  // html에서 ""를 사용하기 때문에 ''를 사용해줘야 충돌에러를 줄일 수 있습니다.
  var name = 'juno';
  var disp = function(){
    console.log(name);
  };
  disp();
})();
// 위 코드와 아래코드는 같음.
// but 아래처럼 코드를 짜면 web상에서 disp()사용될 수 있음.(외부인이 코드 접근 가능하게 됨)
// 그래서 익명함수를 사용(보안강화)
var name = 'juno';
var disp = function(){
  console.log(name);
};
disp();

// callback (콜백함수)
// 함수의 argument로 함수를 받아서 모든 코드를 실행한 후에
// argument로 받은 함수를 실행
function getData(callback, num1, num2){
  var result = num1 + num2;
  callback (result); // code가 끝나고 특정함수 실행
}

function disp(result){
  console.log(result);
}
function sqrt(result){
  console.log(result*result);
}

// 2와 3을 더하고 sqrt함수 실행결과값 출력
getData(sqrt, 2,3); // 25

// 클로져(팩토리패턴으로 객체 생성), 프로토타입, es6 문법
