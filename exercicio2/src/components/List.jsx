import { nanoid } from "nanoid";
export const List = ({ content }) => {
  return content
    .slice(0)
    .reverse()
    .map((post) => {
      return (
        <li key={nanoid(10)}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      );
    });
};
