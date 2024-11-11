import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/Banner"
import Card from "./components/Card/Card"
import Testimonials from "./components/Testimonials/Testimonials"
import { FaUpload } from "react-icons/fa6"

export default function App() {
return (
    <main className="bg-gray-800 min-h-screen gap-16 flex flex-col items-center sm:justify-center justify-end p-16">
        <h1 className="text-white text-6xl mb-16">Testimonial component</h1>

        {/* <Badge type="pill">Badge</Badge>
        <Badge type="square">Badge</Badge>
        <Badge type="pill">Badge</Badge>
        <Badge type="square">Badge</Badge>
        <Badge type="pill">Badge</Badge> */}

        {/* <Banner variant="success" message="Your request has been approved" >Congratulations</Banner>
        <Banner variant="warning" message="Your request has not been approved" >Sorry!</Banner>
        <Banner variant="error" message="Invalid request" >Error</Banner>
        <Banner variant="info" message="Information" >Help</Banner> */}

        {/* <Card icon={<FaUpload />} description="Fast and secure upload with our latest cloud technology">Upload made easy</Card> */}

        <Testimonials
        role="Workcation, CTO"
        quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolore non. Temporibus dignissimos, amet eius rerum fugit ratione voluptatibus vel?"
        img={`/testimonials.jpg`}
        >
        May Anderson
        </Testimonials>
    </main>
)
}