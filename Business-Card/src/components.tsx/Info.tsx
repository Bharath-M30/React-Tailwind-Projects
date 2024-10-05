import profile from "/Photo.jpg"
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Info(): React.JSX.Element {
    return (
        <section>
            <img src={profile} alt="Profile Image" className="w-full rounded-t-3xl object-cover h-[300px]"/>

            <h1 className="text-center mt-4 text-3xl text-white font-bold">Bharath</h1>
            <h2 className="text-[#F3BF99] text-center">Frontend Developer</h2>

            <div className="flex flex-row gap-4 p-4 justify-around">
                <a 
                    href="mailto:bharathmurugan30@gmail.com" 
                    className="py-1 w-[115px] text-center rounded-md bg-[#D1D5DB] text-[0.75rem]">
                    <EmailIcon style={{width:"14px"}}/> Email
                </a>
                <a 
                    href="https://www.linkedin.com/in/bharath-m-364a13225/" 
                    target="_blank" 
                    className="py-1 w-[115px] text-center rounded-md bg-[#5093E2] text-[0.75rem] text-white">
                    <LinkedInIcon style={{width:"14px"}} /> LinkedIn
                </a>
            </div>
        </section>
    )
}