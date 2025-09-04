import "../style/nav.css";

function OpenSearchBar() {
  const searchBar = document.getElementById("search-form");
  searchBar.style.width = "100%";
}

function Navigation() {
  return (
    <div>
      <nav className="navigation">
        <ul className="search-bar">
          <li>
            <form action="" id="search-form">
              <span
                onClick={OpenSearchBar}
                className="material-symbols-rounded"
              >
                search
              </span>
              <input type="search" placeholder="Search..." />
            </form>
          </li>
        </ul>
        <ul className="links">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Options</a>
          </li>
        </ul>
        <ul className="home-app-logo">
          <li>
            <a href="#">
              <span className="material-symbols-rounded">home_app_logo</span>
              <p>Skot.</p>
            </a>
          </li>
        </ul>
        <ul className="darkmode"></ul>
      </nav>
    </div>
  );
}

export default Navigation;
