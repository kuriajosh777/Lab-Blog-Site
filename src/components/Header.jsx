// Header
// Child of: App
// Shows the blog name inside a <header> element.
// Props: name (string) - the title of the blog, shown in an <h1>.

function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
