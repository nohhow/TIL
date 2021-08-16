# props
props는 객체 지향에서 부모 객체를 상속 받아 적절히 코드를 변환해서 사용하는 개념과 비슷하게 생각하면 된다.

```javascript
class Subject extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                {this.props.sub}
            </header>
        );
    }
}

``` 
```javascript
class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="한남대학교 공지모아" sub="한남대학교의 모든 공지사항을 한 페이지에서 확인하자~"></Subject>
        <Subject title="한남대학교 뉴스모아" sub="한남대학교 관련 뉴스기사를 모두 한눈에~"></Subject>
      </div>
    );
  }
}

```


위의 예시를 살펴보면 Subject라는 컴포넌트를 생성하고 부분적인 요소에  {this,props.something} 이라고 작성함으로써 이 컴포넌트를 호출하여 사용하는 곳에서 이 요소를 입맛에 맞게 적용하여 사용할 수 있도록 한다. 
> 컴포넌트를 재사용할 수 있도록 한다 : props  


#Dev/web/React/생활코딩