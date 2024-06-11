import clsx from "clsx";
import css from "./Options.module.css";

export const Options = ({
  items,
  onClick,
  totalCount,
  clear,
}) => {
  const btnArray = Object.keys(items);
  return (
    <div className={css.btn__block}>
      {btnArray.map((btn) => (
        <button
          key={btn}
          className={css.btn}
          onClick={() => onClick(btn)}
        >
          {btn[0].toUpperCase() + btn.slice(1)}
        </button>
      ))}

      {totalCount > 0 && (
        <button
          className={clsx(css.btn, css.accent)}
          onClick={clear}
        >
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
