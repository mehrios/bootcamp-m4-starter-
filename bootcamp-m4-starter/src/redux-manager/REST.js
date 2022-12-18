export const fetchFilmName = async (filmName) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${filmName}&apikey=b14a1940`
  );
  const data = await response.json();

  return data;
};

export const sendFavoritFilms = async (favoritListName, filmList) => {
  const info = {
    title: favoritListName,
    movies: filmList,
  };

  const response = await fetch(
    "https://acb-api.algoritmika.org/api/movies/list",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(info),
    }
  );

  const data = await response.json();

  return data;
};

export const getFavoritFilmsId = async (listId) => {
  const response = await fetch(
    `https://acb-api.algoritmika.org/api/movies/list/${listId}`
  );
  const data = await response.json();

  return data;
};

export const getFavoritFilmInfo = async (filmId) => {
  const response = await fetch(
    `http://www.omdbapi.com/?i=${filmId}&apikey=b14a1940`
  );
  const data = await response.json();

  return data;
};
