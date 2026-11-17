// About
// Child of: App
// Shows the blog logo and a short description inside an <aside> element.
// Props:
//   image (string) - URL/data of the logo. Falls back to a placeholder
//                    image if none is passed (default parameter value).
//   about (string) - the text describing the blog, shown in a <p>.

function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      {/* alt text keeps the image accessible for screen readers */}
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
