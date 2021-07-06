# 정규표현식

정규표현식(regular expression)은 문자열을 처리하는 방법 중 하나로 특정한 조건의 문자를 ‘검색’하거나 ‘치환’하는 과정을 매우 간편하게 처리 할 수 있도록 하는 수단이다.

## 정규표현식 패턴들
https://zvon.org/comp/r/tut-Regexp.html#Pages~Contents

## 실습 사이트
[RegExr: Learn, Build, & Test RegEx](https://regexr.com/v1)

### ^ and $

source  
`who is who`

정규표현식 : ^who  
-> First match : **who** is who  
-> All match : **who** is who  

정규표현식 : who$  
-> First match : who is **who**  
-> All match : who is **who**  
  
- - - -

### escape ^ and & : \
역슬래쉬를 통해서 문자화 시켜줌!

source   
`$12$\-\$25$`

정규표현식 : ^$  
-> First match : no match  
-> All match : no match  

정규표현식 : \$  
-> First match : **$**12$\-\$25$  
-> All match : **$**12**$**\-\**$**25**$**  


- - - -

### .
. 은 어떠한 문자에도 매치가 된다.  

source  
`Regular expression are powerful!!!`  


정규표현식 : .  
-> First match : **R**egular expression are powerful!!!  
-> All match : **Regular expression are powerful!!!**  

정규표현식 : ……  
-> First match : **Regula**r expression are powerful!!!  
-> All match : **Regular expression are powerf**ul!!!  
(6개의 any character가 매치되다가 6개가 채 안되는 ul!!!은 선택되지 않았다.)  

- - - -


### []
[] 내부의 문자는 중에 하나이다.  

source  
`How do you do?`  

정규표현식 : [oyu]  
-> First match : H**o**w do you do?  
-> All match : H**o**w d**o you** d**o**?  

정규표현식 : [dH].  
-> First match : **Ho**w do you do?  
-> All match : **Ho**w **do** you **do**?  

- - - -

### [ - ]  
[A-K] 는 A부터 K까지를 말한다.  

source  
`ABCDEFGHIJKLMNOP`  

정규표현식 : [A-K]  
-> First match : **A**BCDEFGHIJKLMNOP  
-> All match : **ABCDEFGHIJK**LMNOP  

- - - -

### [^]  
대괄호 내부의 캐럿 기호는 NOT을 의미한다.  

source  
`ABCDEFGHIJKLMNOP`  

정규표현식 : [^B-K]  
-> First match : **A**BCDEFGHIJKLMNOP  
-> All match : **A**BCDEFGHIJK**LMNOP**  

- - - -

### ( | )
소괄호 내부에서 파이프 기호를 사용하면 원하는 문자에 대해서 선택할 수 있다.


source  
`Monday Tuesday Friday`  

정규표현식 : (on|ues|rida)  
-> First match : M**on**day Tuesday Friday  
-> All match : M**on**day T**ues**day F**rida**y  

- - - -

### 수량자 : * + ?

- C*  : 0 ~ 여러 개   
- C+ : 1 ~ 여러 개   
- C?  : 0 ~ 1  
** C : 문자를 의미함.  

수량자와 여러가지 기호들을 혼합하여 다양한 ‘수량제어식’을 표현할 수 있다.  

source  
`-@- *** — “*” — *** -@-`  

정규표현식 : 	.*  
-> First match : **-@- * — “*” — * -@-**  
-> All match : **-@- * — “*” — * -@-**  

- - - -

### 수량자 : {number}

수량자 * + ? 를 대체할 수 있다.  

source  
`This is the day`  

정규표현식 : {3}  
-> First match : **Thi**s is the day  
-> All match : **This is the day**  

정규표현식 : [etd]{1,3} = e,t,d 세 문자가 1개 이상 3개 이하 포함.  
-> First match : This is **t**he day  
-> All match : This is **t**h**e** **d**ay  

정규표현식 : [a-z]{3,} = a~z 문자를 3개 이상 포함.  
-> First match : T**his** is the day  
-> All match : T**his** is **the** **day**  

- - - -

### 수량자 응용

source  
`This is the day`  

정규표현식 : h.*  
-> First match : T**his is the day**  
-> All match : T**his is the day**  

정규표현식 : h.*? = *의 의미가 0~여러개에서 0이 된다. 따라서 h만 매칭하는 패턴이됨.  
-> First match : T**h**is is the day  
-> All match : T**h**is is t**h**e day  

정규표현식 : h.+? = +의 의미가 1~여러개에서 1이 된다.   
-> First match : T**hi**s is the day  
-> All match : T**hi**s is t**he** day  

정규표현식 : h.+? = +의 의미가 1~여러개에서 1이 된다.   
-> First match : T**hi**s is the day  
-> All match : T**hi**s is t**he** day  

정규표현식 : h.?? = ?의 의미가 0~1개에서 0이 된다.  
-> First match : T**h**is is the day  
-> All match : T**h**is is t**h**e day  


#### ‘?’를 결합한 수량자는 왜 사용하는 것일까?

source  
`<div>test</div><div>test2</div>`  

정규표현식 : <div>.+</div>  
-> match : **<div>test</div><div>test2</div>**  
: 탐욕적인(greedy) 수량자  

정규표현식 : <div>.+?</div>  
-> match : **<div>test</div>**<div>test2</div>  
: 게으른(lazy) 수량자  

- - - -

### \w

\w의 w는 word이며, 이는 (alpanumeric plus “_”) 를 의미, (공백은 word에 해당하지 않음)  
\w == [A-z0-9_]   

source  
`A1 B2 c3 d_4 e:5 ffGG77—__—`  

정규표현식 : \w  
-> First match : **A**1 B2 c3 d_4 e:5 ffGG77—__—  
-> All match : **A1 B2 c3 d_4 e**:**5 ffGG77**—**__**—  

- - - -

### \W

\w의 반대 의미, word가 아닌 것들을 지정(공백 포함)  
\W == [^A-z0-9_]  

- - - -

### \d , \s

\d는 숫자를 지정, \D는 반대  
\s는 문자를 지정, \S는 반대  

- - - -

### \b, \B

\b는 단어가 아닌, 단어의 경계에 대응된다.(대응된다고 말하지만 실제로 어떤 것이 매칭되지는 않고 위치를 가리킨다.)

source  
`regular expression is cool`  

정규표현식 : \b\w.  
-> First match : **re**gular **ex**pression **is** **co**ol  
-> All match : **re**gular **ex**pression **is** **co**ol  


\B는 단어의 경계가 아닌 것에 대응된다.(대응된다고 말하지만 실제로 어떤 것이 매칭되지는 않고 위치를 가리킨다.)  


- - - -

### \A, \Z

\A : source의 가장 첫 부분을 의미  
\Z : source의 가장 마지막 부분을 의미    

\A와 ^의 차이 : ^은 멀티 라인 상황에서 각 행의 첫 부분을 매치하지만, \A는 전체 source에서 첫 부분을 의미한다.    
\Z와 $의 차이 : 위와 같이 이해할 수 있다.  

- - - -

### (?=<pattern>)

조건을 부여하여 제한된 범위까지 매치하고자 할 때 사용할 수 있을 것 같다.  
조건문처럼 ?=<pattern>이 만족되면 매치하고, 만족되지 않으면 거른다.  

source   
`AAAX—aaax—111`  

정규표현식 : \w+(?=X)  
-> First match : **AAA**X—aaax—111  
-> All match : **AAA**X—aaax—111  
  
- - - -

### (?!<pattern>)

 (?=<pattern>)의 반대로, 조건이 만족되면 거르고, 만족되지 않으면 매치한다.  
흔히 알고있는 !을 NOT의 개념으로 보면 될 것 같다.  
  
source  
`AAAX—AAA`  

정규표현식 : AAA(?!X)  
-> First match : AAAX—**AAA**  
-> All match : AAAX—**AAA**  


#Dev/web/javascript
