import { FaQuoteLeft } from "react-icons/fa6";

export default function Testimonials({img, children, role, quote}) {
    return  (
        <div className="flex flex-col sm:flex-row sm:gap-8 gap-4 bg-[#2545B8] text-white w-full mt-16 sm:mt-0">
            <div className="sm:w-1/3 w-full flex sm:justify-end justify-center">
                <img 
                    src={img} 
                    alt="Testimonial Pic"
                    className="sm:w-72 sm:h-96 w-64 h-52 rounded-xl sm:transform scale-125 sm:-translate-y-0 -translate-y-16 object-cover"
                />
            </div>
            <div className="flex flex-col p-8 sm:w-2/3 w-full">
                <FaQuoteLeft style={{opacity:"0.25",fontSize:"5rem"}} />
                <blockquote className="text-2xl my-4 font-[500]">
                    {quote} 
                </blockquote>
                <p className="font-[700]">{children}</p>
                <p>{role}</p>
            </div>
        </div>
    )
}