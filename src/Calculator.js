import { useState } from "react";
import { act } from "react-dom/test-utils";

function Calculator() {
  const mathematicalOperations = ["+", "-", "*", "/"];
  const [value, setValue] = useState("0");
  const [operatorIsPressed, setOperatorIsPressed] = useState(true);
  const [isEqualPressed, setEqualPressed] = useState(false);
  const [isEqualDisabled, setEqualDisabled] = useState(false);
  const [activeTheme, setActiveTheme] = useState("");

  const getValues = (e) => {
    const digit = e.target.value;

    console.log(operatorIsPressed);

    if (value === "0" || isEqualPressed === true) {
      setValue(digit);
      setOperatorIsPressed(false);
      setEqualPressed(false);
      setEqualDisabled(false);
    } else if (mathematicalOperations.includes(digit)) {
      setOperatorIsPressed(true);
      setEqualDisabled(true);
      setValue((prev) => prev + digit);
    } else {
      setEqualDisabled(false);
      setOperatorIsPressed(false);
      setValue((prev) => prev + digit);
    }
  };

  const deleteDigit = () => {
    if (value.length === 1) {
      setValue("0");
    } else {
      return setValue((prev) => prev.slice(0, -1));
    }
  };

  const deleteField = () => {
    setValue("0");
  };

  const calculateResult = () => {
    setValue(String(eval(value)));
    setEqualPressed(true);
    setOperatorIsPressed(true);
  };

  const changeToTheme1 = () => {
    setActiveTheme("theme1");
  };

  const changeToTheme2 = () => {
    setActiveTheme("theme2");
  };

  const changeToTheme3 = () => {
    setActiveTheme("theme3");
  };

  return (
    <>
      <div className="w-5/6 mt-36 m-auto sm:w-3/5 md:w-2/5 lg:w-2/6 xl:w-1/4">
        <div
          id="theme-container"
          className={`flex justify-between px-2 mb-1 text-sm bg-blue-900 text-slate-300 ${activeTheme}`}
        >
          <div>
            <p>Theme</p>
          </div>
          <div className="flex gap-4">
            <p className={` cursor-pointer`} onClick={changeToTheme1}>
              1
            </p>
            <p className={` cursor-pointer`} onClick={changeToTheme2}>
              2
            </p>
            <p className={` cursor-pointer`} onClick={changeToTheme3}>
              3
            </p>
          </div>
        </div>
        <div id="result-container" className={`bg-slate-300 ${activeTheme}`}>
          <p
            id="result"
            className={`p-6 text-right text-3xl overflow-hidden text-red-900 font-semibold ${activeTheme}`}
          >
            {value}
          </p>
        </div>

        <div
          id="calculator-body"
          className={`grid grid-cols-4 border-2 mt-4 gap-4 p-6 bg-blue-900 ${activeTheme}`}
        >
          <button onClick={getValues} value="7" className=" p-3 custom-buttons">
            7
          </button>
          <button onClick={getValues} value="8" className=" p-3 custom-buttons">
            8
          </button>
          <button onClick={getValues} value="9" className="p-3 custom-buttons">
            9
          </button>
          <button
            id="del"
            onClick={deleteDigit}
            className={`p-3 equal text-slate-300 font-bold ${activeTheme}`}
          >
            DEL
          </button>
          <button onClick={getValues} value="4" className=" p-3 custom-buttons">
            4
          </button>
          <button onClick={getValues} value="5" className=" p-3 custom-buttons">
            5
          </button>
          <button onClick={getValues} value="6" className="p-3 custom-buttons">
            6
          </button>
          <button
            id="add"
            onClick={getValues}
            value="+"
            className={`p-3 custom-buttons ${activeTheme}`}
            disabled={operatorIsPressed}
          >
            +
          </button>
          <button
            onClick={getValues}
            value="1"
            className=" p-3  custom-buttons"
          >
            1
          </button>
          <button onClick={getValues} value="2" className=" p-3 custom-buttons">
            2
          </button>
          <button onClick={getValues} value="3" className="p-3 custom-buttons">
            3
          </button>
          <button
            id="minus"
            onClick={getValues}
            value="-"
            className={`p-3 custom-buttons ${activeTheme}`}
            disabled={operatorIsPressed}
          >
            -
          </button>
          <button onClick={getValues} value="." className="p-3 custom-buttons">
            .
          </button>
          <button onClick={getValues} value="0" className="p-3 custom-buttons">
            0
          </button>
          <button
            id="divide"
            value="/"
            className={`p-3 custom-buttons ${activeTheme}`}
            disabled={operatorIsPressed}
          >
            /
          </button>
          <button
            id="multiply"
            onClick={getValues}
            value="*"
            className={`p-3 custom-buttons ${activeTheme}`}
            disabled={operatorIsPressed}
          >
            *
          </button>
          <button
            id="reset"
            className={`col-span-2  p-3 equal text-slate-300 font-bold ${activeTheme}`}
            onClick={deleteField}
          >
            RESET
          </button>
          <button
            id="equal"
            onClick={calculateResult}
            className={`col-span-2  p-3 equal text-slate-300 font-bold ${activeTheme}`}
            disabled={isEqualDisabled}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
