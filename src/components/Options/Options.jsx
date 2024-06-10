import clsx from "clsx";
import css from "./Options.module.css";

export const Options = ({onClick, totalCount, clear}) => {
  return (
    <div className={css.btn__block}>
      <button
        className={css.btn}
        onClick={() => onClick("good")}
      >
        Good
      </button>
      <button
        className={css.btn}
        onClick={() => onClick("neutral")}
      >
        Neutral
      </button>
      <button
        className={css.btn}
        onClick={() => onClick("bad")}
      >
        Bad
      </button>
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
