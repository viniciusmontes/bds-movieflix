import { Link } from 'react-router-dom';

import './styles.css';

const MovieCatalog = () => {
  return (
    <>
      <div className="movie-catalog-container">
        <div className="movie-catalog-content">
          <h1>Tela de listagem de filmes</h1>
          <Link to="/movies/1">
            Acessar /movies/1<br></br>
          </Link>
          <Link to="/movies/2">Acessar /movies/2</Link>
        </div>
      </div>
    </>
  );
};

export default MovieCatalog;
