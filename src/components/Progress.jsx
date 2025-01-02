export default function Progress({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index}</strong> of {numQuestions}
      </p>

      <p>
        Points: <strong>{points}</strong>/ {maxPossiblePoints}
      </p>
    </header>
  );
}
