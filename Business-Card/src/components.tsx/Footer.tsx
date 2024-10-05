import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer(): React.JSX.Element {
    return (
        <footer className="bg-[#161619] flex justify-center gap-8 p-4 mt-8 rounded-b-3xl">
            <a href="http://" target="_blank" className='bg-[#918E9B] rounded-[0.3rem] p-1'>
                <FacebookIcon />
            </a>
            <a href="http://" target="_blank" className='bg-[#918E9B] rounded-[0.3rem] p-1'>
                <XIcon />
            </a>
            <a href="http://" target="_blank" className='bg-[#918E9B] rounded-[0.3rem] p-1'>
                <InstagramIcon />
            </a>
            <a href="http://" target="_blank" className='bg-[#918E9B] rounded-[0.3rem] p-1'>
                <GitHubIcon />
            </a>
        </footer>
    )
}