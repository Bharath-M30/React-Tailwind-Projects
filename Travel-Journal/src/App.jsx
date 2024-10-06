import data from "./data"
import Header from "./components/Header"
import Content from "./components/Content"


export default function App() {
return (
    <>
        <Header />
        <main className="sm:max-w-[800px] max-w-sm mx-auto p-8 flex flex-col">
            {data && data.map(item => (
                <Content
                src={item.imageUrl}
                title={item.title}
                location={item.location}
                mapUrl={item.googleMapsUrl}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
                />
            ))}
        </main>
    </>
)
}