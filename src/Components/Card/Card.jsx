import "./Card.css";

const Card = ({ movie }) => {
  // const { Title, Year, Poster } = movie;

  return (
    <div className="card-container">
      <img src={movie.Poster} alt="" />
      <h1>{movie.Title}</h1>
      <p>{movie.Year}</p>
    </div>
  );
};

export default Card;
