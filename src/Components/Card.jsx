import { useState, useEffect } from "react";
import getMovies from "../utils/fetchMovies";
// import { searchMovies } from "../utils/fetchMovies";

// eslint-disable-next-line react/prop-types
const Card = ({ id, term }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMovies(id)
      .then(data => setData(data.results))

    // searchMovies(term)
    //   .then((res) => setData(res.results))

  }, [id])

  // eslint-disable-next-line react/prop-types
  const filteredData = data.filter(movie => movie.original_title.toLowerCase().includes(term.toLowerCase()));

  if (!data) {
    return <div>loading</div>
  }

  return (
    <div className="cards">

      {filteredData?.map((film) => (

        <div className="card" key={film.id} >
          <div className="percentage">
            {film.vote_average}<span>%</span>
          </div>
          <div>
            <img
              className="poster"
              alt=""
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${film.backdrop_path}`}
            />
          </div>
          <div className="content">
            <div className="title">{film.original_title}</div>
            <p>12-10-2025</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card
