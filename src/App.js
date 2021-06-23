import mmm from '../src/image/mamun1';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="main-div">
        <h1>Profile</h1>
        <div className="bodyflex">
          <div className="imagediv">
            <img src={mmm} alt=""/>
          </div>
          <div className="biodiv">
            <p>Name: Mazharul Islam Mamun sdfs</p>
            <p>Father’s name: Yeah Yea</p>
            <p>Mother’s name: Suraia Khatun</p>
            <address>Present Address:<br/>Sylhet Sadar,<br/>Amborkhana</address>
            <address> Permanent Address:<br/>Sylhet Sadar, <br/> Sunamgonj, <br/> Duara Bazar</address>
            <div className="linkdiv">
              <a href="https://www.facebook.com/profile.php?id=100005029123381" target="_blank">Facebook...</a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
