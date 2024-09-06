import logo from "/img/react-logo.png"

export default function NavBar() {
    return (
        <header className="bg-[#21222A]">
            <nav className="flex flex-row justify-between items-center max-w-2xl mx-auto p-6">
                <div className="flex flex-row items-center gap-2">
                    <img src={logo} alt="React Logo" className="w-[29px]"/>
                    <h2 className="text-[#61DAFB] font-bold text-[22px]">ReactFacts</h2>
                </div>
                <h3 className="text-white hidden sm:block">React Course - Project1</h3>
            </nav>
        </header>
    )
}
