import React, { useState, useEffect } from "react";

function Content() {
  const [highscore, setHighscore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [win, setWin] = useState(false);
  const [cards, setCards] = useState([
    {
      name: "Nao Tomori",
      url: "./assets/images/nao.jpg",
      source: "Charlotte",
      color: "rgb(118, 150, 255)",
      clicked: false,
      id: 0,
    },
    {
      name: "Bronya",
      url: "./assets/images/bronya.jpg",
      source: "Honkai Impact",
      color: "rgb(192,192,192)",
      clicked: false,
      id: 1,
    },
    {
      name: "Karuizawa Kei",
      source: "Classroom of the Elite",
      url: "./assets/images/kei.jpg",
      color: "rgb(236, 211, 96)",
      clicked: false,
      id: 2,
    },
    {
      name: "Elysia",
      source: "Honkai Impact",
      url: "./assets/images/elysia.jpg",
      color: "rgb(229, 170, 247)",
      clicked: false,
      id: 3,
    },
    {
      name: "Yukihana Lamy",
      source: "Hololive",
      color: "rgb(104, 170, 255)",
      url: "./assets/images/lamy.webp",
      clicked: false,
      id: 4,
    },
    {
      name: "Suzuhara Lulu",
      source: "Nijisanji",
      color: "rgb(83, 194, 111)",
      url: "./assets/images/lulu.jpg",
      clicked: false,
      id: 5,
    },
    {
      name: "Yoimiya",
      source: "Genshin Impact",
      color: "rgb(233, 91, 91)",
      url: "./assets/images/yoimiya.jpg",
      clicked: false,
      id: 6,
    },
    {
      name: "Joe Rikiichi",
      source: "Nijisanji",
      color: "rgb(252, 241, 93)",
      url: "./assets/images/rikiichi.png",
      clicked: false,
      id: 7,
    },
    {
      name: "Kiana Kaslana",
      source: "Honkai Impact",
      color: "rgb(231, 125, 63)",
      url: "./assets/images/kiana.jpg",
      clicked: false,
      id: 8,
    },
    {
      name: "Raiden Ei",
      source: "Genshin Impact",
      url: "./assets/images/ei.jpg",
      color: "rgb(160, 88, 255)",
      clicked: false,
      id: 9,
    },
  ]);

  function handleClick(item) {
    if (item.clicked === false) {
      let localScore = highscore + 1;
      setHighscore(highscore + 1);

      if (localScore === 9) {
        setWin(true);
      }

      if (localScore > bestScore) {
        setBestScore(bestScore + 1);
      }

      setCards((current) =>
        current.map((obj) => {
          if (obj.id === item.id) {
            return { ...obj, clicked: true };
          }

          return obj;
        })
      );
    } else {
      setHighscore(0);
      resetClickedValue();
    }
  }

  function resetClickedValue() {
    setCards((current) =>
      current.map((obj) => {
        if (obj.clicked === true) {
          return { ...obj, clicked: false };
        }

        return obj;
      })
    );
  }

  function cardsFunc() {
    let shuffled = cards
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return shuffled.map((item) => {
      return (
        <div key={item.id} onClick={() => handleClick(item)}>
          <img src={item.url} alt={`${item.name}'s card`}></img>
          <p style={{ color: item.color }}>{item.name}</p>
          <p>{item.source}</p>
        </div>
      );
    });
  }

  function setDefault() {
    setHighscore(0);
    setBestScore(0);
    setWin(false);
    resetClickedValue();
  }

  return (
    <div className="game-content">
      <div className="game-content-highscore">
        <p className="game-score">Score: {highscore}</p>
        <p className="game-best-score">Best: {bestScore}</p>
      </div>
      <div className="game-content-cards-container">
        {win === false ? (
          cardsFunc()
        ) : (
          <div className="win-div">
            <h1>You Won!</h1>
            <button onClick={() => setDefault()}>Play Again?</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Content;
