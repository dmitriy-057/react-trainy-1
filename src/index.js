import ReactDOM from 'react-dom';
import paintings from "./paintings.json";

// Компонент
function Painting(props) {
return (
  <div>
  <img src="" alt="{data.title}" width='480'/>
  <h2></h2>
  <p>
    Автор: <a href=" "></a>
  </p>
  <p>Цена:кредитов</p>
  <p>Доступность: заканчивается или есть в наличии</p>
  <button type='button'>Добавить в корзину</button>
</div>
)
}


ReactDOM.render(<Painting />, document.querySelector("#root"));

// =======================
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
