import { Link } from "react-router-dom";

import GitHubIcon from "../Icons/GitHubIcon";

export function Header() {
  return (
    <header>
      <div className="container">
        <div className="header__main">
          <Link to="/" className="header__logo">
            <GitHubIcon />
          </Link>
          <div className="separator" area-hidden="true">/</div>
          <Link to="/">GitHub Universe</Link>
        </div>
        <Link className="header__btn btn btn-outline" to="/">Watch on demand</Link>
      </div>
    </header>
  )
}