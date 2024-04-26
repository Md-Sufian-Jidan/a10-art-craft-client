import { useState } from 'react'
import './App.css'
import BannerSlider from './Components/Header/BannerSlider'
import Card from './Components/CraftsCard/Card'
import { useLoaderData } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const loadedCrafts = useLoaderData();
  console.log(loadedCrafts);

  return (
    <div>
      <BannerSlider />
      {/* 6 crafts card */}
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 max-w-6xl mx-auto my-10'>
        {
          loadedCrafts?.map((crafts) => <Card key={crafts._id} crafts={crafts}></Card>)
        }
      </div>

    </div>
  )
}

export default App
