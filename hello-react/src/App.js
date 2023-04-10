import MyComponent from "./MyComponent";

const App = () => {
  // props 에 값을 할당하지 않을 시 MyComponent.js에서 설정한 기본값이 들어간다.
  return <MyComponent />;
};

export default App;