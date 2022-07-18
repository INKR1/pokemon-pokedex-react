import React from "react";
import { useState } from "react";

export default function Searchbar(props) {
  const { onSearch } = props;
  const [search, setSearch] = useState("dito");

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const buttonClickHandler = (e) => {
    e.preventDefault();
    onSearch(search);
  };
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search for a Pokemon"
          onChange={onChangeHandler}
        />
      </div>
      <div className="searchbar-button">
        <button onClick={buttonClickHandler}>Search</button>
      </div>
    </div>
  );
}
