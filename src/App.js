import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const actors = ["Anower", "mosarrof", "Jongli", "Zombi", "Modon"];
  const products = [
    { name: "photoshop", price: "$45" },
    { name: "Illustrator", price: "$145" },
    { name: "Adobe Xd", price: "$245" },
    { name: "Adobe AO", price: "$345" },
  ];
  const productName = products.map((products) => products.name);
  const actorsName = actors.map((actor) => actor);
  console.log(actorsName);
  console.log(productName);
  return (
    <div className="App">
      <header className="App-header">
        <p>i'm a react Dev</p>
        <Counter> </Counter>
        <Users> </Users>
        <ul>
          {actorsName.map((actor) => (
            <li>{actor}</li>
          ))}
          {products.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
        {products.map((product) => (
          <Product product={product}> </Product>
        ))}
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
function Users() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
  };
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h4>{price} </h4>
      <button>Buy Now</button>
    </div>
  );
}

export default App;
