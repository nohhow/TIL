# 생활코딩 React Tutorial

##  학습 자료
http://wikibook.github.io/react

- 학습 목표 및 영상 자료 제공


## Create-react-app 구조 살피기

다음 명령어를 통해서 리액트 기본 구조를 가진 어플리케이션 생성 가능
`npx create-react-app my-app`

**실행**
`npm run start`


* 웹 브라우저에서 확인 가능한 페이지는 index.html이다.
* index.html에는 `<div id=“root”></div>`가 출력되도록 되어있는데, 기본적으로 src 디렉토리에 위치한 컴포넌트들이 이 <div>에 들어가도록 되어있다.
* 앱의 진입점은 index.js가 담당
* index.js에서 컴포넌트를 구성할 수 있는데 기본 구성에 App.js가 있다.
* App.js의 구조는 두 가지 방법으로 다음과 같이 구성될 수 있다.

### App.js 컴포넌트 구조1 (함수 방식)
```javascript
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

```

### App.js 컴포넌트 구조2 (클래스 방식)
```javascript
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

```


App js의 코드를 수정하면 다음과 같이 간단하게 화면 변화를 줄 수 있다.

![](React%20Tutorial/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-08-15%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.20.46.png)

App.js는 기본적으로 javascript를 기반으로 하긴 하지만
문법적으로 봤을 때, 순수하 자바스크립트가 아닌 유사 자바스크립트이다.

페이스북에서 만든 JSX(Javascript XML)라는 언어를 사용한 것이다.
이렇게 작성된 JSX는 create-react-app을 통해서 javascript로 번역된다고 이해하면 된다.


#Dev/web/React/생활코딩