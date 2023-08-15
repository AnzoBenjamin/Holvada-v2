import React from "react";
import classes from "./ItemCard.module.scss";
import Button from "../../../UI/Button";

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
        <p className={classes.category}>{category}</p>
      </div>
      <div className={classes["text-content"]}>
        <p>{date}</p>
      </div>
        <Button className={""} text="Remove" type="submit" disabled={false} />
    </div>
  );
};

export default ItemCard;
