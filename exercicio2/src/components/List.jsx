export const List = ({ content }) => {
  return content.length ? (
    <ul>
      {content
        .slice(0)
        .reverse()
        .map((post, index) => {
          return (
            <li key={index}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          );
        })}
    </ul>
  ) : (
    <p>no results</p>
  );
};
