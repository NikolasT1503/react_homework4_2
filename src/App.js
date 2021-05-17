import "./App.css";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handlerClick = (event) => {
    setCounter(counter + 1);
  };

  const handlerMouseLeave = (event) => {
    console.log("handlerMouseLeave");
  };
  const handlerMouseEnter = (event) => {
    console.log("handlerMouseEnter");
  };

  const handlerHrefClick = (event) =>{
    console.log(event);
  }

  return (
    <div>
      <button
        onClick={handlerClick}
        onMouseEnter={handlerMouseEnter}
        onMouseLeave={handlerMouseLeave}
      >
        Эту кнопку нажали {counter} раз
      </button>
      <a href="http://google.com" onClick={handlerHrefClick}>Ссылка</a>
    </div>
  );
}

export default App;
