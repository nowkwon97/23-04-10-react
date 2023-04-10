// <div></div>대신 Fragment기능 사용
// import { Fragment } from 'react';
// <></>로도 사용 가능하다.


function App() {
  const name = undefined;
  return <div>{name || 'undefined 시 보이는 문구'}</div>;
}

export default App;
