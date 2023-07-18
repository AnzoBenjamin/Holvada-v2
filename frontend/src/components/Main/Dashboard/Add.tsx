import React, { ChangeEvent, useState, useRef } from "react";
import classes from "./Add.module.scss";
import { updateDoc, arrayUnion, doc, setDoc, collection, addDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { useAuth } from "../../../store/auth-context";
import { v4 } from "uuid";

interface Option {
  label: string;
  value: string;
  children?: Option[];
}

export const Add = () => {
  const [selectedParent, setSelectedParent] = useState<Option | null>(null);
  const [selectedChild, setSelectedChild] = useState<Option | null>(null);
  const [selectedSubChild, setSelectedSubChild] = useState<Option | null>(null);
  const dateRef = useRef(null);
  const nameRef = useRef(null);
  const handleParentSelect = (option: Option | null) => {
    setSelectedParent(option);
    setSelectedChild(null);
    setSelectedSubChild(null);
  };

  const handleChildSelect = (option: Option | null) => {
    setSelectedChild(option);
    setSelectedSubChild(null);
  };

  const handleSubChildSelect = (option: Option | null) => {
    setSelectedSubChild(option);
  };

  const options: Option[] = [
    {
      label: "Learning",
      value: "learning",
      children: [
        {
          label: "Chess",
          value: "chess",
          children: [
            {
              label: "Chess for children",
              value: "chess-for-children",
            },
            {
              label: "Beginner Chess",
              value: "beginner-chess",
            },
            {
              label: "Intermediate Chess",
              value: "intermediate-chess",
            },
          ],
        },
        {
          label: "Music",
          value: "music",
          children: [
            {
              label: "Vocal training",
              value: "vocal-training",
            },
            {
              label: "Music theory",
              value: "music-theory",
            },
          ],
        },
        {
          label: "Art",
          value: "art",
          children: [
            {
              label: "Pencil drawings",
              value: "pencil-drawings",
            },
            {
              label: "Watercolors",
              value: "watercolors",
            },
          ],
        },
        {
          label: "Langugage",
          value: "language",
          children: [
            {
              label: "English",
              value: "english",
            },
            {
              label: "Kiswahili",
              value: "Kiswahili",
            },
          ],
        },
        {
          label: "Tech",
          value: "tech",
          children: [
            {
              label: "Code",
              value: "code",
            },
            {
              label: "Scratch",
              value: "scratch",
            },
          ],
        },
      ],
    },
  ];
  const { currentUser } = useAuth();

  const buttonHandler = async (e) => {
    if (selectedChild && selectedParent && selectedSubChild) {
      const email = currentUser?.email || "";

      if (email) {

        try {
          const userDocRef = doc(db, "users", email);
          const transactionsCollectionRef = collection(userDocRef, "transactions"); // Reference the subcollection

          const transactionData = {
            id: v4(),
            branch: selectedParent.value,
            item: selectedChild.value,
            category: selectedSubChild.value,
            amount: 15,
            date: dateRef.current?.value,
            studentName: nameRef.current?.value,
            paid: false,
            attended: false
          };
  
          await addDoc(transactionsCollectionRef, transactionData); // Create a new document in the subcollection
    
          console.log("Successfully added");
        } catch (error) {
          console.log("Error adding entry:", error);
        }
      }
    }
  };

  return (
    <>
      <div className={classes.add}>
        <div>
          <label htmlFor="parentSelect"></label>
          <select
            id="parentSelect"
            value={selectedParent ? selectedParent.value : ""}
            className={classes.select}
            onChange={(e) =>
              handleParentSelect(
                options.find((option) => option.value === e.target.value)
              )
            }
          >
            <option value="">Select a parent</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {selectedParent && (
          <div>
            <label htmlFor="childSelect"></label>
            <select
              id="childSelect"
              value={selectedChild ? selectedChild.value : ""}
              className={classes.select}
              onChange={(e) =>
                handleChildSelect(
                  selectedParent.children?.find(
                    (option) => option.value === e.target.value
                  )
                )
              }
            >
              <option value=""></option>
              {selectedParent.children?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedChild && (
          <div>
            <label htmlFor="subChildSelect"></label>
            <select
              id="subChildSelect"
              value={selectedSubChild ? selectedSubChild.value : ""}
              className={classes.select}
              onChange={(e) =>
                handleSubChildSelect(
                  selectedChild.children?.find(
                    (option) => option.value === e.target.value
                  )
                )
              }
            >
              <option value="">Select a sub-child</option>
              {selectedChild.children?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}
        {selectedSubChild && (
          <>
            <div>
              <input
                type="text"
                placeholder="Student name"
                className={classes.input}
                ref={nameRef}
              />
            </div>
            <div>
              <input type="date" className={classes.input} ref={dateRef} />
            </div>
            <div></div>
            <button className={classes.btn} onClick={buttonHandler}>
              Add
            </button>
          </>
        )}
      </div>
    </>
  );
};
