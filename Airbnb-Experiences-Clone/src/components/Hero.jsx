import hero_img from "/Hero-img.png"

export default function Hero(){
    return (
        <div className="px-10 pt-10">
            <img src={hero_img} alt="Hero Image" className="w-[400px] mx-auto lg:w-[600px]"/>
            <h1 className="text-[36px] font-semibold mt-8">Online Experiences</h1>
            <p className="max-w-[320px] sm:max-w-lg leading-5 font-light mt-2 text-[#222222]">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}