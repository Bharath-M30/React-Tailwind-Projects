export default function Die(props) {
    const styles = {
        backgroundColor : props.isHeld ? "#59E391" : "white"
    }
    return (
        <div 
            style={styles} 
            className="flex bg-white text-[#4A4E74] items-center text-2xl font-extrabold cursor-pointer justify-center rounded-md size-12 shadow-md shadow-gray-300"
            onClick={props.holdDice}
        >
            <h2>{props.value}</h2>
        </div>
    )
}