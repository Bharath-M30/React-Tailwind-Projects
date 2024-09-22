import Die from "./components/Die"
import Header from "./components/Header"
import { useState,useEffect } from "react";
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App(){

    const [dice,setDice] = useState(allNewDice());
    const [tenzies,setTenzies] = useState(false);

    useEffect(() => {
        const heldAll = dice.every( die => die.isHeld);
        const firstValue = dice[0].value;
        const allEqual = dice.every( die => die.value === firstValue);

        if(heldAll && allEqual){
            setTenzies(true);
        }
    },[dice])

    function generateDice() {
        return {
            value : Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }

    function allNewDice() {
        const newDice = [];
        for(let i=0; i<10; i++) {
            newDice.push(generateDice());
        }
        return newDice;       
    }

    function rollNewDice() {
        if(!tenzies){
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? die : generateDice()
            }))
        }else{
            setTenzies(false);
            setDice(allNewDice());
        } 
    }

    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id===id ? {...die,isHeld: !die.isHeld} : die
        }) )
    }

    const diceElements = dice.map( die => 
        <Die 
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)} 
        />
    );

    return (
        <>
        <Header />
        {tenzies && <Confetti />}
        <main className="bg-[#0B2434] min-h-screen p-10 flex items-center">
            <div className=" py-4 rounded-3xl bg-slate-100 mx-auto flex flex-col justify-center items-center max-w-sm">
                <h3 className="font-bold text-2xl mt-4">Tenzies</h3>
                <p className="text-[#4A4E74] leading-5 max-w-[75%] text-center">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className="grid grid-cols-5 gap-4 mt-6">
                    {diceElements}
                </div>
                <button 
                    className="px-10 py-2 bg-[#5035FF] text-white my-8 rounded-md"
                    onClick={rollNewDice}
                >
                    {tenzies ? "New Game" : "Roll" }
                </button>
            </div>
        </main>
        </>
    )
}