
const Banner = () => {
    return (
        <div className="my-10">
            <div className="hero lg:h-[50vh] bg-cover rounded" style={{ backgroundImage: 'url(https://i.imgur.com/rbA2ieq.jpeg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Discover Your Creative Canvas</h1>
                        <p className="mb-5">Unleash your imagination and explore a world of artistic expression with our curated collection of paintings and drawings. From captivating landscapes to intimate portraits, our gallery showcases the talent and diversity of artists around the globe.</p>
                        <button className="btn bg-[#fe5986]">Explore More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;