import css from "./Notification.module.css";
import {motion, AnimatePresence} from "framer-motion";

export const Notification = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
      >
        <p className={css.message}>No feedback yet</p>
      </motion.div>
    </AnimatePresence>
  );
};
export default Notification;
