import { useState, useEffect, useRef } from "react";

const PASSAGES = [
  "any fool can write code that a computer can understand. good programmers write code that humans can understand.",
  "first solve the problem, then write the code.",
  "experience is the name everyone gives to their mistakes.",
  "in programming, the hard part isnt solving problems, but deciding what problems to solve.",
  "programs must be written for people to read, and only incidentally for machines to execute.",
  "simplicity is prerequisite for reliability.",
  "make it work, make it right, make it fast.",
  "the best way to predict the future is to invent it.",
  "the only way to learn a new programming language is by writing programs in it.",
  "sometimes it pays to stay in bed on monday rather than spending the rest of the week debugging mondays code.",
  "we build our computer systems the way we build our cities, over time, without a plan, on top of ruins.",
  "programming isnt about what you know, its about what you can figure out.",
];

type Status = "waiting" | "running" | "finished";

const ROWS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

function Keyboard({ target, wrongKey }: { target: string; wrongKey: string | null }) {
  const key = target && /^[a-zA-Z]$/.test(target) ? target.toLowerCase() : null;
  const wrong = wrongKey && /^[a-zA-Z]$/.test(wrongKey) ? wrongKey.toLowerCase() : null;

  return (
    <div className="keyboard">
      {ROWS.map((row, ri) => (
        <div key={ri} className="keyboard-row">
          {row.map((k) => (
            <kbd key={k} className={wrong === k ? "wrong" : key === k ? "active" : ""}>
              {k}
            </kbd>
          ))}
        </div>
      ))}
      <div className="keyboard-row">
        <kbd className={`keyboard-spacebar${wrongKey === " " ? " wrong" : target === " " ? " active" : ""}`} />
      </div>
    </div>
  );
}

const TypingTest = () => {
  const [passage, setPassage] = useState(() => PASSAGES[Math.floor(Math.random() * PASSAGES.length)]);
  const [typed, setTyped] = useState("");
  const [status, setStatus] = useState<Status>("waiting");
  const [timeLeft, setTimeLeft] = useState(30);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [wrongKey, setWrongKey] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (status === "running") {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setStatus("finished");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [status]);

  useEffect(() => {
    if (status === "finished") {
      if (timerRef.current) clearInterval(timerRef.current);
      const elapsed = (Date.now() - startTimeRef.current) / 1000 / 60;
      const words = typed.length / 5;
      setWpm(Math.round(words / Math.max(elapsed, 0.01)));
      const correctChars = typed.split("").filter((ch, i) => ch === passage[i]).length;
      setAccuracy(Math.round((correctChars / (typed.length || 1)) * 100));
    }
  }, [status]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (status === "finished") return;

    if (e.key === "Backspace") {
      e.preventDefault();
      setWrongKey(null);
      setTyped((prev) => prev.slice(0, -1));
      return;
    }

    if (e.key.length === 1 && typed.length < passage.length) {
      e.preventDefault();

      if (e.key !== passage[typed.length]) {
        setWrongKey(e.key);
      } else {
        setWrongKey(null);
      }

      const newTyped = typed + e.key;
      setTyped(newTyped);

      if (status === "waiting") {
        setStatus("running");
        startTimeRef.current = Date.now();
      }

      if (startTimeRef.current) {
        const elapsed = (Date.now() - startTimeRef.current) / 1000 / 60;
        const words = newTyped.length / 5;
        setWpm(Math.round(words / Math.max(elapsed, 0.01)));
        const correct = newTyped.split("").filter((ch, i) => ch === passage[i]).length;
        setAccuracy(Math.round((correct / newTyped.length) * 100));
      }

      if (newTyped.length >= passage.length) {
        setStatus("finished");
      }
    }
  };

  const restart = () => {
    setPassage(PASSAGES[Math.floor(Math.random() * PASSAGES.length)]);
    setTyped("");
    setStatus("waiting");
    setTimeLeft(30);
    setWpm(0);
    setAccuracy(100);
    setWrongKey(null);
    startTimeRef.current = 0;
    containerRef.current?.focus();
  };

  return (
    <div className="typing-test" ref={containerRef} tabIndex={0} onKeyDown={handleKeyDown}>
      <div className="typing-stats">
        <div className="stat">
          <span className="stat-label">WPM</span>
          <span className="stat-value">{wpm || "—"}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Accuracy</span>
          <span className="stat-value">{status !== "waiting" ? `${accuracy}%` : "—"}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Time</span>
          <span className="stat-value">{timeLeft}s</span>
        </div>
      </div>

      <div className="typing-passage">
        {passage.split("").map((char, i) => {
          let cls = "char";
          if (i < typed.length) {
            cls += typed[i] === char ? " correct" : " incorrect";
          } else if (i === typed.length) {
            cls += " current";
          }
          return <span key={i} className={cls}>{char === " " ? " " : char}</span>;
        })}
      </div>

      {status !== "finished" && <Keyboard target={passage[typed.length]} wrongKey={wrongKey} />}

      {status !== "finished" && (
        <p className="typing-hint">
          {status === "waiting" ? "Start typing to begin the test..." : "Backspace to correct mistakes"}
        </p>
      )}

      {status === "finished" && (
        <div className="typing-results">
          <div className="results-grid">
            <div className="result-item">
              <span className="result-value">{wpm}</span>
              <span className="result-label">WPM</span>
            </div>
            <div className="result-item">
              <span className="result-value">{accuracy}%</span>
              <span className="result-label">Accuracy</span>
            </div>
          </div>
        </div>
      )}

      <button onClick={restart} className="typing-restart">
        &#x21bb; Restart
      </button>
    </div>
  );
};

export default TypingTest;
