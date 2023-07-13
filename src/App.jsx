import Navbar1 from "./components/navbar1.jsx"
import Navbar from "./components/navbar2.jsx"
import Footer from "./components/footer.jsx"

const App = () => {
  return (
    <>
      <div style={{ minHeight: "200vh" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            width: "100%",
          }}
        >
          <Navbar1 />
          <Navbar />
        </div>
        <Footer />
        <h1>React App</h1>
      </div>
    </>
  )
}

export default App
