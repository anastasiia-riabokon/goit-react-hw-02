import clsx from "clsx";
import css from "./Options.module.css";
import {motion, AnimatePresence} from "framer-motion";

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
        <AnimatePresence>
          <motion.button
            className={clsx(css.btn, css.accent)}
            onClick={clear}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
          >
            Reset
          </motion.button>
        </AnimatePresence>
      )}
    </div>
  );
};
export default Options;
