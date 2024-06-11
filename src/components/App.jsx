import {useState, useEffect} from "react";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Description from "./Description/Description";
import Notification from "./Notification/Notification";
import Container from "./Container/Container";
import Section from "./Section/Section";
import {useLocalStorage} from "../hooks/useLocalStorage";

function App() {
  const [count, setCount] = useLocalStorage("count", {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setCount({
      ...count,
      [feedbackType]: count[feedbackType] + 1,
    });
  };

  const totalFeedback =
    count.good + count.neutral + count.bad;

  const positiveFeedback = Math.round(
    ((count.good + count.neutral) / totalFeedback) * 100
  );

  const deleteFeedback = () => {
    setCount({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <Section>
      <Container>
        <Description />
        <Options
          items={count}
          onClick={updateFeedback}
          totalCount={totalFeedback}
          clear={deleteFeedback}
        />
        {totalFeedback > 0 ? (
          <Feedback
            items={count}
            totalCount={totalFeedback}
            percentage={positiveFeedback}
          />
        ) : (
          <Notification totalCount={totalFeedback} />
        )}
      </Container>
    </Section>
  );
}

export default App;
