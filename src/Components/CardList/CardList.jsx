import Card from "../Card/Card";
import "./CardList.css";

const CardList = ({ movies }) => (
  <div className="card-list">
    {movies.map((movie) => {
      return <Card key={movie.imdbID} movie={movie} />;
    })}
  </div>
);

export default CardList;
