import clsx from "clsx";
import css from "./Feedback.module.css";
import {motion, AnimatePresence} from "framer-motion";

export const Feedback = ({
  items,
  totalCount,
  percentage,
}) => {
  const itemsArray = Object.entries(items);
  return (
    <AnimatePresence>
      <motion.div
        initial={{opacity: 0, height: 0}}
        animate={{opacity: 1, height: "auto"}}
        exit={{opacity: 0, height: 0}}
        transition={{duration: 0.5}}
      >
        <ul>
          {totalCount > 0 &&
            itemsArray.map(([key, value]) => (
              <motion.li
                key={key}
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -20}}
                transition={{duration: 0.5}}
              >
                <p>
                  {key[0].toUpperCase() + key.slice(1)}:{" "}
                  {value}
                </p>
              </motion.li>
            ))}
        </ul>
        {!isNaN(percentage) && (
          <motion.p
            className={css.positive}
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -20}}
            transition={{duration: 0.5}}
          >
            Positive:{" "}
            <span
              className={clsx(css.qy__perc, {
                [css.accent_splendid]: percentage > 75,
                [css.accent]: percentage < 50,
                [css.accent_critic]: percentage < 25,
              })}
            >
              {percentage}%
            </span>
          </motion.p>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
export default Feedback;
