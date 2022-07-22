import React from 'react'

export default function Pages() {
  return (
    <div className="pages-container">
      <button onClick={() => {}}>
        <div>
          <svg className="arrow arrow-left">
            <use xlinkHref="#arrow"></use>
          </svg>
        </div>
      </button>
      <div>1 in 3</div>
      <button onClick={() => {}}>
        <div>
          <svg className="arrow">
            <use xlinkHref="#arrow"></use>
          </svg>
        </div>
      </button>
    </div>
  )
}
