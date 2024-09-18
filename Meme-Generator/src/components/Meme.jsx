import { useState,useEffect } from "react";

export default function Meme() {

        const [meme,setMeme] = useState({
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        });

        const [allMemes,setAllMemes] = useState([]);

        useEffect(() => {
            fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
        },[])
    
        function addMemeImage(){
            const randomNum = Math.floor(Math.random() * allMemes.length);
            const url = allMemes[randomNum].url;
            setMeme(prevState => {
                return {
                    ...prevState,
                    randomImage:url
                }
            })
        }

        function handleChange(event){
            const {name,value} = event.target
            setMeme(prevMeme => ({
                ...prevMeme,
                [name]:value
            }))
        }

    return (
        <main>
            <div className="p-10 max-w-xl mx-auto flex flex-col gap-y-6">
                <div className="flex flex-row gap-4 justify-between">
                    <label htmlFor="top-text" className="w-56 indent-1"> Top Text
                        <input 
                            className="w-full transition-all duration-150 focus:outline-[#A626D3] hover:shadow hover:shadow-[#A626D3] focus:shadow-md p-2 rounded-md border border-gray-400" 
                            type="text" 
                            name="topText"
                            value={meme.topText}
                            onChange={handleChange}  
                        />
                    </label>
                    <label htmlFor="bottom-text" className="w-56 indent-1"> Bottom Text
                        <input 
                            className="w-full transition-all duration-150 focus:outline-[#A626D3] hover:shadow hover:shadow-[#A626D3] p-2 rounded-md border border-gray-400"
                            type="text"
                            name="bottomText"
                            value={meme.bottomText}
                            onChange={handleChange} 
                        /> 
                    </label>
                </div>
                <div className="overflow-hidden h-10 rounded-md">
                    <button 
                        onClick={addMemeImage} 
                        className="hover:text-[1.1rem] transition-all duration-200 w-full rounded-md font-bold text-white bg-gradient-to-r from-[#672280] to-[#A626D3] p-2">Get a new Meme Image 📸
                    </button>
                </div>
            </div>
            <div className="px-10 pb-10 flex items-start max-w-xl mx-auto">
                <div className="relative w-full">
                    <img 
                        src={meme.randomImage} 
                        alt="Meme Image" 
                        className="w-full mx-auto rounded" 
                    />
                    <h1
                        className="font-extrabold font-sans text-shadow-meme absolute text-2xl uppercase transform -translate-x-1/2 top-0 left-1/2 text-white w-full text-center"
                    >
                        {meme.topText}
                    </h1>
                    <h1
                        className="font-extrabold font-sans text-shadow-meme absolute text-2xl uppercase transform -translate-x-1/2 bottom-2 left-1/2 text-white w-full text-center"
                    >
                        {meme.bottomText}
                    </h1>
                </div>
            </div>
            
        </main>
    )
}