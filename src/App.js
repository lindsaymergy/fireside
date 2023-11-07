import './App.css';

function App() {
  return (
    <div className="App">
      <div className="videoContainer">
        <div className="videoBackground">
          <iframe
            title="YouTube Video"
            width="100%"
            height="90%" /* Adjust height to cut off the top 10% of the video */
            src="https://www.youtube.com/embed/hQItqD6ERLM?autoplay=1&controls=0&mute=1&loop=1"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="textOverlay">
            <h2>Discover Tranquility</h2>
          </div>
        </div>
      </div>
      <div className="contentContainer">
        <div className="content blue">
          <h2>content here</h2>
          <p>Nestled beneath the towering pine trees, our luxurious safari tents offer a serene escape into the heart of nature.</p>
          <p>Embrace the cozy ambience of a wilderness cabin, where stargazing by the campfire is a nightly ritual.</p>
          <p>Wander through the enchanted forest and unwind in a riverside yurt, where the tranquil sounds of flowing water lull you to sleep.</p>
        </div>
        <div className="content green">
          <h2>Book your stay at our oasis</h2>
          <p>Embrace the cozy ambience of a wilderness cabin, where stargazing by the campfire is a nightly ritual.</p>
          <p><a href="https://www.airbnb.com/rooms/822425509654829635">Enjoy a yurt</a></p>
          <p>Wander through the enchanted forest and unwind in a riverside yurt, where the tranquil sounds of flowing water lull you to sleep.</p>
          <p><a href="https://www.airbnb.com/rooms/822425509654829635">Have a blast in a dome</a></p>
        </div>
        <div className="content blue">
          <h2>content here</h2>
          <p>Nestled beneath the towering pine trees, our luxurious safari tents offer a serene escape into the heart of nature.</p>
          <p>Embrace the cozy ambience of a wilderness cabin, where stargazing by the campfire is a nightly ritual.</p>
          <p>Wander through the enchanted forest and unwind in a riverside yurt, where the tranquil sounds of flowing water lull you to sleep.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
