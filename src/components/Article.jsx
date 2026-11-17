// Article
// Child of: ArticleList
// Shows one blog post preview inside an <article> element.
// Props:
//   title   (string) - post title, shown in an <h3>
//   date    (string) - post date, shown in a <small>.
//                      Defaults to "January 1, 1970" if none is passed.
//   preview (string) - short preview text, shown in a <p>
//   minutes (number) - BONUS: estimated reading time in minutes.
//                      If missing, the "min read" line is not shown.

// Builds the emoji string for the "minutes to read" bonus feature.
//  - Under 30 minutes: one coffee cup per 5 minutes (rounded up)
//  - 30 minutes or more: one bento box per 10 minutes (rounded up)
function getReadingTime(minutes) {
  if (minutes < 30) {
    const cups = Math.ceil(minutes / 5);
    return "☕️".repeat(cups) + ` ${minutes} min read`;
  }
  const boxes = Math.ceil(minutes / 10);
  return "🍱".repeat(boxes) + ` ${minutes} min read`;
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date}
        {/* Only show reading time when a minutes value was provided */}
        {minutes ? ` • ${getReadingTime(minutes)}` : null}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
