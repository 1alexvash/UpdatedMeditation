import "./scss/main.scss";

import LogoImg from "./images/logo.svg";
import MusicImg from "./images/music.svg";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <img src={LogoImg} alt="" className="logo" />
        <img src={MusicImg} alt="" className="music" />
      </header>
      <div className="start">
        <h1>CALM DOWN NOW</h1>
        <div className="circle">START</div>
      </div>
      <div className="duration">
        <div className="circle">
          <div className="text">1</div>
          <div className="text-time">min</div>
        </div>
        <div className="circle">
          <div className="text">3</div>
          <div className="text-time">min</div>
        </div>
        <div className="circle">
          <div className="text">5</div>
          <div className="text-time">min</div>
        </div>
        <div className="circle">
          <div className="text">10</div>
          <div className="text-time">min</div>
        </div>
      </div>
    </div>
  );
};

export default App;
