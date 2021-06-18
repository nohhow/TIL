# React-Native 개발환경설정

1. HomeBrew 설치
2. Node.js 설치 (설치됨) PASS
3. watchman 설치
Watchman은 특정 폴더나 파일을 감시하다가 변화가 생기면, 특정 동작을 실행하도록 설정하는 역할을 합니다. react-native에서는 소스코드의 추가, 변경이 발생하면 다시 빌드하기 위해 Watchman을 사용하고 있습니다.
4. React Native CLI 설치 
`sudo npm install -g react-native-cli` // 권한 필요함. sudo

5. Xcode 설치 (AppStore)
6. Cocoapods 설치
Cocoapods는 iOS 개발에 사용되는 의존성 관리자입니다.
`sudo gem install cocoapods`
`pod --version` // 버전 확인

-> 안될경우

`sudo gem install -n /usr/local/bin cocoapods`

8. JDK 설치 
`brew tap AdoptOpenJDK/openjdk`
`brew install --cask adoptopenjdk8`


`javac --version` // 버전확인



9. AndroidStudio SDK설치
- PATH 설정!
- 새롭게 설치한 자바로 HOME 지정해주기
- [Android 디버그 브리지(adb)  |  Android 개발자  |  Android Developers](https://developer.android.com/studio/command-line/adb?hl=ko)
- adb가 실행되어야 하는데 PATH 설정이 올바르지 않으면 실행되지 않음.
![](React-Native_SETUP/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-06-19%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%204.24.53.png)

### 프로젝트 생성
`npm config set save-exact=true` // 버전 고정
`react-native init SampleApp`

안드로이드에서 실행
`npm run android`

ios에서 실행
`npm run ios`

![](React-Native_SETUP/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-06-19%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%204.33.30.png)

#Dev/web/React
