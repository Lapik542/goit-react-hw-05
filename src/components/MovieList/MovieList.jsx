
import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  const elements = movies.map(({ id, title }) => (
    <ul key={id}>
      <Link className={css.link} to={`/movies/${id}`} state={{ from: location }}>
        <div>
          {title}
        </div>
      </Link>
    </ul>
  ));

  return elements;
};

export default MovieList;
