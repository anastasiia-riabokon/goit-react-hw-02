import clsx from "clsx";
import css from "./Feedback.module.css";

export const Feedback = ({
  items,
  totalCount,
  percentage,
}) => {
  const itemsArray = Object.entries(items);
  return (
    <>
      <ul>
        {totalCount > 0 &&
          itemsArray.map(([key, value]) => (
            <li key={key}>
              <p>
                {key[0].toUpperCase() + key.slice(1)}:{" "}
                {value}
              </p>
            </li>
          ))}
      </ul>
      {!isNaN(percentage) && (
        <p className={css.positive}>
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
        </p>
      )}
    </>
  );
};
export default Feedback;
