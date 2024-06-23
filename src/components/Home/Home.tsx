import bike from 'src/assets/buke.jpg'
const Home = () => {
    return (
        <div className="container">
            <div className="card">
                <img src={bike} className="card-img-top" alt="Fixed Gear Bike" />
                <div className="card-body">
                    <h5 className="card-title">Welcome to Fixed Gear Bikes</h5>
                    <p className="card-text">
                        Explore the world of fixed gear bikes with us. Discover unique rides and stories from passionate cyclists.
                    </p>
                    <a href="/" className="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
    );
};

export default Home;
