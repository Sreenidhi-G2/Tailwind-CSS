import Header from "./components/header"
import Body from "./components/body"
import Footer from "./components/footer"

function App() {
  

  return (
    <>
      <div className="bg-black min-h-screen px-6  py-3 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between">
        <Header/>  
        <Body/>
        <Footer/> 
      </div>
    </>
  )
}

export default App
