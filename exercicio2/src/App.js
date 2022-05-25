import { useEffect, useState } from "react";
import "./App.css";
import { List } from "./components/List";
import { Form } from "./components/Form";
import loadingIcon from "./loading.svg";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const _getArticles = async () => {
      setError("");
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!data.ok) {
          setError("could not post data");
          return;
        }
        const dataArticles = await data.json();
        setArticles(dataArticles);
      } catch (error) {
        setError("could not get data from API");
      } finally {
        setLoading(false);
      }
    };
    _getArticles();
  }, []);

  return loading ? (
    <img src={loadingIcon} alt="loading" />
  ) : (
    <main>
      {error ? (
        <p style={{ backgroundColor: "red", color: "white", padding: "1rem" }}>
          {error}
        </p>
      ) : null}
      <section className="upload">
        <Form content={articles} setContent={setArticles} />
      </section>
      <section className="posts">
        <List content={articles} />
      </section>
    </main>
  );
}

export default App;
