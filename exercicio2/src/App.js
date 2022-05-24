import { useEffect, useState } from "react";
import "./App.css";
import { List } from "./components/List";
import { Form } from "./components/Form";
import { Loading } from "./components/Loading";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const _getArticles = async () => {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!data.ok) {
          throw new Error("could not get data from API");
        }
        const dataArticles = await data.json();
        setArticles(dataArticles);
      } catch (error) {
        console.error(error.menssage);
      }
    };
    _getArticles();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>API REST</h1>
      </header>
      <main>
        <section className="upload">
          <Form content={articles} setContent={setArticles} />
        </section>
        <section className="posts">
          {articles.length === 0 && <Loading />}

          <List content={articles} />
        </section>
      </main>
    </div>
  );
}

export default App;
