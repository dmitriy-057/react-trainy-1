import ReactDOM from 'react-dom';
import App from './App';
// Особенность Реакт 18
// import { createRoot } from 'react-dom/client';
// const container = document.querySelector("#root");
// const root = createRoot(container);
//Реакт 18
// root.render(
//  <App />,
//   )

ReactDOM.render(
<App />, 
document.querySelector("#root"));