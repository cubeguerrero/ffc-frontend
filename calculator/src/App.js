import React from 'react';
import './App.css';

function App() {
  return (
    <div className="Calculator">
      <div className="Display">
        <div className="Display_Header"></div>
        <div className="Display_Main" id="display"></div>
      </div>
      <div className="Pad">
        { /* first row */}
        <button className="Button">
          AC
        </button>
        <button className="Button">
          +/-
        </button>
        <button className="Button">
          /
        </button>
        { /* second row */}
        <button className="Button">
          7
        </button>
        <button className="Button">
          8
        </button>
        <button className="Button">
          9
        </button>
        <button className="Button">
          X
        </button>
        { /* third row */}
        <button className="Button">
          4
        </button>
        <button className="Button">
          5
        </button>
        <button className="Button">
          6
        </button>
        <button className="Button">
          -
        </button>
        { /* fourth row */}
        <button className="Button">
          1
        </button>
        <button className="Button">
          2
        </button>
        <button className="Button">
          3
        </button>
        <button className="Button">
          +
        </button>
        { /* fourth row */}
        <button className="Button">
          0
        </button>
        <button className="Button">
          .
        </button>
        <button className="Button">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
