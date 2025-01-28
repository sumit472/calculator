import style from "./Display.module.css";
const Display = ({ displayValue }) => {
  return (
    <>
      <input
        type="text"
        classNameNameName={style.display}
        readOnly
        value={displayValue}
      />
    </>
  );
};
export default Display;
