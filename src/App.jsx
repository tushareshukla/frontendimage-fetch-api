import { useEffect, useState } from "react";
import "./App.css";
import ImageComponent from "./assets/Component/ImageComponent";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return <div className="card-container" style={{ margin: "0px 200px"}}>
  <ImageComponent/>
  <ImageComponent/>
  <ImageComponent/>
  <ImageComponent/>
  </div>;
}

export default App;
