import React from "react";

export default function Navbar() {
  const logoImg = "https://sg.portal-pokemon.com/img/common/logo.png";
  return (
    <nav>
      <div>
        <img src={logoImg} alt="Pokemon-logo" className="navbar-img" />
      </div>
      <div>
        <svg className="pokeball">
          <use xlinkHref="#likedPokeball"></use>
        </svg>
      </div>
    </nav>
  );
}
