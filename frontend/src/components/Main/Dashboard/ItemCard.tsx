import React from "react";
import classes from "./ItemCard.module.scss";
import styles from "../../../scss/components/_buttons.module.scss";

interface ItemCardProps {
  item: string;
  date: string;
  category: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, date, category }) => {
  return (
    <div className={classes.card}>
      <div className={classes["img-container"]}>
        <img src={`/${item}.jpg`} alt={`${item}`} className={classes.img} />
      </div>
      <div className={classes["text-content"]}>
        <p>{category}</p>
        <p>{date}</p>
      </div>
        <button className={styles.btn}>Remove</button>
    </div>
  );
};

export default ItemCard;
