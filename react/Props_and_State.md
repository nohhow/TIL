# Props

부모 컴포넌트가 자식 컴포넌트에게 값을 전달할 때 사용

<Child value=“value” />

App.js (부모)
```
import React, { Component } from "react";
import MyName from './MyName';

class App extends Component {
  render() {
    return <MyName name="리액트" />;
  }
}

export default App;

```

MyName.js (자식)
```
import React, { Component } from 'react';

class MyName extends Component {
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b>입니다.
      </div>
    );
  }
}

export default MyName;

```


## props default 반환값 설정
1) Component 내부에서 선언
```
  static defaultProps = {
    name: "기본이름"
  };

```
2) Component 외부에서 선언
```
MyName.defaultProps = {
  name: "기본이름"
};
```

동작은 동일하다.

## 함수형 컴포넌트
```
import React from "react";

const MyName = ({name}) => {
  return (
    <div>안녕하세요! 제 이름은 {name} 입니다.</div>
  );
};

MyName.defaultProps= {
  name : 'baldmosquito'
};
export default MyName;

```

- 메모리 자원 절약 가능
- 속도가 미세하게 빠름


# State
Props가 읽기 전용이라고 생각한다면
State는 내부에 코드가 위치하고 있고 setState를 통해서 변화를 줄 수 있다.

```
import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0
  };

  // 아래에서 handleIncrease를 화살표 함수로 작성하는 이유는 this에 대한 명시가 필요하기 때문
  // 일반 함수로 작성하면 아래와 같은 추가적인 코드 작성이 필요함.
  // constructor는 함수를 불러올 때 호출됨. => 여기서 this에 대한 명시를 해둘 수 있음.

  // constructor(props){
  //   super(props);
  //   this.handleIncrease = this.handleIncrease.bind(this);
  //   this.handleDecrease = this.handleDecrease.bind(this);
  // }
  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  };
  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값 : {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;

```


#인프런/누구든지하는리액트
