const MovieCast = ({ cast }) => {
    return (
      <div>
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={`${actor.name} profile`}
                style={{ width: 300, height: 450, objectFit: 'cover' }}
              />
              <p>{actor.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default MovieCast;
  