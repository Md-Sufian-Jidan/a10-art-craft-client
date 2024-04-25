import { useState } from 'react'
import './App.css'
import BannerSlider from './Components/Header/BannerSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <BannerSlider /> */}
      <h1>Vite + React</h1>
    </div>
  )
}

export default App
