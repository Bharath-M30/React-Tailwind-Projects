import "./Badge.css"

export default function Badge({type,children}) {

    const colors = ["gray","red","yellow","blue","green","indigo","purple","pink"]
    const randomIndex = Math.floor(Math.random() * colors.length);
    const colorClass = colors[randomIndex];

    return (
        <div className={
            `${type === "square" ? "square" : "pill"} ${colorClass}
            text-center py-[0.125rem] px-3 font-[500] text-[0.875rem]`
            }>
            {children}
        </div>
    )
}