import React, { useState, useEffect } from "react";
import {
  getDocs,
  doc,
  query,
  collection,
  DocumentData,
} from "firebase/firestore";
import { useAuth } from "../../../store/auth-context";
import { db } from "../../../config/firebase";
import classes from "./Pending.module.scss";

export const Pending = () => {
  const [transactions, setTransactions] = useState<DocumentData[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  const { currentUser } = useAuth();
  const email = currentUser?.email;

  const fetchData = async () => {
    if (email) {
      const documentRef = doc(db, "users", email);
      try {
        const userDocRef = doc(db, "users", email);
        const transactionsCollectionRef = collection(
          userDocRef,
          "transactions"
        );

        const q = query(transactionsCollectionRef);

        const querySnapshot = await getDocs(q);

        const transactionsData = querySnapshot.docs.map((doc) => doc.data());
        setTransactions(transactionsData.filter((data) => data.paid != true && data.attended!=true));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchData();
    console.log(transactions);
  }, []);


  if (isLoading) {
    return <div>Loading...</div>; // Render a loading screen while data is being fetched
  }

  return (
    <>
      <table>
      <tr>
        <th>Branch</th>
        <th>Item</th>
        <th>Category</th>
        <th>Amount</th>
        <th>Date</th>
        <th>Student Name</th>
        <th>Paid</th>
        <th>Attended</th>
      </tr>
        {transactions.map((transaction) => (
          <tr key={transaction.id} className={classes.transactions}>
            <td>{transaction.branch}</td>
            <td>{transaction.item}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.date}</td>
            <td>{transaction.studentName}</td>
            <td>{transaction.paid ? "Yes" : "No"}</td>
            <td>{transaction.attended ? "Yes" : "No"}</td>

          </tr>
        ))}
      </table>

      <form action="" className={classes.form}>
        <input type="text" />
        <button type="submit">Process payment</button>
      </form>
    </>
  );
};
