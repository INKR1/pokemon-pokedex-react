import React from 'react'
import { useState } from 'react'

export default function Searchbar() {
const [search, setSearch] = useState("dito")

    const onChangeHandler = (e) => {
        setSearch(e.target.value);
    }

    const buttonClickHandler = (e) => {
        e.preventDefault();
        console.log(search);
        
    }
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input type="text" placeholder="Search for a Pokemon" onChange={onChangeHandler}/>
      </div>
      <div className="searchbar-button">
        <button onClick={buttonClickHandler}>Search</button>
      </div>
    </div>
  )
}
