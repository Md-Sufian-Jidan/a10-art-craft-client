import { Fade, Bounce } from "react-awesome-reveal";

const LearnArt = () => {
    return (
        <div className="my-5">
            <div className="hero rounded-lg" style={{ backgroundImage: 'url(https://i.imgur.com/iNPf2iy.jpeg)' }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content">
                    <div className="max-w-md">
                        <Fade><h1 className="mb-5 lg:text-4xl text-gray-200 text-2xl font-extrabold">Let s make your vision a reality. Begin your project discussion now.</h1></Fade>
                       <Bounce>
                       <p className="mb-5 text-gray-300">Dive into a realm of creativity and expression with our Learn Art section. Whether you're a novice seeking to hone your skills or a seasoned artist looking for inspiration, our curated collection of tutorials, tips, and resources has something for everyone. Unlock your artistic potential and embark on a journey of discovery with expert guidance and encouragement.</p>
                       </Bounce>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnArt;