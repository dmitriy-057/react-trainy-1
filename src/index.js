import React from 'react';
// В Реакт 18 импорт ReactDOM не нужен
// import ReactDOM from 'react-dom';
import './index.css';
// для относительного импорта
// import App from './App';
//для именованого импорта
import { App2 } from './App2';



// Особенность Реакт 18
import { createRoot } from 'react-dom/client';
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(
 <App2 />,
  )

// ReactDOM.render(
// <React.StrictMode>
// {/* <App /> */}
//     <App2 />
// </React.StrictMode>,
// document.querySelector("#root")
// );

