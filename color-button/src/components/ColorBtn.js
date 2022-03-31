import React, { useState } from "react";

export const replaceCamelWithSpaces = (colorName) => {
  if (colorName === "MediumVioletRed") {
    return "MidnightBlue";
  }
  let clr = colorName.at(0);
  const colorCharArray = colorName.slice(1).split("");
  colorCharArray.forEach((colorChar) => {
    if (colorChar === colorChar.toUpperCase()) {
      clr += `${" "}${colorChar}`;
    } else {
      clr += colorChar;
    }
  });
  return clr;
};

const ColorBtn = () => {
  const [color, setColor] = useState("blue");
  const [disabled, setDisabled] = useState(false);

  const changeColorHandler = () => {
    if (color === "red") {
      setColor("blue");
    } else {
      setColor("red");
    }
  };

  return (
    <>
      <h1 style={{ color: "blue" }}>React Testing Library</h1>
      <button
        style={{
          backgroundColor: disabled ? "gray" : color === "red" ? "blue" : "red",
        }}
        onClick={() => changeColorHandler()}
        disabled={disabled}
      >
        <span style={{ color: "white" }}>Change to {color}</span>
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        onClick={() => setDisabled(!disabled)}
      />
      {/* htmlFor returns the value for the attribute of a label */}
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </>
  );
};

export default ColorBtn;
