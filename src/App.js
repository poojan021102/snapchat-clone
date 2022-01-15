import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import { useSelector } from "react-redux";
import PhotoPreview from './components/PhotoPreview';
import CameraView from './components/CameraView';
import ListAll from './components/ListAll';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from './components/Login';
function App() {
  const photo = useSelector(root=>root);
  const navigate = useNavigate();
  useEffect(() => {
    return()=>{
      if(photo.user==null){
          navigate("/");
      }
      else{
        navigate("/listall")
      }
    }
  }, [])
  return (
    <div className="app">
      <img src="https://www.gannett-cdn.com/-mm-/f4c4c3d8d99ab9a0fd37e8d3d494112eb6c0c801/c=0-0-580-326/local/-/media/2017/05/15/USATODAY/usatsports/snapchat-logo_large.png?width=3200&height=1680&fit=crop" 
      alt="Snapchat" className='app__logo' />
      <div className="main_app_body">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/camera" element={<CameraView/>} />
          <Route path="/photopreview" element={<PhotoPreview/>} />
          <Route path="/listall" element ={<ListAll/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
