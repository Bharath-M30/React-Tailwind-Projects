export default function StartPage(props) {
    return (
        <div className="flex flex-col items-center justify-center max-w-96 gap-4 text-[#293264] border border-[#293264] p-16 bg-white">
            <h1 className="text-4xl font-bold">
                Quizzical
            </h1>
            <p className="text-center">
                Wanna test your general knowledge? Hit the button down below!
            </p>
            <div 
                className="flex-none w-[202px] h-[57px] mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-[#293264]"
            >
                <button 
                    className=" text-sm absolute z-10 py-4 px-16 inset-0 border border-[#293264] bg-white transform active:translate-x-1 active:translate-y-1 transition duration-[50ms] font-bold"
                    onClick={props.handleClick}
                >
                    Start Quiz
                </button>
            </div>
        </div>
    )
}