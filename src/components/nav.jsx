import "../style/nav.css";

function OpenSearchBar() {
  const searchBar = document.getElementById("search-form");
  searchBar.style.width = "100%";
}

function OpenMenuLinks() {
  const menuLinks = document.getElementById("menu-links");
  menuLinks.style.display = "flex";
  menuLinks.style.flexFlow = "column nowrap";
}
function CloseMenuLinks() {
  const menuLinks = document.getElementById("menu-links");
  menuLinks.style.display = "none";
}

function Navigation() {
  return (
    <nav className="navigation">
      {/* links */}
      <ul className="links-list">
        <li className="search-bar">
          <span className="material-symbols-rounded">search</span>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
          />
        </li>
        <li className="links">
          <a href="#">About</a>
          <a href="#">Collections</a>
          <a href="#">Services</a>
          <a href="#">Options</a>
        </li>
        <li className="menu">
          <span onClick={OpenMenuLinks} className="material-symbols-rounded">
            more_vert
          </span>

          <div className="menu-links" id="menu-links">
            <span onClick={CloseMenuLinks} className="material-symbols-rounded">
              close
            </span>
            <a href="#">About</a>
            <a href="#">Collections</a>
            <a href="#">Services</a>
            <a href="#">Options</a>
          </div>
        </li>
      </ul>
      {/* logo */}
      <ul className="home-app-logo">
        <li>
          <a href="#">
            <span className="material-symbols-rounded">home_app_logo</span>
            <p>Skot.</p>
          </a>
        </li>
      </ul>
      {/* actions */}
      <ul className="actions-list">
        <li>
          <button className="darkmode">
            <span className="material-symbols-rounded">dark_mode</span>
          </button>
        </li>
        <li className="contact">
          <a href="#">
            <p>Contact</p>
            <span className="material-symbols-rounded">call</span>
          </a>
        </li>
        <li className="cart">
          <a href="#">
            <p>Cart</p>
            <span className="material-symbols-rounded">shopping_basket</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
