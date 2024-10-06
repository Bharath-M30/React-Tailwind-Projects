import PlaceSharpIcon from '@mui/icons-material/PlaceSharp';

export default function Content(props) {
    return (
        <section className="flex flex-col sm:flex-row gap-4 mt-8">
            <img src={props.src} alt="Mount fuji" className="w-full h-60 sm:w-60 sm:h-80 rounded-lg object-cover"/>
            <div className="flex flex-col px-4 py-8 text-[#2B283A]">
                <div>
                    <PlaceSharpIcon style={{fill:"#F55A5A",width:"1.2rem",verticalAlign:"top"}} />

                    <span className='tracking-widest'>{props.location}</span>

                    <a 
                        href={props.mapUrl}
                        target='_blank' 
                        className='underline text-[#918E9B] sm:ml-8 ml-4'
                    >
                        View on Google Maps
                    </a>
                </div>
                <h2 className='text-4xl font-extrabold mt-4'>{props.title}</h2>
                <p className='mt-8 font-bold'>{props.startDate}-{props.endDate}</p>
                <p className='mt-4 text-sm'>{props.description}</p>
            </div>
            <hr className='block sm:none my-4 bg-slate-600'/>
        </section>
    )
}