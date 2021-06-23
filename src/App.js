import mmm from '../src/image/mamun1.jpg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <div id="main-div">
        <h1>Profile</h1>
        <div className="bodyflex">
          <div className="imagediv">
            <img src={mmm} alt=""/>
          </div>
          <div className="biodiv">
            <p>Name: {props.myName} </p>
            <p>Father’s name: {props.FatherName} </p>
            <p>Mother’s name: {props.MothersName} </p>
            <address>Present Address:<br/> {props.PresentAddress},<br/>Amborkhana</address>
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
