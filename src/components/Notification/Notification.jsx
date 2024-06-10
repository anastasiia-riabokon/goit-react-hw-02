import css from "./Notification.module.css";

export const Notification = ({totalCount}) => {
  return totalCount === 0 ? (
    <p className={css.message}>No feedback yet</p>
  ) : null;
};
export default Notification;
