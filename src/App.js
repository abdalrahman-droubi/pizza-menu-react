import "./index.css";
import data from "./data.json";
import { useState } from "react";
const { pizzaData } = data;
function App() {
  console.log(pizzaData);
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1> Fast react pizza co.</h1>;
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu </h2>
      <ul className="pizzas">
        {pizzaData.map((ele, index) => (
          <Pizzas data={ele} key={index} />
        ))}
      </ul>
    </main>
  );
}

function Footer() {
  const [date, setDate] = useState();

  setTimeout(() => {
    setDate(new Date().toLocaleTimeString());
  }, 1000);
  return <footer className="footer"> {date} we are currently open</footer>;
}
function Pizzas({ data }) {
  return (
    <li className="pizza">
      <img src={data.photoName} alt={data.name} />
      <>
        <h3>{data.name}</h3>
        <p>{data.ingredients}</p>
        <span>{data.price}</span>
      </>
    </li>
  );
}

export default App;
