import star from "/star.png"
export default function Card(props) {

    let badgeText;
    if(props.openSpots === 0){
        badgeText = "SOLD OUT";
    }
    else if(props.location.toLowerCase() == "online"){
        badgeText = "ONLINE";
    }

    return (
        <div className="flex flex-[0_0_auto] flex-col relative">
            {
             badgeText && <div className="absolute bg-white text-[#222222] px-1 py-[2px] rounded-sm text-[10px]
            top-2 left-2">{badgeText}</div>
            }
            <div className="w-[176px]">
                <img src={`/${props.coverImg}`} alt="Image 1" className="w-full h-[235px] object-cover rounded-[9px]"/>
                <div className="pt-2 text-[12px] leading-5 font-light">
                    <div className="flex flex-row cards-center gap-2">
                        <img src={star} alt="Star" className="size-[14px] inline-block align-text-top"/> {props.stats.rating} <span className="text-[#918E9B]">({props.stats.reviewCount}) • {props.location}</span>
                    </div>
                    <h2 className="text-ellipsis">{props.title}
                    </h2>
                    <p><span className="font-semibold">From ${props.price}</span> / person
                    </p>
                </div>
            </div>
        </div>
    )
}