import { Typewriter } from 'react-simple-typewriter'
import { Flip, Slide, Bounce } from "react-awesome-reveal";


const Banner = () => {
    return (
        <div className="my-10">
            <div className="hero lg:h-[400px] bg-cover rounded" style={{ backgroundImage: 'url(https://i.imgur.com/rbA2ieq.jpeg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <div >
                            <Slide>
                                <p className='text-xl font-bold'>Explore our collection of paintings and drawings.</p>
                            </Slide>
                            <Bounce delay={1000}>
                                <p className="mb-5">Unleash your imagination and explore a world of artistic expression with our curated collection of paintings and drawings. From captivating landscapes to intimate portraits, our gallery showcases the talent and diversity of artists around the globe.</p>
                            </Bounce>

                        </div>
                        <Flip>
                            <button className="btn bg-[#fe5986]">Explore More</button>
                        </Flip>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;