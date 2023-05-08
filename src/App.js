// Сюда импортируются все компоненты
import Painting from "./components/Painting";
import paintings from "./paintings.json";

export default function App() {
return <div>
    <Painting 
    imgUrl={paintings[0].url} 
    title={paintings[0].title} 
    authorUrl={paintings[0].author.url} 
    authorTag={paintings[0].author.tag}
    price={paintings[0].price}
    />
    <Painting 
    imgUrl={paintings[1].url} 
    title={paintings[1].title} 
    authorUrl={paintings[1].author.url} 
    authorTag={paintings[1].author.tag}
    price={paintings[1].price}
    />
    <Painting 
    imgUrl={paintings[2].url} 
    title={paintings[2].title} 
    authorUrl={paintings[2].author.url} 
    authorTag={paintings[2].author.tag}
    price={paintings[2].price}
    />
</div>
}