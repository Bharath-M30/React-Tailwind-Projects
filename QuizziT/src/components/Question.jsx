import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

export default function Question({ correct_answer, incorrect_answers, question, id, onSelect, isSubmitted, shuffledOptions, selectedAnswer }) {
  
    const [selectedOption, setSelectedOption] = useState(selectedAnswer || "");

    useEffect(() => {
        setSelectedOption(selectedAnswer || ""); 
    }, [selectedAnswer]);

    function handleSelect(event) {
        const selected = event.target.value;
        setSelectedOption(selected);
        onSelect(id, selected);
    }

    return (
        <section>
            <p className="text-3xl font-bold">{question}</p>

            <div className="flex sm:flex-row flex-col flex-wrap gap-8 p-4">
                {shuffledOptions.map((option) => {
                    const uniqueId = nanoid();
                    const isCorrect = isSubmitted && option === correct_answer;
                    const isIncorrect = isSubmitted && selectedOption === option && selectedOption !== correct_answer;
                    const isDisabled = isSubmitted

                    return (
                        <div key={uniqueId}>
                            <label htmlFor={uniqueId} className={`text-[.85rem] sm:text-[1rem] border border-[#293264] font-bold cursor-pointer rounded-full py-2 px-8 
                                ${isCorrect ? "bg-green-400" : isIncorrect ? "bg-red-400" : selectedOption === option ? "bg-[#D6DBF5] border-none" : "bg-white text-[#293264] hover:bg-gray-300"}
                                ${!isCorrect && isDisabled ? "opacity-50 cursor-not-allowed": null}`}
                            >
                                <input type="radio" name={`question_${id}`} id={uniqueId} className="hidden" value={option}
                                    onChange={handleSelect}
                                    checked={selectedOption === option}
                                    disabled={isDisabled}
                                />{option}
                            </label>
                        </div>                            
                    );
                })}
            </div>

            <hr className="w-full bg-gray-700 my-4 h-[2px]"/>
        </section>
    );
}
