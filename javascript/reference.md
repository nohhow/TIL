# 참조
## 복제
프로그램 내부에서 복제는 어떻게 사용되는가?

```javascript
var a = 1;
var b = a;
b = 2;
console.log(a); // 1
```

b에 a를 저장하였는데, 당연하게도 a를 출력했을 때는 b의 값과 상관없이 a는 처음 그대로의 값을 가진다.  
왜냐하면 `var b = a`의 동작이 a 자체가 복제된 것이 아니라, a가 가지는 값을 복제하여 넣어준 것이기 때문이다.  
또한 1 이라는 숫자가 원시 데이터 타입이기 때문에 이에 대한 접근이 더 이상 불가능한 것이라고 볼 수도 있다.

그렇다면 참조의 경우는 어떨까?

## 참조
```javascript
var a = {'id':1};
var b = a;
b.id = 2;
console.log(a.id);  // 2
```
 
a라는 변수에 id값이 1인 객체를 할당했다.  
그리고 `b = a` 라고 했을 때,  b에 담긴 property 값을 변경하는 것으로 a에 담긴 property 값을 변경할 수 있었음을 확인할 수 있다.

이것을 참조라고 한다.  
  
복제는 각각의 변수가 각각의 값을 가리킨다면. 
참조는 각각의 변수가 하나의 값을 가리키고 있다.  
이는 c언어에서 포인터를 이해할 때와 비슷한 맥락으로 이해할 수 있을 것 같다.

![2227](https://user-images.githubusercontent.com/61059893/127763271-6f787c81-7969-4865-90b6-532e6fec1c86.png)


## 함수
원시 데이터 타입을 인자로 넘길 때
```javascript
var a = 1;
function func(b){
    b = 2;
}
func(a);
console.log(a);
```

참조 데이터 타입을 인자로 넘길 때
```javascript
var a = {'id':1};
function func(b){
    b = {'id':2};
}
func(a);
console.log(a.id);  // 1
```

자, 여기서는 참조 데이터 타입을 가지는 a를 b로 넘겼으나
`a.id`의 값에는 변화가 생기지 않았다. 왜냐하면 `b = {'id'=2}`가 선언됨에 따라서 같은 곳을 가리키고 있던 a 와 b가 다른 값을 가리키게 되었기 때문이다.

하지만 아래의 경우에는 다르다.
```javascript
var a = {'id':1};
function func(b){
    b.id = 2;
}
func(a);
console.log(a.id);  // 2
``` 

-> 이 때는 a와 b가 같은 값을 가리킨다.


#Dev/web/javascript
