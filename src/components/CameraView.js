import React from 'react'
import "./CameraView.css"
import Webcam from "react-webcam";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function CameraView() {
    const history=useNavigate();
    const dispatch=useDispatch();
    const webcamRef = React.useRef(null);
    const capture=React.useCallback(
        () => {
          const imageSrc = webcamRef.current.getScreenshot();
          const action={
              type:"ADD_PHOTO",
              photo:imageSrc
          }
          dispatch(action);
          history("/photopreview")
        },
        [webcamRef]
      );
    const videoConstraints = {
        width: 400,
        height: 500,
        facingMode: "user"
    };

    return (
        <>
        <div className="cameraView">
            <Webcam
                audio={false}
                height={videoConstraints.height}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={videoConstraints.width}
                videoConstraints={videoConstraints}
            />
            <div className="cameraView__captureButton">
            <CircleOutlinedIcon fontSize="large" onClick={capture} className="cameraView__capture"/>
            </div>
        </div>
        </>
    )
}

export default CameraView
