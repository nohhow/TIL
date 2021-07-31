# 상속

상속(inheritance) = 물려받는 것  
상속은 기존의 로직(부모객체)을 수정하고 변경해서 파생된 새로운 객체를 만들 수 있게 해준다.  
-> 재활용

## Property 생성 방법을 달리 해보자.
원래 코드
```javascript
function Person(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is '+this.name; 
    }   
}
var p1 = new Person('nohhow');
document.write(p1.introduce()+"<br />");

```

결과
`My name is nohhow`

생성방법을 바꾼 코드(상속을 받기 위한 준비)
```javascript
function Person(name){
    this.name = name;
}
Person.prototype.name=null;
Person.prototype.introduce = function(){
    return 'My name is '+this.name; 
}
var p1 = new Person('egoing');
document.write(p1.introduce()+"<br />");

```


## 상속, 어떻게 사용하는가?
어떠한 객체를 상속받고 싶다면, 그 객체를 생성자의 prototype에 할당 시켜주면 된다.
아래에서 핵심 코드는 `Programmer.prototype = new Person();`라고 볼 수 있겠다.

```javascript
function Person(name){
    this.name = name;
}
Person.prototype.name=null;
Person.prototype.introduce = function(){
    return 'My name is '+this.name; 
}
 
function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person();
 
var p1 = new Programmer('egoing');
document.write(p1.introduce()+"<br />");

```

## 상속 후 기능 추가
상속 받은 객체에서 상속한 객체와 달리 추가적인 기능을 추가하고 싶은 경우에는
상속 받은 객체의prototype의 메소드를 부여하여 기능을 추가할 수 있다.

아래 코드에서 이 부분이 해당한다. (맥락에 맞는 기능 추가)
```
Programmer.prototype.coding = function(){
    return "hello world";
}
```

```javascript
function Person(name){
    this.name = name;
}
Person.prototype.name=null;
Person.prototype.introduce = function(){
    return 'My name is '+this.name; 
}
 
function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function(){
    return "hello world";
}
 
var p1 = new Programmer('egoing');
document.write(p1.introduce()+"<br />");
document.write(p1.coding()+"<br />");

```


#Dev/web/javascript
