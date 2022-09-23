import './NavBar.css' 

function NavBar (){
    return (
        <div className="page">
  <nav className="page__menu menu">
    <ul className="menu__list r-list">
      <li className="menu__group"><a href="#0" className="menu__link r-link text-underlined">Home</a></li>
      <li className="menu__group"><a href="#0" className="menu__link r-link text-underlined">About</a></li>
      <li className="menu__group"><a href="#0" className="menu__link r-link text-underlined">Gallery</a></li>
      <li className="menu__group"><a href="#0" className="menu__link r-link text-underlined">Contact</a></li>
    </ul>
  </nav>
  {/* <nav className="page__menu page__custom-settings menu">
    <ul className="menu__list r-list">
      <li className="menu__group"><a href="#0" className="menu__link r-link text-underlined">Home</a></li>
      <li className="menu__group"><a href="#0" className="menu__link r-link text-underlined">About</a></li>
      <li className="menu__group"><a href="#0" className="menu__link r-link text-underlined">Gallery</a></li>
      <li className="menu__group"><a href="#0" className="menu__link r-link text-underlined">Contact</a></li>
    </ul>
  </nav> */}
</div>

      );
}

export default NavBar;