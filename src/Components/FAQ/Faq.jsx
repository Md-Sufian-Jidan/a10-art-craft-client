
const Faq = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row items-center gap-5 my-5'>
            <div className="join join-vertical w-full ">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        How do I get started with painting or drawing?
                    </div>
                    <div className="collapse-content">
                        <p>Begin by exploring different mediums and techniques to find what resonates with you. Experiment with sketching, painting, or digital art to discover your preferences and interests.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">What materials do I need to start painting or drawing?</div>
                    <div className="collapse-content">
                        <p>Basic materials include paper or canvas, pencils or brushes, and paints or markers. As you progress, you may want to invest in higher-quality materials suited to your preferred medium.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">How can I improve my drawing skills?</div>
                    <div className="collapse-content">
                        <p>Practice regularly and study from observation. Focus on fundamentals such as proportion, perspective, and shading. Consider taking drawing classes or following online tutorials to learn new techniques.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">What are some tips for choosing colors in my paintings?</div>
                    <div className="collapse-content">
                        <p>Experiment with color theory to understand how different hues interact. Consider the mood or atmosphere you want to convey and choose colors that complement each other harmoniously.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">How do I overcome creative blocks?</div>
                    <div className="collapse-content">
                        <p>Take a break and step away from your work to gain fresh perspective. Explore other forms of art or engage in activities that inspire you. Keep a sketchbook for jotting down ideas and doodling to spark creativity.</p>
                    </div>
                </div>
                {/* <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">How can I improve my drawing skills?</div>
                    <div className="collapse-content">
                        <p>Practice regularly and study from observation. Focus on fundamentals such as proportion, perspective, and shading. Consider taking drawing classes or following online tutorials to learn new techniques.</p>
                    </div>
                </div> */}
            </div>
            <div>
                {/* <img className="h-[700px] w-[700px] flex-1" src="https://i.imgur.com/dzOdozn.jpeg" alt="FaQ" /> */}
                <img className="h-[600px] w-[700px]" src="https://i.imgur.com/6c2GJdP.jpeg" alt="FaQ" />
            </div>
        </div>
    );
};

export default Faq;