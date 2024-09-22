import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-center lg:absolute lg:right-0 pt-5 pr-6 text-gray-700">
      <Link to="/" className="hover:text-primary-100">
        🏠︎
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/projects" className="hover:text-primary-100">
        🕮
      </Link>
    </header>
  )
}