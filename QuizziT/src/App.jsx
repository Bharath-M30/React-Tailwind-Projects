import StartPage from "./components/StartPage";
import Question from "./components/Question";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import he from "he";


function shuffleOptions(correct_answer, incorrect_answers) {
  const options = [...incorrect_answers];
  const randomIndex = Math.floor(Math.random() * (options.length + 1));
  options.splice(randomIndex, 0, correct_answer);
  return options;
}


export default function App() {
  const [page, setPage] = useState("start");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score,setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        if (isMounted) {
          const questionsWithShuffledOptions = data.results.map(questionObj => {
            const shuffledOptions = shuffleOptions(
              he.decode(questionObj.correct_answer),
              questionObj.incorrect_answers.map(ans => he.decode(ans))
            );
            return {
              ...questionObj,
              shuffledOptions,
              id: nanoid(),
            };
          });
          setQuestions(questionsWithShuffledOptions);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchQuestions();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleClick = () => {
    setPage("questions");
  };

  const handleSelectedAnswers = (questionId, selectedAnswer) => {
    setSelectedAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: selectedAnswer,
    }));
  };

  function handleSubmit() {
    const calculatedScore = calculateScore();
    setScore(calculatedScore);
    setIsSubmitted(true);
    setShowScore(true)
  }

  function handlePlayAgain() {
    setIsSubmitted(false);
    setSelectedAnswers({});
    setShowScore(false); 
  }

  function calculateScore() {
    let score = 0;
    
    questions.forEach((questionObj) => {
        const correctAnswer = questionObj.correct_answer;
        const selectedAnswer = selectedAnswers[questionObj.id];
        
        if (selectedAnswer === correctAnswer) {
            score++;
        }
    });

    return score;
  }


  return (
    <main className="flex justify-center items-center min-h-screen relative max-w-full overflow-hidden">
      <div className="size-80 bg-[#FFFAD1] rounded-full absolute -top-28 -right-40 border border-gray-500 -z-10"></div>
      <div className="size-80 bg-[#DEEBF8] rounded-full absolute -bottom-28 -left-40 border border-gray-500 -z-10"></div>

      {page === "start" ? (
        <StartPage handleClick={handleClick} />
      ) : (
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col max-w-[90%] py-4 text-[#293264]">
          {loading ? (
            <p>Loading questions...</p>
          ) : error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : questions.length > 0 ? (
            questions.map((questionObj) => (
              <Question
                key={questionObj.id} 
                id={questionObj.id} 
                question={he.decode(questionObj.question)}
                correct_answer={he.decode(questionObj.correct_answer)}
                incorrect_answers={questionObj.incorrect_answers.map((ans) => he.decode(ans))}
                shuffledOptions={questionObj.shuffledOptions} 
                onSelect={handleSelectedAnswers}
                isSubmitted={isSubmitted}
                selectedAnswer={selectedAnswers[questionObj.id]}
              />
            ))
          ) : (
            <p>No questions available.</p>
          )}

          {showScore ? (
                        <div className="flex flex-col sm:flex-row gap-8 mx-auto my-8">
                            <p className="text-2xl text-[#293264] font-bold">You scored {score}/{questions.length} correct answers</p>
                            <button onClick={handlePlayAgain} className=" mx-auto hover:bg-[#5d69a2] transition duration-150 bg-[#4D5B9E] text-white py-2 px-8 rounded-xl">Play Again</button>
                        </div>
                      ) : (
                        <button onClick={handleSubmit} className="my-8 mx-auto hover:bg-[#5d69a2] transition duration-150 bg-[#4D5B9E] text-white py-2 px-8 rounded-xl">Check answers</button>
                          )
          }
        </form>
      )}
    </main>
  );
}

