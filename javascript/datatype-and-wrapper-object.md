# 데이터 타입
### 데이터 타입의 구분
1. 객체인 것 - **객체 데이터 타입** = 참조 데이터 타입
2. 객체가 아닌 것 - **원시 데이터 타입** = 기본 데이터 타입

**원시 데이터 타입**
- 숫자 
- 문자열
- 불리언
- null
- undefined

이외의 것들은 모두 객체 데이터 타입이다.

- - - -

## 레퍼 객체

앞에서 원시 데이터 타입은 객체가 아니라고 했다.
하지만 다음 코드를 살펴보면, Object access operator를 사용함(객체로 사용하겠다는 의도를 보임)에 있어서 문자열이 객체로 인식되고 실행된다.

```javascript
var str = 'coding';
console.log(str.length);        // 6
console.log(str.charAt(0));     // "C"

```

이는 자바스크립트 자체에서 임시로 문자열 객체를 만들고 사용이 끝나면 제거하기 때문에 그렇게 동작하는 것이다.

즉 `var str = 'coding`이라는 문장이
`var str = new String 'coding'`이렇게 되는 것이다.

이것이 일시적으로 동작한다는 것을 보여주는 예시는 다음과 같다.
```javascript
var str = ‘coding’;
str.prop = ‘everybody’;
console.log(str.prop);      // undefined
```

`str.prop = ‘everybody’`를 통해서 문자열이 담긴 변수 str을 객체처럼 사용하겠노라 하였으고, 실제로 이는 error를 발생시키지 않고 다음 행으로 넘어갈 수 있다.
하지만 정작 `console.log(str.prop)`에서는 undefined이라는 결과가 표시된다. 
즉 str은 원래의 원시 데이터 타입으로 돌아갔기 때문이다.

> 원시 데이터 타입을 마치 객체처럼 사용하려고 할 때, 자바스크립트 내부적으로 자동으로 만들어지는 객체를 레퍼객체(wrapper object)라고 한다.  

### Wrapper Object
* 숫자 = Number
* 문자열 = String
* 불리언 = Boolean
* null -> x
* undefined -> x

#Dev/web/javascript