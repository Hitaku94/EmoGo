import React from "react";
import { useState } from "react";
import "../../styles/Card.css";

const Card = ({
  desc,
  index,
  setCardSelected,
  cardSelected,
  handleWin,
  isBingo,
}) => {
  const [isValid, setIsValid] = useState(false);

  /* handle toggle function */

  const toggle = (index) => {
    setIsValid(true);
    setCardSelected([...cardSelected, index]);
    checkIndex(index);
  };

  /* Check index and line checking */

  const checkIndex = (index) => {
    let columnCards = index % 5;
    let rowCards = Math.floor(index / 5);

    let lineChecking = [...cardSelected, index];

    let diagonalRightCardLineValid = 0;
    let diagonalLeftCardLineValid = 0;
    let columnCardLineValid = 0;
    let rowCardLineValid = 0;

    for (let i = 0; i < lineChecking.length; i++) {
      if ((lineChecking[i] - columnCards) % 5 === 0) {
        columnCardLineValid += 1;
      }
      if (columnCards === rowCards && lineChecking[i] % 6 === 0) {
        diagonalLeftCardLineValid += 1;
      }
      if (
        columnCards + rowCards === 4 &&
        lineChecking[i] % 4 === 0 &&
        lineChecking[i] !== 0 &&
        lineChecking[i] !== 24
      ) {
        diagonalRightCardLineValid += 1;
      }
      if (Math.floor(lineChecking[i] / 5) === rowCards) {
        rowCardLineValid += 1;
      }
    }
    if (
      columnCardLineValid === 5 ||
      rowCardLineValid === 5 ||
      diagonalLeftCardLineValid === 5 ||
      diagonalRightCardLineValid === 5
    ) {
      handleWin();
    }
  };

  return (
    <div
      className="card__container"
      onClick={
        isBingo || isValid || index === 12
          ? undefined
          : () => {
              toggle(index);
            }
      }
    >
      <div className={isValid || index === 12 ? "card__valid" : ""}></div>
      <p className="card__desc">{desc}</p>
    </div>
  );
};

export default Card;
