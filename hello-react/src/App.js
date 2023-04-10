// <div></div>대신 Fragment기능 사용
// import { Fragment } from 'react';
// <></>로도 사용 가능하다.


function App() {
  const name = '리액트';
  return (
    <>
    {name === '리액트' ? (
      <h1>리액트 입니다.</h1>
    ) : (
      <h2>리액트가 아닙니다.</h2>
    )}
    </>
  )
}

export default App;
