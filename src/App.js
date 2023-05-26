import { useState, useEffect } from "react";
import "./styles/App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import cardArray from "../src/api/emojies";

function App() {
  const [shuffle, setShuffle] = useState([]);
  const [cardSelected, setCardSelected] = useState([]);
  const [isBingo, setIsBingo] = useState(false);

  useEffect(() => {
    cardShuffle(cardArray);
  }, []);

  /* shuffling cards function */

  const cardShuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      if (i === (array.length - 1) / 2) {
        i--;
      }
      const indexSwap = Math.floor(Math.random() * i);
      if (indexSwap !== (array.length - 1) / 2) {
        [array[i], array[indexSwap]] = [array[indexSwap], array[i]];
      }
    }

    setShuffle(array);
    setCardSelected([...cardSelected, (array.length - 1) / 2]);
  };

  /* Handle win function */

  const handleWin = () => {
    setIsBingo(true);
    setTimeout(() => {
      setIsBingo(false);
    }, 3500);
  };

  return (
    <div className="bingo__container">
      <Header isBingo={isBingo} />
      <div className="bingo__cards-container">
        {shuffle.map((card, index) => {
          return (
            <>
              <Card
                key={index}
                desc={card}
                index={index}
                setCardSelected={setCardSelected}
                cardSelected={cardSelected}
                handleWin={handleWin}
                setIsBingo={setIsBingo}
                isBingo={isBingo}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
