import React from "react";
import "../../styles/Header.css";

const Header = ({ isBingo }) => {
  return (
    <header className="bingo__header">
      <h1 className="bingo__title">EmoGo!</h1>

      <>
        <div
          className={isBingo ? "bingo__text-win" : "bingo__text-win--invisible"}
        >
          <span>B</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
          <span>O</span>
        </div>
      </>
    </header>
  );
};

export default Header;
