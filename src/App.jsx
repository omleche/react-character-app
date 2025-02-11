import { useState } from 'react'
import{ Header } from "./components/Header"
import { HomePage } from "./pages/HomePage"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
      <Route path = "/" element ={<HomePage />} />
      <Route path = "/*" element ={<h2>Page Not Found</h2>} />
      </Routes>


    </>
  )
}

export default App
