import defaultImage from './default.jpg'
// Компонент
export default function Painting(props) {
    const {imgUrl = defaultImage, title, authorUrl, authorTag, price} = props;
    console.log(props);
  return (
    <div>
    <img src={imgUrl} alt={title} width='480'/>
    <h2>{title}</h2>
    <p>
      Автор: <a href={authorUrl}>{authorTag}</a>
    </p>
    <p>Цена:{price} кредитов</p>
    <p>Доступность: заканчивается или есть в наличии</p>
    <button type='button'>Добавить в корзину</button>
  </div>
  )
  }