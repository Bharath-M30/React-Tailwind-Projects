import troll from "/troll-face.png"

export default function Header(props) {
    return (
        <section className="bg-gradient-to-r from-[#672280] to-[#A626D3] p-6 text-white">
            <header className="flex flex-row justify-between max-w-2xl items-center mx-auto">
                <div className="flex items-center gap-2">
                    <img src={troll} alt="Troll Face" className="w-8 h-6"/>
                    <h1 className="text-[1.25rem] font-bold tracking-tighter">Meme Generator</h1>
                </div>
                <h2 className="font-medium text-[.75rem]">React Project - 3</h2>
            </header>
        </section>
    )
}