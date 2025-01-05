export default function FinishScreen({ points, maxPossiblePoints, highscore }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🤭";
  if (percentage >= 30 && percentage < 50) emoji = "😩";
  if (percentage >= 0 && percentage < 30) emoji = "😭";

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%) {emoji}
      </p>
      <p className="highscore">(Highscore: {highscore})</p>
    </>
  );
}
