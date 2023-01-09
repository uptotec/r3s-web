import React from 'react';

function Switch({ view, setView }) {
  return (
    <div className="buttons">
      <button
        value="growth"
        onClick={(e) => setView(e.target.value)}
        className={view === 'growth' ? 'active' : null}
      >
        Growth rate
      </button>
      <button
        value="leaf"
        onClick={(e) => setView(e.target.value)}
        className={view === 'leaf' ? 'active' : null}
      >
        Leaf Area
      </button>
    </div>
  );
}

export default Switch;
