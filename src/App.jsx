import './App.css'
import ProductCard from './components/ProductCard/ProductCard'

let bag = {
  hot: true,
  image: "https://i.imgur.com/xdbHo4E.png",
  category: "Women,bag",
  title: "WOMEN LEATHER BAG",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
  price: 230.99,
  price_sold: 89.99
}

function App() {

  return (
    <>
      <ProductCard {...bag} />
    </>
  )
}

export default App
