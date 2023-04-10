// <div></div>대신 Fragment기능 사용
// import { Fragment } from 'react';
// <></>로도 사용 가능하다.


function App() {
  const name = '리액트';
  return (
    <>
      <h1>마 {name} 잘 지내나!</h1>
      <h2>잘 작동하니?</h2>
    </>
  )
}

export default App;
