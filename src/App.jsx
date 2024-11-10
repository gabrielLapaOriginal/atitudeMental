import { useState, useEffect } from 'react'
import './App.css'
import MainContent from './components/MainContent'
import SplashScreen from './components/SplashScreen'
import Ajuda from "./components/Ajuda"
import Workshops from "./components/Workshops"
import Diagnostico from "./components/Diagnostico"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    // Renderiza o SplashScreen enquanto está carregando
    return <SplashScreen />
  }

  // Renderiza o restante do app após o carregamento
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/diagnostico" element={<Diagnostico />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
