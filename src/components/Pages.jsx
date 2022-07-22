import React from 'react'

export default function Pages({ page, totalPages, clickedLeft, clickedRight }) {
  return (
    <div className="pages-container">
      <button onClick={clickedLeft}>
        <div>
          <svg className="arrow arrow-left">
            <use xlinkHref="#arrow"></use>
          </svg>
        </div>
      </button>
      <div>{page} of {totalPages}</div>
      <button onClick={clickedRight}>
        <div>
          <svg className="arrow">
            <use xlinkHref="#arrow"></use>
          </svg>
        </div>
      </button>
    </div>
  )
}
