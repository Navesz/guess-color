import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [isWrongSelection, setIsWrongSelection] = useState(false);

  const generateColors = () => {
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };

  const getRandomColor = () => {
    const digits = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    const colors = new Array(6)
      .fill("")
      .map(() => digits[Math.floor(Math.random() * digits.length)])
      .join("");

    return `#${colors}`;
  };

  useEffect(() => {
    generateColors();
  }, []);

  const correctAnswers = () => {
    setIsWrongSelection(false);
    generateColors();
  };

  const handleAswerClicked = (answer: string) => {
    answer == color ? correctAnswers() : setIsWrongSelection(true);
  };

  return (
    <div className="App">
      <div>
        <div className="guess-me" style={{ background: color }}></div>
        {answers.map((answer) => (
          <button onClick={() => handleAswerClicked(answer)} key={answer}>
            {answer}
          </button>
        ))}
        {isWrongSelection && <div className="wrong">Wrong Answer</div>}
      </div>
    </div>
  );
}

export default App;
