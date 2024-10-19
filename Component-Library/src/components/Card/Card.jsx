
export default function Card({icon, description, children}) {

    return (
        <div 
            className="flex flex-col text-center items-center justify-center max-w-96 gap-4 bg-[#F9FAFB] px-6 pb-8 rounded-lg cursor-default hover:shadow-xl"
        >
            <div 
                className="size-12 bg-[#3F75FE] flex items-center justify-center rounded-md text-white transform -translate-y-6"
            >
                {icon}
            </div>

            <h1 className="text-[1.125rem] font-[500]">{children}</h1>

            <p className="text-[#6B7280]">{description}</p>
        </div>
    )
}