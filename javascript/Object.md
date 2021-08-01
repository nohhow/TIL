# Object
* Object 라는 객체는 배열과 비슷한 그릇 역할의 container 중 하나이다.
* Object는 아무것도 상속받지 않는 순수한 객체
* Object라는 객체는 모든 객체의 부모이다.
* Object.prototype은 모든 객체들의 prototype이 된다. 즉 모든 객체의 원형이 된다.
> Object가 가지고 있는 메서드 중에 prototype이 끼어있는 것은 모든 객체가 상속받고 있는 공통의 기능이다. 하지만 prototype이 끼어있지 않는다면, 그러하지 않다. (ex. Object.keys())  


## Object 확장 예제
추가해 볼  `Object.prototype.contain`에 대해서 알아보면. 
contain 메서드는 문자열을 인자로 받고, 그 값이 객체가 가지고 있는 값에 포함되는 지를 확인하고, T or F로 반환하는 역할을 한다.   
> 원래 Object.prototype.includes()가 하는 역할임  

```javascript
Object.prototype.contain = function(neddle) {
    for(var name in this){
        if(this[name] === neddle){
            return true;
        }
    }
    return false;
}
var o = {'name':'egoing', 'city':'seoul'}
console.log(o.contain('egoing'));
var a = ['egoing','leezche','grapittie'];
console.log(a.contain('leezche'));

```

contain이 동작하는 것에 있어서 우리가 자유롭게 변경해 볼 수 있다. 특정 문자열에 대해서 반응하게 한다던가, 혹은 반환값에 대해서 변경해줄 수 있다.
  
하지만 이는 다소 위험하고 권장되지 않는 방법이다. 왜냐하면 **모든 객체**에 영향을 미치기 때문이다.
  
따라서 객체가 기본적으로 가지고 있는 객체인지 아닌지 판단할 수 있는 메서드를 기본 메서드로 제공하고 있는데,  
`hasOwnProperty()`를 사용하면 된다.(True or False)
  
아래 예제 참고
```
for(var name in o){
    if(o.hasOwnProperty(name))
        console.log(name);  
}
```
 


#Dev/web/javascript