// Сюда импортируются все компоненты
import Painting from "./components/Painting";
import paintings from "./paintings.json";

export default function App() {
return <div>
    {paintings.map(painting => (
    <Painting 
    key={painting.id}
    imgUrl={painting.url} 
    title={painting.title} 
    authorUrl={painting.author.url} 
    authorTag={painting.author.tag}
    price={painting.price}
    quantity={painting.quantity}
    />
    ))}
</div>
}

