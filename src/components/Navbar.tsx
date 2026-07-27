import { NavLink } from "react-router-dom";

export default function NavBar() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-red-400 underline underline-offset-4"
        : "text-white"
    }`;

  return (
    <nav className="bg-linear-to-b from-gray-800 to-gray-900 px-6 border-b border-gray-950 shadow-lg">
      <div className="flex items-center justify-between py-1 -translate-y-1.5">
        <p className="text-white text-2xl ml-1">
          Inside the woods. He watches for you
        </p>

        <ul className="flex gap-6 justify-end mx-3 text-2xl -translate-y-1.5">
          <li>
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/library" className={navLinkClass}>
              Library
            </NavLink>
          </li>

          <li>
            <NavLink to="/faqs" className={navLinkClass}>
              FAQs
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}