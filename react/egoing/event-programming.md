# 이벤트 프로그래밍
### debugger
debugger라는 키워드를 사용하면 프로그램이 그 지점에서 실행을 멈추고 대기한다.

### 이벤트 객체
function() 함수에 첫 번째 매개변수의 값으로는 event라고 하는 객체를 주입해 주기로 약속돼 있다. 
function()에 e를 인자로 추가하면, 이 e가 바로 우리가 이벤트를 처리할 수 있도록 함수에 주입된 정보이다.

* e 객체는 기본적으로 preventDefault 라는 함수가 속해 있다.
* preventDefault는 이벤트가 발생한 태그의 기본적인 동작을 막는 기능을 수행한다.


### 컴포넌트에 이벤트 생성

컴포넌트에 이벤트를 생성하고, 재사용성도 높이기 위해서는 App 컴포넌트(부모 컴포넌트)에서 함수를 생성하여 자식 컴포넌트에 그 함수를 넘겨주고, 이를 onClick 이벤트 내부에서 props로 호출해주기만 하면 된다.


**부모 컴포넌트의 return 부분(props에 넘겨줄 함수 정의- 여기서는 onChangePage)**
```javascript
    return (
      <div className="App">
        <Subject 
            title={this.state.subject.title} 
            sub={this.state.subject.sub}
            onChangePage = {function() {
              this.setState({mode : 'welcome'});
            }.bind(this)}
            ></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );

```
  
**자식 컴포넌트(이벤트가 실제로 생성되는 곳)**
```javascript
class Subject extends Component {
    render() {
        console.log('Subject render');
        return (
            <header>
                <h1><a href="/" onClick={function(e) {
                    e.preventDefault();                 // a 태그 본래의 기능을 막는 역할
                    this.props.onChangePage();          // props를 통해서 onChangePage 이벤트를 호출하는 모습
                }.bind(this)}>{this.props.title}</a></h1>
                {this.props.sub}
            </header>
        );
    }
}

```


### 이벤트 사용의 필요성

* 상위 컴포넌트가 하위 컴포넌트에게 명령할 때에는 props를 사용한다. 
* 반대로 하위 컴포넌트가 상위 컴포넌트에 값을 전달하기 위해서는 이벤트를 사용해야한다. (이벤트 발생시에 상위 컴포넌트에서 setState가 이뤄지도록 하는 등) 

#Dev/web/React/생활코딩