# Learning Front-End TDD

투두 앱을 이용한 TDD 단순 예제

## 목차

- [기능](#기능)
- [시작하기](#시작하기)
  - [필수 조건](#필수-조건)
  - [설치](#설치)
- [애플리케이션 실행](#애플리케이션-실행)
- [테스트 실행](#테스트-실행)
- [폴더 구조](#폴더-구조)
- [라이선스](#라이선스)

## 기능

- 새로운 할 일 추가
- 할 일 목록 보기

## 시작하기

### 필수 조건

- node v20.11.1

### 설치

1. 레포지토리를 클론합니다:

```bash
$ git clone https://github.com/lcgyung/study-frontend-tdd.git
$ cd todo-app
```

2. 의존성을 설치합니다:

```bash
$ yarn
```

3. 애플리케이션을 실행합니다:

```bash
$ yarn start
```

4. 테스트를 실행하려면 다음 명령어를 사용하세요:

```bash
$ yarn test
```

## 폴더 구조

프로젝트 폴더 구조는 다음과 같습니다.

```java
todo-app/
├── src/
│   ├── __tests__/
│   │   └── TodoApp.test.tsx
│   ├── components/
│   │   ├── TodoInput/
│   │   ├── TodoList/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.tsx
├── public/
│   ├── index.html
│   └── ...
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

- src/: 애플리케이션의 소스 파일들.
  - **tests**/: 테스트 파일들이 위치한 디렉터리.
  - components/: React 컴포넌트들이 위치한 디렉터리.
  - index.tsx: React 애플리케이션의 진입점.
  - setupTests.ts: 테스트 설정 파일.
- public/: 정적 파일들이 위치한 디렉터리.
- .gitignore: Git이 무시할 파일들을 지정.
- package.json: 프로젝트 의존성 및 스크립트를 나열.
- tsconfig.json: TypeScript 설정 파일.
