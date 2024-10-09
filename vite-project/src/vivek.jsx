const Vivek = () => {
    return (
        <div className=" flex py-5"> 
            <video
                autoPlay
                loop
                muted
                className="w-full h-auto" // Adjust the class as needed for styling
            >
                <source src="src/assets/mars.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <video
                autoPlay
                loop
                muted
                className="w-full h-auto" // Adjust the class as needed for styling
            >
                <source src="src\assets\space.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Removed duplicate video tag */}
        </div>
    );
};

export default Vivek;
