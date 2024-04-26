import './App.css'
import BannerSlider from './Components/Header/BannerSlider'
import Card from './Components/CraftsCard/Card'
import { useLoaderData } from 'react-router-dom'
import Banner from './Components/Header/Banner'
import { JackInTheBox, Rotate, Zoom, Fade, Bounce, Slide } from 'react-awesome-reveal'

function App() {
  const loadedCrafts = useLoaderData();
  console.log(loadedCrafts);

  return (
    <div>
      <JackInTheBox>
        <h2 className='text-3xl font-extrabold my-3'>Immerse Yourself in Artistry</h2>
      </JackInTheBox>
      <Rotate>
        <p className='font-semibold my-3 mx-20'>Embrace the artistry of life with our vibrant collection of paintings and drawings. Explore boundless creativity and curated masterpieces that inspire and captivate.</p>
      </Rotate>
      <Banner />
      <Zoom delay={1000}>
        <h2 className='text-3xl font-extrabold my-3'>Unleash Your Creativity With Us</h2>
      </Zoom>
      <Fade delay={1500}>
        <p className='font-semibold my-5 mx-10'>Journey through a gallery of captivating paintings, where each stroke tells a story and every canvas holds boundless inspiration. Explore our curated collection and let the colors of creativity awaken your senses</p>
      </Fade>
      <BannerSlider />
      {/* 6 crafts card */}
      <JackInTheBox delay={1000}>
        <h3 className='text-3xl font-extrabold my-3'>Discover Artistic Treasures</h3>
      </JackInTheBox>
      <Bounce delay={1500}>
        <p className='font-semibold my-5 mx-20'>Uncover a world of creativity and expression with our curated selection of paintings and drawings. Each card showcases a unique masterpiece, inviting you to explore the rich tapestry of artistic talent and inspiration</p>
      </Bounce>
      <Slide duration={1500} delay={1000}>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 max-w-6xl mx-auto my-10'>
        {
          loadedCrafts?.map((crafts) => <Card key={crafts._id} crafts={crafts}></Card>)
        }
      </div>
      </Slide>
    </div>
  )
}

export default App
