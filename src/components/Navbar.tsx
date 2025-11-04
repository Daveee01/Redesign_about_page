import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md font-medium transition-all duration-300 ${
      isActive
        ? "bg-blue-600 text-white shadow-md"
        : "text-blue-600 hover:bg-blue-100"
    }`;

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-700">🎓 Student Dashboard</h1>
      <div className="space-x-3">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
        <NavLink to="/students" className={linkClass}>
          Students
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;