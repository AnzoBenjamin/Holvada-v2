import React from "react";
import classes from "../../../scss/utils/_helpers.module.scss";

const Chess: React.FC = () => {
  return (
    <section
      className={`${classes.grid} ${classes["grid-2-cols"]} section-chess`}
    >
      <img src="/chess.png" alt="" />
      <div>
        <h3 className={classes["heading-tertiary"]}>Chess</h3>
        <h2 className={classes["heading-secondary"]}>
          Unlock Your Strategic Mind with Chess
        </h2>

        <h4>Beginners' Chess:</h4>
        <p>
          Learn the fundamentals of chess, including piece movements, basic
          tactics, and strategies to get you started on your chess journey.
        </p>

        <h4>Intermediate Chess:</h4>
        <p>
          Dive deeper into the world of chess, exploring advanced strategies,
          positional play, and tactical combinations to elevate your game.
        </p>
        <h4>Advanced Chess:</h4>

        <p>
          Sharpen your skills with in-depth analysis of master games, advanced
          opening theory, and tournament preparation to become a formidable
          player.
        </p>
        <h4>Chess for Kids:</h4>
        <p>
          Engage young minds in the captivating world of chess through fun and
          interactive lessons designed specifically for children.
        </p>
      </div>
    </section>
  );
};

export default Chess;
