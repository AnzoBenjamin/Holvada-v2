import React, { useState, useRef } from "react";
import classes from "./Add.module.scss";
import { doc, collection, addDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { useAuth } from "../../../store/auth-context";
import { v4 } from "uuid";
import Button from "../../../UI/Button";
interface Option {
  label: string;
  value: string;
  children?: Option[];
}

export const Add: React.FC = () => {
  const [selectedParent, setSelectedParent] = useState<Option | null>(null);
  const [selectedChild, setSelectedChild] = useState<Option | null>(null);
  const [selectedSubChild, setSelectedSubChild] = useState<Option | null>(null);
  const [loading, setLoading] = useState(false)
  const [frequency, setFrequency] = useState("")
  const [message, setMessage] = useState("");
  const [hour, setHour] = useState("12");
  const [minute, setMinute] = useState("00");
  const dateRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
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

  const buttonHandler = async () => {
    if (selectedChild && selectedParent && selectedSubChild) {
      const email = currentUser?.email || "";

      if (email) {
        try {
          setLoading(true)
          const userDocRef = doc(db, "users", email);
          const transactionsCollectionRef = collection(
            userDocRef,
            "transactions"
          ); // Reference the subcollection

          const transactionData = {
            id: v4(),
            branch: selectedParent.value,
            item: selectedChild.value,
            category: selectedSubChild.value,
            amount: 15,
            date: dateRef.current?.value,
            studentName: nameRef.current?.value,
            paid: false,
            attended: false,
            time: `${hour}:${minute}`,
            weeklyFrequency: frequency
          };

          await addDoc(transactionsCollectionRef, transactionData); // Create a new document in the subcollection
          setMessage("Successfully scheduled");
          setSelectedChild(null);
          setSelectedParent(null);
          setSelectedSubChild(null);
        } catch (error) {
          console.log("Error adding entry:", error);
        } finally {
          setMessage("");
          setLoading(false)
        }
      }
    }
  };

  const handleHour = (e: any) => {
    console.log(e.target.value);
    setHour(e.target.value);
  };
  const handleMinute = (e: any) => {
    console.log(e.target.value);
    setMinute(e.target.value);
  };

  return (
    <main className={classes.main}>
      <div className={classes.add}>
        <select id="frequencySelect" className={classes.select} onChange={(e)=>{
          const selectedValue = e.target.value
          setFrequency(selectedValue)
        }}>
          <option value="">Select your desired frequency</option>
          <option value="1">Once a week</option>
          <option value="2">Twice a week</option>
          <option value="3">Thrice a week</option>
          <option value="4">Four times a week</option>
          <option value="5">Five times a week</option>
          <option value="6">Six times a week</option>
          <option value="7">Daily</option>
        </select>
        <div>
          <label htmlFor="parentSelect"></label>
          <select
            id="parentSelect"
            value={selectedParent ? selectedParent.value : ""}
            className={classes.select}
            onChange={(e) => {
              const selectedValue = e.target.value;
              const selectedOption = options.find(
                (option) => option.value === selectedValue
              );

              handleParentSelect(selectedOption || null);
            }}
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
              onChange={(e) => {
                const selectedValue = e.target.value;
                const selectedOption = selectedParent.children?.find(
                  (option) => option.value === selectedValue
                );
                handleChildSelect(selectedOption || null);
              }}
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
              onChange={(e) => {
                const selectedValue = e.target.value;
                const selectedOption = selectedChild.children?.find(
                  (option) => option.value === selectedValue
                );
                handleSubChildSelect(selectedOption || null);
              }}
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
            <div className={classes.clock}>
              <div className={classes["clock-display"]}>
                <p>Time for the lesson</p>
                <p>{`${hour}:${minute}`}</p>
              </div>
              <input
                type="range"
                onClick={handleHour}
                id="hourInput"
                min="1"
                max="12"
              />
              <input
                type="range"
                onClick={handleMinute}
                id="minuteInput"
                min="0"
                max="59"
              />
            </div>
            <button className={classes.btn} disabled={loading} onClick={buttonHandler}>
              Add
            </button>
          </>
        )}
      </div>
      <div className={classes["order-details"]}>
        <h3>Order details</h3>
        <div>
          <h4>Subscription</h4>
          <p>Monthly</p>
        </div>
        <div>
          <h4>Weekly lessons</h4>
          <p></p>
        </div>
        <div>
          <h4>Total Amount</h4>
          <p></p>
        </div>
        <Button
          className={classes.proceed}
          type="submit"
          text="Proceed to payment"
          disabled={false}
        />
      </div>
      {message && <p>{message}</p>}
    </main>
  );
};
