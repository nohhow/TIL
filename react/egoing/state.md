# state
기본적으로 어떠한 제품에 대해서 생각해보면
**구현자**와 **사용자**로 구분하여 생각할 수 있다.

구현자는 여러가지 메커니즘을 가지고 제품이 동작하도록 할 것이며 사용자는 이러한 제품을 조작하며 사용하게 된다.

여기서 **props**는 ‘사용자가 컴포넌트를 사용하는 입장에서 중요한 것’이고
**state**는 ‘props의 값에 따라 내부 구현에 필요한 데이터’ 라고 정의 할 수 있다.


props와 state는 기본적으로 값을 전달하는 것과 관련이 있다.

react에서는 재사용 가능한 모듈 형태인 컴포넌트를 사용하기 때문에 이들 간에 데이터를 전달하는 것은 중요한 일이다.

state와 props는 예제를 통해서 어떤 역할을 수행하는 지 살펴보고 이해하는 것이 가장 경제적이고 효율적인 학습이 될 것 같다.

## state 의 이해

아래는 create-react -app에서의 App.js 기본 클래스이다.
```javascript
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title: '한남대학교 공지모아', sub: '한남대학교의 모든 공지사항을 한 페이지에서 확인하자~'}
    }
  }
  render() {
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
      </div>
    );
  }
}

```

위 코드에서 생소한 부분이 있는데,
`constructor()` 메소드이다. 이는 state를 사용하기 위해서 필요하다.
constructor는 App이 `render()`메소드를 호출하기 전에 먼저 호출하게 되며, 주로 state 값을 초기화한다.  
> 즉, constructor는 컴포넌트가 실행될 때 이 함수가 가장 먼저 실행되어 초기화를 담당한다.  

위의 코드처럼 constructor를 구성하고 state 값을 부여해준 후 Subject 컴포넌트의 특성에 `title={this.state.subject.title}`과 같은 형태로 값을 넣어주면, state에 초기화해둔 값이 인자로 전달되어 Subejct 컴포넌트에서 state가 가진 값을 적용하여 동작하고 그 결과를 다시 App.js 로 넘겨준다.

이러한 미묘한 관계에 있는 것이 바로 props와 state 이다.


## 조금 더 복잡도가 높은 state 사용 예제

```javascript
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title: '한남대학교 공지모아', sub: '한남대학교의 모든 공지사항을 한 페이지에서 확인하자~'},
      contents:[
        {id:1, title:'공지사항', desc:'Notice for Everything'},
        {id:2, title:'학사공지', desc:'HakSa Notice'},
        {id:3, title:'장학공지', desc:'JangHak Notice'}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC data={this.state.contents}></TOC>
      </div>
    );
  }
}

```

이번에는 state에 contents 항모글 추가하고, TOC에 state 값을 TOC props에 넘겨주고 이를 반환받는 것까지를 살펴볼 수 있는 예제이다.
기본적인 동작의 이해는 단순하지만 props로 받아온 값을 TOC 컴포넌트 내부에서 간단한 로직을 통해서 표시할 정보를 가공하는 과정이 추가된다. 다음은 TOC 컴포넌트이다.

```javascript
class TOC extends Component {
    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i<data.length) {
            lists.push(<li key={data[i].id}><a href={"/content/" + data[i].id}>{data[i].title}</a></li>);
            i = i + 1;
        }

        return(
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

```


App 에 state로 저장된 값을 props로 던져줬고, 이를 받은 TOC는 data라는 변수에 이를 저장한 후, 간단한 반복문을 통해서 list에 이 값들을 원하는 형태로 가공했다. 그리고
`return()`부에서 이를 적절히 사용하여 화면에 표시될 데이터를 표현했다.

state와 props 간의 복잡한 로직은 아니지만, 이런 식으로 활용 가능하다는 것을 보여준다.


### state의 특징

* state값이 변경되면 render()가 다시 호출된다.
  
  state의 값이 바뀌면 그 state를 가지고 있는 컴포넌트의 render 함수가 다시 호출된다. 그리고 render 함수가 다시 호출되면 그 하위 컴폰넌트들의 render 함수 또한 다시 호출되어 화면이 그려진다.

* react에게 state가 변경되었음을 알려줘야한다.

`this.state.mode = “welcome”;` 이 아닌
`this.setState({mode : “welcome”});` 이렇게 작성해야 한다.
그 이유는 state 객체의 요소에 대한 초기화를 render에서 시도한다고 한들, state가 담겨있는 constructor는 render보다 앞서 실행되어있기 때문에, 이는 제대로 초기화될 수 없는 것이다. 

따라서 setState를 사용하는 것임을 기억하자. 
기억하자 `setState()`

(추가로 this.setState에서 this를 사용하기 위해서는 함수().bind(this)를 별도로 작성할 필요가 있었다. 왜냐하면 function(e) 는 이름이 없는 함수이기 때문, 즉 이 함수 내부에서 this는 원래 undefined임)
  





#Dev/web/React/생활코딩