import { useState } from "react";
import Card from "./Components/Card";
// import { searchMovies } from "./utils/fetchMovies";


const App = () => {
  const [activeBtn, setActiveBtn] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  // const [searchTerm, setSearchTerm] = useState('a');


  const handleButtonClick = (id) => {
    setActiveBtn(id);
  };

  const handleSearchProcess = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <div className="page-wrapper">
        <div className="nav-wrapper">
          <div className="grad-bar"></div>
          <nav className="navbar">
            <h2>MOVIESPOT</h2>
          </nav>
        </div>
      </div>
      <article className="background-image container">
        <header className="container__header background-image__hover">
          <div className="container__header__content">
            <h1>Welcome.</h1>
            <p>
              Millions of movies, TV shows and people to discover. Explore
              now.
            </p>
          </div>
          <input onChange={handleSearchProcess} type="search" placeholder="Search" />
        </header>
      </article>
      <div className="😐">
        <div className="heading">
          <h2>Trending</h2>
          <div className="today-week">
            <div
              className={activeBtn === 0 ? "active" : ""}
              onClick={() => handleButtonClick(0)}
            >
              Now Playing
            </div>
            <div
              className={activeBtn === 1 ? "active" : ""}
              onClick={() => handleButtonClick(1)}
            >
              Popular
            </div>
            <div
              className={activeBtn === 2 ? "active" : ""}
              onClick={() => handleButtonClick(2)}
            >
              Top Rated
            </div>
            <div
              className={activeBtn === 3 ? "active" : ""}
              onClick={() => handleButtonClick(3)}
            >
              Upcoming
            </div>
          </div>
        </div>
        <Card id={activeBtn} term={searchTerm} />
      </div>
    </>
  )
}

export default App;
