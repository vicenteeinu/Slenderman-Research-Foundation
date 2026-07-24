import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      className="bg-linear-to-b from-gray-800 to-gray-900 px-6 border-b border-gray-950 shadow-lg"
    >
      <div className="flex items-center justify-between py-1 -translate-y-1.5">
        <p className="text-white text-2xl ml-1">
          Inside the woods. He watches for you
        </p>
        <ul className="text-white flex gap-6 justify-end mx-3 text-2xl -translate-y-1.5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/library">Library</Link>
          </li>
          <li>
            <Link to="/faqs">FAQs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
