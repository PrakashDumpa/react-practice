import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
      <nav className="bg-gray-400 text-xl py-6 text-white">
        <ul className="flex flex-row justify-around">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/counter">Counter</NavLink>
          </li>
          <li>
            <NavLink to="/todo">Todo</NavLink>
          </li>
          <li>
            <NavLink to="/id">Id</NavLink>
          </li>
          <li>
            <NavLink to="/redux">ReduxToolKit</NavLink>
          </li>
          <li>
            <NavLink to="/apicall">ApiUsingRedux</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
