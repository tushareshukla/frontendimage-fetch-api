import { useEffect, useState } from "react";
import "./App.css";
import ImageComponent from "./assets/Component/ImageComponent";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
    )
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="card-container" style={{ margin: "120px 190px" }}>
      {posts.map((post) => (
        <ImageComponent
        profile={post.author.avatar}
          key={post.id}
          imageUrlBig={post.thumbnail.large}
          imageUrl={post.thumbnail.small}
          title={post.title}
          author={post.author.name}
          role={post.author.role}
          description={post.content}
          imageDate={new Date(post.date * 1000).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
        />
      ))}
    </div>
  );
}

export default App;
