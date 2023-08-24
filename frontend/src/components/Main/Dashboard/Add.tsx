import React, { useState, useEffect } from "react";
import classes from "./Add.module.scss";
import { doc, collection, addDoc } from "firebase/firestore";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { db } from "../../../config/firebase";
import { useAuth } from "../../../store/auth-context";
import { v4 } from "uuid";
import { DateTimePicker } from "@mui/x-date-pickers";
import Button from "../../../UI/Button";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

interface Option {
  label: string;
  value: string;
  children?: Option[];
}

export const Add: React.FC = () => {
  const [selectedParent, setSelectedParent] = useState<Option | null>(null);
  const [selectedChild, setSelectedChild] = useState<Option | null>(null);
  const [selectedSubChild, setSelectedSubChild] = useState<Option | null>(null);
  const [timeDate, setTimeDate] = useState();
  const [loading, setLoading] = useState(false);
  const [frequency, setFrequency] = useState({});
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [checkboxVisibility, setCheckboxVisibility] = useState([
    false, // Sunday
    false, // Monday
    false, // Tuesday
    false, // Wednesday
    false, // Thursday
    false, // Friday
    false, // Saturday
  ]);

  const handleCheckboxClick = (index: any) => {
    // Create a copy of the array to modify
    const updatedCheckboxVisibility = [...checkboxVisibility];
    updatedCheckboxVisibility[index] = !updatedCheckboxVisibility[index];

    // Update the state with the modified array
    setCheckboxVisibility(updatedCheckboxVisibility);
  };

  const handleParentSelect = (option: Option | null) => {
    setSelectedParent(option);
    setSelectedChild(null);
    setSelectedSubChild(null);
  };

  const handleChildSelect = (option: Option | null) => {
    setSelectedChild(option);
    setSelectedSubChild(null);
  };

  const options: Option[] = [
    {
      label: "Chess",
      value: "chess",
      children: [
        {
          label: "Chess for Children",
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
          label: "Vocal Training",
          value: "vocal-training",
        },
        {
          label: "Music Theory",
          value: "music-theory",
        },
      ],
    },
    {
      label: "Art",
      value: "art",
      children: [
        {
          label: "Pencil Drawings",
          value: "pencil-drawings",
        },
        {
          label: "Watercolors",
          value: "watercolors",
        },
      ],
    },
    {
      label: "Language",
      value: "language",
      children: [
        {
          label: "English",
          value: "english",
        },
        {
          label: "Kiswahili",
          value: "kiswahili",
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
  ];
  const { currentUser } = useAuth();

  const handleNameChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setName(event.target.value);
  };

  const buttonHandler = async () => {
    if (selectedChild && selectedParent) {
      const email = currentUser?.email || "";

      if (email) {
        try {
          setLoading(true);
          const userDocRef = doc(db, "users", email);
          const transactionsCollectionRef = collection(
            userDocRef,
            "transactions"
          ); // Reference the subcollection

          const transactionData = {
            id: v4(),
            item: selectedParent.value,
            category: selectedChild.value,
            amount: 15,
            date: `${timeDate}`,
            studentName: name,
            paid: false,
            attended: false,
            time: `${timeDate}`,
            weeklyFrequency: frequency,
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
          setLoading(false);
        }
      }
    }
  };

  useEffect(() => {
    console.log(timeDate);
    console.log(checkboxVisibility);
    setFrequency(1);
    selectedSubChild;
    setSelectedSubChild({ label: "none", value: "none" });
  }, [timeDate, checkboxVisibility]);
  return (
    <main className={classes.main}>
      <div className={classes.add}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Parent</InputLabel>
          <Select
            id="parentSelect"
            value={selectedParent ? selectedParent.value : ""}
            label="Parent"
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
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="childSelect">Group</InputLabel>
          <Select
            id="childSelect"
            value={selectedChild ? selectedChild.value : ""}
            label="Group"
            onChange={(e) => {
              const selectedValue = e.target.value;
              if (selectedParent) {
                const selectedOption = selectedParent.children?.find(
                  (option) => option.value === selectedValue
                );
                handleChildSelect(selectedOption || null);
              }
            }}
          >
            {selectedParent &&
              selectedParent.children?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Schedule"
            value={timeDate}
            className={classes.date}
            onChange={(newValue) => {
              if (newValue !== null && newValue !== undefined) {
                setTimeDate(newValue);
              }
            }}
          />
        </LocalizationProvider>
        <TextField
          label="Student Name"
          type="Text"
          placeholder="Student Name"
          className={classes["input-field"]}
          value={name}
          onChange={handleNameChange}
        />
         <FormGroup className={classes.days}>
          {["S", "M", "T", "W", "T", "F", "S"].map((label, index) => (
            <FormControlLabel
              key={index}
              className={classes.labelParent}
              control={
                <Checkbox
                  className={`${classes.checkbox}`}
                  checked={checkboxVisibility[index]}
                  onClick={() => handleCheckboxClick(index)}
                />
              }
              label={label}
              classes={{
                label: `${checkboxVisibility[index] ? classes["checked-checkbox"] : ""} ${classes.label}`
                ,
              }}
            />
          ))}
        </FormGroup>
        <button
          className={classes.btn}
          disabled={loading}
          onClick={buttonHandler}
        >
          Add
        </button>
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
