import React, { ChangeEvent, useState } from "react";
import classes from "./Add.module.scss";

interface Option {
  label: string;
  value: string;
  children?: Option[];
}

export const Add = () => {
  const [selectedParent, setSelectedParent] = useState<Option | null>(null);
  const [selectedChild, setSelectedChild] = useState<Option | null>(null);
  const [selectedSubChild, setSelectedSubChild] = useState<Option | null>(null);

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

  const buttonHandler = (e) => {
    console.log(selectedParent, selectedChild, selectedSubChild)
  }
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
      </div>
      <button className={classes.btn} onClick={buttonHandler}>Add</button>
    </>
  );
};
