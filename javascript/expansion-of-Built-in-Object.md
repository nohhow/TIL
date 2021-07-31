# 표준 내장 객체의 확장
* 표준 내장 객체 : javascript에서 제공하는 기본 객체

### 내장 객체 종류
* Object
* Function
* Array
* String
* Boolean
* Number
* Math
* Date
* RegExp

우리는 내장 객체, 우리가 생성하는 객체, 그리고 호스트가 제공하는 api 등을 활용하여 개발한다.

여기서 우리가 필요에 따라 생성하는 객체를 **사용자 정의 객체**라고 한다.
그리고 사용자 정의 객체는 표준 내장 객체의 반대가 되는 의미라고 볼 수도 있다.

그런데, **사용자 정의 객체+표준 내장 객체**가 혼합된 형태의 객체가 존재할 수 있다.

### 배열의 확장

배열 객체 원형에 새로운 메서드를 추가해볼 것이다.

> 배열에서 특정한 값을 랜덤하게 추출하는 코드  
```javascript
var arr = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');
function getRandomValueFromArray(haystack){
    var index = Math.floor(haystack.length*Math.random());
    return haystack[index]; 
}
console.log(getRandomValueFromArray(arr));

```

이 코드를 그대로 Array 내장 객체에 prototype을 이용하여 메서드를 추가해보면 다음과 같이 작성할 수 있다.
```javascript
Array.prototype.random = function(){
    var index = Math.floor(this.length*Math.random());
    return this[index];
}
var arr = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');
console.log(arr.random());

```

Array라는 기본 객체에 사용자가 추가하고 싶은 메서드를 추가하고 배열을 생성하여 활용할 때에 추가한 메서드를 이용하여 원하는 기능을 수행할 수 있도록 할 수 있다. 
  
이러한 과정을 통해서 필수적으로 생성해야하는 배열을 생성함과 동시에 우리가 원하는 기능을 정의한 메서드를 사용할 수 있다.

#Dev/web/javascript