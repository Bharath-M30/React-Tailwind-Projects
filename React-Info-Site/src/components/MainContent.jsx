
export default function MainContent(){
    return (
        <main className="text-white bg-[#282D35] p-10 min-h-screen bg-[url('/img/react-icon.png')] bg-[top_7.5rem_right_-8rem] md:bg-[right_top_7.5rem] bg-no-repeat ">
            <div className="max-w-xl mx-auto">
                <h1 className="text-[39px] font-bold">Fun facts about React</h1>
                <ul className="p-10 space-y-4 list-none">
                    <li className="ml-6 relative before:absolute before:content-[''] before:inline-block before:w-[10px]
                    before:h-[10px] before:rounded-full before:bg-[#61DAFB] before:top-1.5 before:-left-6">Was first released in 2013</li>
                    <li className="ml-6 relative before:absolute before:content-[''] before:inline-block before:w-[10px]
                    before:h-[10px] before:rounded-full before:bg-[#61DAFB] before:top-1.5 before:-left-6">Was originally created by Jordan Walke</li>
                    <li className="ml-6 relative before:absolute before:content-[''] before:inline-block before:w-[10px]
                    before:h-[10px] before:rounded-full before:bg-[#61DAFB] before:top-1.5 before:-left-6">Has well over 200K stars on GitHub</li>
                    <li className="ml-6 relative before:absolute before:content-[''] before:inline-block before:w-[10px]
                    before:h-[10px] before:rounded-full before:bg-[#61DAFB] before:top-1.5 before:-left-6">Is maintained by Meta</li>
                    <li className="ml-6 relative before:absolute before:content-[''] before:inline-block before:w-[10px]
                    before:h-[10px] before:rounded-full before:bg-[#61DAFB] before:top-1.5 before:-left-6">Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        </main>
    )
}