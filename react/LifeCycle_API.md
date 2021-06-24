# LifeCycle API 

LifeCycle = 생명주기
1. 나타날 때
2. 업데이트 될 때
3. 사라질 때
-> Android Studio에서 onCreate, onDestroy, onCancelled 등과 비슷하다.

크게 세 가지로 구분
1. Mounting
2. Updating
3. Unmounting

- constructor - 컴포넌트 초기 설정, 컴포넌트 만들어지는 과정에서 미리해야하는 것들 수행
- getDerivedStateFromProps - props에서 받은 값을 state에 올리고 싶을 때 사용 가능
- render - 어떤 dom을 만들지, 내부 태그는 어떤 값을 전달할지
* componentDidMount  - 주로 외부 라이브러리를 사용할 때 주로 사용
* shouldComponentUpdate - 컴포넌트가 업데이트되는 상황에서 성능 최적화 시킬 때 사용,(Virtual DOM에 기록할지 말지 결정)
* componentDidUpdate - 이전의 상태와 지금의 상태가 다르면, ~를 수행하겠다. 등으로 사용가능
* componentWillUnmount - Mounting단계에서 리스닝 설정해둔것에 대한 해지 등


#인프런/누구든지하는리액트