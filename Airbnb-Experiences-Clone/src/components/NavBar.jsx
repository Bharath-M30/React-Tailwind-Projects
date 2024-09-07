import logo from "/airbnb-logo.png"

export default function NavBar(){
    return (
        <nav className="p-6 bg-[#E5E5E5] shadow-sm shadow-gray-300 sticky top-0">
            <img src={logo} alt="Airbnb Logo" className="ml-6"/>
        </nav>
    )
}