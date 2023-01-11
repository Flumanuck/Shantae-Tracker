import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav className="navbar centered">
      <div>
        <h1 className="website-name">Shantae Merch Tracker</h1>
      </div>
      <div className="links">
        <Link className="link top-link" to="merchandise">
          Merchandise
        </Link>
        <Link className="link" to="checklist">
          Your Checklist
        </Link>
      </div>
    </nav>
  );
}
