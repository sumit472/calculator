import "bootstrap/dist/css/bootstrap.min.css";
import style from "./App.module.css";
import Display from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onClickedButton = (buttonText) => {
    if (buttonText === "AC") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newSetValue = calVal + buttonText;
      setCalVal(newSetValue);
    }
  };

  return (
    <>
      <div classNameNameName="container">
        <div classNameNameName={style.calculator}>
          <Display displayValue={calVal}></Display>
          <ButtonsContainer onButtonClick={onClickedButton}></ButtonsContainer>
        </div>
      </div>
    </>
  );
}
export default App;
