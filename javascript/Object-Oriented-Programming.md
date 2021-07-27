# 객체지향
#### 객체지향의 기본개념
객체지향 프로그래밍(Object-Oriented Programming)은 좀 더 나은 프로그램을 만들기 위한 프로그래밍 패러다임으로 로직을 상태(state)와 행위(behave)로 이루어진 객체로 만드는 것

* **객체**는 **변수**와 **메소드**를 그룹핑한 것.

#### KEYWORD
* 추상화
* 부품화
* 은닉화, 캡슐화
* 인터페이스

- - - -
  
## 생성자와 new

* 생성자 : 객체를 만드는 역할을 하는 함수
* javascript에서는 java와 달리 Class 가 없다.

#### 예시 코드
```
function Person(){}
var p = new Person();
p.name = 'nohhow';
p.introduce = function(){
    return 'My name is '+this.name; 
}
document.write(p.introduce());

```

## 전역객체
* 알게 모르게 사용하고 있는 암시적 존재, 전역객체(window)
* 객체를 명시하지 않으면 암시적으로 window의 프로퍼티로 간주됨.
* node.js에서는 global이라는 이름으로 전역객체가 존재

## apply, call
### 함수도 객체다.
함수 객체
`var sum = new Function('x','y', 'return x+y;);`
* 생성자를 통해서 함수 객체 생성
* 마지막에 등장하는 인자가 함수의 본문에 해당한다.(나머지는 매개변수가됨)

하지만 일반적으로 함수 객체를 작성할 때는
`function sum(x,y){return x+y;}`
이런식으로 작성한다.
이를 함수 리터럴이라고 한다. Function Literal

일반적으로 객체를 작성하거나 배열을 작성할 때에도 마찬가지이다.
`var o ={}` 이나 `new Object`
`var a = [1,2,3]` 이나 `new Array(1,2,3)` 가 같은 의미인 것도 마찬가지이다. 

이러한 문법적 체계를 literal이라고 함.

apply를 통한 this값 제어
```javascript
var o = {}
var p = {}
function func(){
    switch(this){
        case o:
            document.write('o<br />');
            break;
        case p:
            document.write('p<br />');
            break;
        case window:
            document.write('window<br />');
            break;          
    }
}
func();
func.apply(o);
func.apply(p);
```

결과
```
window
o
p
```
#Dev/web/javascript