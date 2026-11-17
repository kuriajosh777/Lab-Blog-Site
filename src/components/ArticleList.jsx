// ArticleList
// Child of: App    Parent of: Article
// Turns the array of posts into a list of Article components inside <main>.
// Props:
//   posts (array) - each post has: id, title, date, preview, minutes

import Article from "./Article";

function ArticleList({ posts = [] }) {
  return (
    <main>
      {/* map() makes one <Article> per post.
          key must be unique, so we use the post's id. */}
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}

export default ArticleList;
