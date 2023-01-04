import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav>
      <div>
        <h1 className="website-name">Shantae Merch Tracker</h1>
      </div>
      <div>
        <Link className="link" to="merchandise">
          Merchandise
        </Link>
        <Link className="link" to="checklist">
          Your Checklist
        </Link>
      </div>
    </nav>
  );
}
