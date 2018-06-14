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
// Module이라는 객체가 이미 선언되어있으면
var Module = Module || {};
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
