// App
// Root component. Imports the blog data from data/blog.js and passes the
// right pieces down to its children as props:
//   Header      <- name
//   About       <- image, about
//   ArticleList <- posts   (ArticleList then renders an Article per post)

import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
