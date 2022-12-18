import React, { useState } from "react";
import "./SearchBox.css";
import { searchMovieAction } from "../../redux-manager/Movies/action";
import { useDispatch } from "react-redux";

function SearchBox() {
  const [searchLine, setSearchLine] = useState("");
  const searchLineChangeHandler = (e) => {
    setSearchLine(e.target.value);
  };
  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
  };

  const dispatch = useDispatch();

  const searchFilm = () => {
    dispatch(searchMovieAction(searchLine));
  };

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
        <label className="search-box__form-label">
          Искать фильм по названию:
          <input
            value={searchLine}
            type="text"
            className="search-box__form-input"
            placeholder="Например, Shawshank Redemption"
            onChange={searchLineChangeHandler}
          />
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
          disabled={!searchLine}
          onClick={searchFilm}
        >
          Искать
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
