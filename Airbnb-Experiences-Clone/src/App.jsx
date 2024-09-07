import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import dataArray from "./data.js"

function App() {

  const cards = dataArray.map( card => {
    return <Card 
              key={card.id}
              {...card}
          />
  })
  return (
    <>
        <NavBar />
        <Hero />
        <section className="p-10 flex flex-nowrap overflow-x-auto gap-5">
          {cards}
        </section>
    </>
  )
}
export default App
