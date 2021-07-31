# prototype
* prototype = 원형
* prototype은 상속의 구체적인 수단이다.

상속( [상속 - 상속](bear://x-callback-url/open-note?id=C1AB8DAE-A15B-4532-B095-46209FDE3E42-52425-0000D98E025D1A1F&header=%EC%83%81%EC%86%8D) )에서 살펴봤던 것처럼,
prototype은 다음과 같은 호출이 가능하도록 해준다.
이러한 것을 보고 prototype chain이라고 부른다.

```javascript
function Ultra(){}
Ultra.prototype.ultraProp = true;
 
function Super(){}
Super.prototype = new Ultra();
 
function Sub(){}
Sub.prototype = new Super();
 
var o = new Sub();
console.log(o.ultraProp);

```

## prototype chain
prototype chain의 동작은 다음과 같은 순서로 일어난다.

1. 객체 o 에서 ultraProp이 있는지 찾는다. 없다면 2
2. Sub.prototype.ultraProp를 찾는다. 없다면 3
3. Super.prototype.ultraProp를 찾는다. 없다면 4
4. Ultra.prototype.ultraProp를 찾는다. 

객체에 접근 하는 순서는 어찌보면 당연하다.
핵심은 이러한 체인 역할을 하는 것이 prototype이라는 것이다.
  
## 주의해야할 점
예를 들어서
`Sub.prototype = new Super()`라고 하지 않고. 
`Sub.prototype = Super.prototype`이라고 정의한다면,  
문제가 발생할 수 있다. 
  
Sub.prototype의 값을 변경했을 때 그 변경된 값이 Super.prototype에 영향을 미칠 수 있기 때문이다. 
  
따라서 이 점을 유의해야 한다.
(즉, 복제품을 사용해야하지.. 원본을 가져와서 사용하면 안 된다.)

+ 위에서 다뤘던 예제들은 효용성 있는 예제가 아님을 주의

#Dev/web/javascript