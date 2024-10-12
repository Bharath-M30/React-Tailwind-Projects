import Info from "./components.tsx/Info"
import About from "./components.tsx/About"
import Interests from "./components.tsx/Interests"
import Footer from "./components.tsx/Footer"

export default function App(): React.JSX.Element {
    return (
      <div className="min-h-screen bg-[#23252C] p-4 font-montserrat flex items-center">
        <main className="max-w-[300px] bg-[#1A1B21] mx-auto rounded-3xl">
          <Info />
          <section className="px-6">
            <About />
            <Interests />
          </section>
          <Footer />
        </main> 
      </div>  
    )
}