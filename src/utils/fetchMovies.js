const categories = ["popular", "top_rated", "now_playing", "upcoming"];
const token = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzFkMTZhZTc4NmMwZjU0MTAyMGYzMmNhNDg3MDBiYSIsInN1YiI6IjYxN2IyZDkxYzE0ZmVlMDA2M2Y5ZTk5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ICs_jjI_I2ZNjSOdbhxddWidSH6Khct1VBD-MjEromk`;

function getMovies(id) {
  return fetch(`https://api.themoviedb.org/3/movie/${categories[id]}`, {
    headers: { authorization: `Bearer ${token}` },
  })
    .then((response) => {
      if (!response.status === 200) {
        console.log(`Error with the request! ${response.status}`);
        return;
      }
      return response.json();
    })
}

export const searchMovies = (term) => {
  return fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${term}`, {
    headers: {
      'Accept': 'application/json',
      'authorization': `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.status === 200) {
        console.log(`Error with the request! ${response.status}`);
        return;
      }
      return response.json();
    })
}
export default getMovies;
