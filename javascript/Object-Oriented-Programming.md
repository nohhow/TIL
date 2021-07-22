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


#Dev/web/javascript