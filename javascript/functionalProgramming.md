# 함수 지향
## 유효범위(Scope)
변수의 수명이라고 볼 수 있다.  

지역변수(local) - 함수 내 변수
전역변수(global) - 함수 밖 변수 

전역변수 사용보다 지역변수 사용을 지향할 것

## 유효범위의 대상
Java 에서는 { } 블록에 대한 유효범위를 제공하는 것이 일반적이지만
JavaScript에서는 그렇지 않다.

#### Javascript에서의 유효범위 확인

```
for(var i = 0; i < 1; i++){
    var name = 'coding everybody';
}
alert(name);

```
* 유효함

#### Java에서의 유효범위 확인 

```
for(int i = 0; i < 10; i++){
    String name = "egoing";
}
System.out.println(name);

```
* 유효하지 않음. 

## 정적 유효범위

자바스크립트는 함수가 선언된 시점에서의 유효범위를 갖는다.(사용될 때가 아님)
```
var i = 5;
 
function a(){
    var i = 10;
    b();
}
 
function b(){
    document.write(i);
}
 
a();

```

따라서 이 코드의 결과는 5 임.

function b()에서 i를 write 하고자 하지만 변수가 없다면, b()가 호출된 a()에서 변수를 찾게 되는 것이 아니라 전역변수 i를 참조하게 됨.

## 익명함수
불가피하게 전역변수를 사용해야 하는 경우가 발생하면 하나의 객체를 전역변수로 만들고 객체의 속성으로 변수를 관리하는 방법이 좋다.

이 때, 하나의 전역변수 마저도 허락하고 싶지 않다면 다음과 같이 코드를 묶어 함수로 만들고 바로 호출해버리는 방법을 사용한다. 이를 익명함수라고 한다.

변수를 사용하지 않기 때문에 변수명 혼선을 통한 예외 발생을 방지한다.

```
(function(){
	codes~
}())
```


- - - -


## 값으로서의 함수와 콜백
1. 함수는 변수에 저장가능함
2. 함수는 인자로서 호출가능함
3. 함수는 리턴 값으로 사용가능함
4. 함수는 배열 값으로 사용가능함
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
JavaScript에서는 함수도 객체이다. 즉, 함수도 일종의 값이다.

`function a() { }`는
`var a = function() { }` 이렇게 표현될 수도 있다.

함수는 일종의 값이기 때문에 다른 함수의 인자로 호출될 수 있다.
따라서 다음과 같은 패턴을 사용할 수도 있다.
```
function cal(func, num){
    return func(num)
}
function increase(num){
    return num+1
}
function decrease(num){
    return num-1
}
alert(cal(increase, 1));
alert(cal(decrease, 1));

```

반복되는 작업에 있어서 이렇게 함수를 작성한다면 보다 가독성 좋은 코드를 작성할 수 있을 것 같다.

### 콜백
[번역 JavaScript: 도대체 콜백이 뭔데?. 이 문서는 Brandon Morelli의 JavaScript: What… | by Ryu | Medium](https://medium.com/@oasis9217/%EB%B2%88%EC%97%AD-javascript-%EB%8F%84%EB%8C%80%EC%B2%B4-%EC%BD%9C%EB%B0%B1%EC%9D%B4-%EB%AD%94%EB%8D%B0-65bb82556c56)


#### 비동기 처리

더 필요한 공부 : Ajax


- - - -

## 클로저 (Closure)
```
function outter(){
    var title = 'coding everybody';  
    return function(){        
        alert(title);
    }
}
inner = outter();
inner();

```

이 코드를 살펴보면 이상한 점이 있다.(사실 이상한 일은 아니지만)

outter()에서 내부 함수 `function(){ alert(title)} `이 return 되고 inner라는 변수에 저장되는데,
inner() 함수 실행 시, ‘coding everybody’ 가 정상적으로 경고창에 나타난다.

이 때, 앞에서 말한 이상한 점은
inner에 저장된 함수 function(){ alert(title) } 에서는 title이라는 인자를 가지고 있는데, 분명히 inner는 이에 대한 정보가 없음에도 불구하고 정상적으로 동작한다. 이는 이미 호출이 종료 된 외부함수에 접근할 수 있음을 뜻한다.

-> 외부함수가 종료된 이후에도 내부함수를 통해서 접근할 수 있다.

### private 속성

기본적으로 JavaScript에서는 private 속성을 제공하고 있지 않지만 클로저의 특성을 이용하여 Private한 속성을 사용할 수 있다.
```
function factory_movie(title){
    return {
        get_title : function (){
            return title;
        },
        set_title : function(_title){
            title = _title
        }
    }
}

```
해당 코드에서 title이라는 변수에 접근하기 위해서는 get_title 메서드나 set_title 메서드를 통해서만 접근 가능하다.  -> private한 속성을 가짐

- - - -

## Arguments

자바스크립트는 굉장히 관대하기 때문에
매개변수를 지정하지 않더라도 인자를 대입했을 때, 오류가 나지 않는다.

```
function sum(){
    var i, _sum = 0;    
    for(i = 0; i < arguments.length; i++){
        document.write(i+' : '+arguments[i]+'<br />');
        _sum += arguments[i];
    }   
    return _sum;
}
document.write('result : ' + sum(1,2,3,4));

```

* sum() 함수에는 매개변수가 없으나, 인자를 넘겨도 오류가 나타나지 않음.
* for문 내부에 arguments는 인자로 전달한 값을 의미함.(egoing님은 유사배열이라고 표현)

여기서
sum.length 와 arguments.length는 다름.(sum.length = 0, arguments.length=4가 되겠다.)

- - - -

## 함수의 호출

1. 일반적인 호출 방법
```
function sum(arg1, arg2){
    return arg1+arg2;
}
```

호출
`sum(1,2)`
-> 3

2. apply
```
function sum(arg1, arg2){
    return arg1+arg2;
}
```

호출
`sum.apply (null, [1,2])`
-> 3

```
o1 = {val1:1, val2:2, val3:3}
o2 = {v1:10, v2:50, v3:100, v4:25}
function sum(){
    var _sum = 0;
    for(name in this){
        _sum += this[name];
    }
    return _sum;
}
alert(sum.apply(o1)) // 6
alert(sum.apply(o2)) // 185

```

this에 o1, o2 객체가 매치되어 sum 함수가 동작한다.
o1과 o2는 속성의 이름도 다르고 속성의 수도 다르지만 apply를 사용하여 호출함에 따라 하나의 sum 함수에서 같은 동작을 할 수 있다.


#Dev/web/javascript