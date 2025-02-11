import { Route, Routes } from "react-router-dom"
import Header from "./components/Header.jsx"
import HomePage from "./Pages/HomePage.jsx"
import CharacterDetails from "./Pages/CharacterDetails.jsx"

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />        
        <Route path="/characters/:characterId" element={<CharacterDetails />} />
        <Route path="/*" element={<h2>Page not found</h2>} />
      </Routes>
    </>
  )
}

export default App;