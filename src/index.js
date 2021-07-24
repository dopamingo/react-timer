import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Input from './input';
import Timer from './timer';
import './styles.css';

// BrowserRouter - history API를 사용해 URL과 UI를 동기화하는 라우터입니다.
// Route - 컴포넌트의 속성에 설정된 URL과 현재 경로가 일치하면 해당하는 컴포넌트, 함수를 렌더링한다.
// Link - 'a'태그와 비슷합니다. to속성에 설정된 링크로 이동합니다. 기록이 history스택에 저장됩니다.

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path = "/" component = {Input} exact />
			<Route path = "/timer" component = {Timer} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);