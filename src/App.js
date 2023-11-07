import { useState } from 'react';
import './App.css';
import video from './assets/water.mp4';

function App() {
  const [isActive, setActive] = useState('false');
  const toggleActive = () => {
    setActive(!isActive);
  };

  return (
    <div className="App">
      <div className="videoContainer">
        <div className="videoBackground">
          <video autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
            <source src={video} type="video/mp4" />
          </video>
          <div className="textOverlay">
          <div className="icon">
              <>
                <svg className={`ham hamRotate ham8 ${isActive ? "active" : ""}`} viewBox="0 0 100 100" width="80" onClick={toggleActive}>
                  <path className="line top" d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
                  <path className="line middle" d="m 30,50 h 40" />
                  <path className="line bottom" d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
                </svg>
              </>
          </div>
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
