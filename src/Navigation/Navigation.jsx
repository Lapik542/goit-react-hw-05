import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";

const Navigation = ({buildLinkClass}) => {
  return (
    <>
    <nav>
      <ul className={css.mainNavPages}>
        <NavLink to="/homepage" className={buildLinkClass}>
          Home
          </NavLink>
        <NavLink to="/movies-page" className={buildLinkClass}>
          MoviesPage
          </NavLink>
        <NavLink to="/*" className={buildLinkClass}>
          NotFoundPage
          </NavLink>
      </ul>
    </nav>
    </>
  );
};

export default Navigation;
