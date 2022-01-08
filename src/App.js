import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import CameraView from './components/CameraView';
function App() {
  return (
    <div className="app">
      <img src="https://www.gannett-cdn.com/-mm-/f4c4c3d8d99ab9a0fd37e8d3d494112eb6c0c801/c=0-0-580-326/local/-/media/2017/05/15/USATODAY/usatsports/snapchat-logo_large.png?width=3200&height=1680&fit=crop" 
      alt="Snapchat" className='app__logo' />
      <div className="main_app_body">
        <Routes>
          <Route path="/login" element={<h1>This is login page</h1>} />
          <Route path="/" element={<CameraView/>} />
          <Route path="/photopreview" element={<h1>This is photo preview</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
