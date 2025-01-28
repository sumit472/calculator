import style from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  const buttons = [
    "AC",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "00",
    ".",
    "=",
  ];
  return (
    <>
      <div classNameNameName={style.buttonContainer}>
        {buttons.map((item) => (
          <button
            key={item}
            classNameNameName={style.button}
            onClick={() => onButtonClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};
export default ButtonsContainer;
