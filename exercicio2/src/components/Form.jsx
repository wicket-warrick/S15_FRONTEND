import { useState } from "react";

export const Form = ({ setContent }) => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({
    title: "",
    body: "",
    userId: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    console.dir(value);
    setPost({
      ...post,
      [e.target.name]: value,
    });
  };

  const upLoadArticle = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const article = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            title: post.title,
            body: post.body,
            userId: parseInt(post.userId),
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (!article.ok) {
        setError("could not post data to API");
        return;
      }
      if (!post.title || !post.body || !post.userId) {
        setError("formulario incorrecto");
        return;
      }
      const articleUpload = await article.json();

      // const newContent = [...content, articleUpload];
      setContent((content) => {
        return [...content, articleUpload];
      });
      setError("");
      setPost({ title: "", body: "", userId: "" });
    } catch (error) {
      setError("could not POST data ");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={upLoadArticle}>
      <label htmlFor="title">titulo:</label>
      <input
        placeholder="título..."
        type="text"
        name="title"
        id="title"
        value={post.title}
        required
        autoFocus
        onChange={handleChange}
      />
      <br />
      <label htmlFor="body">noticia:</label>
      <textarea
        placeholder="noticia..."
        type="text"
        name="body"
        maxLength={1000}
        value={post.body}
        id="body"
        required
        onChange={handleChange}
      />
      <br />
      <label htmlFor="userId">userId:</label>
      <input
        placeholder="userId"
        type="number"
        name="userId"
        id="userId"
        required
        value={post.userId}
        onChange={handleChange}
      />
      <button>subir arituclo</button>
      {loading ? <p>Enviando datos...</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};
