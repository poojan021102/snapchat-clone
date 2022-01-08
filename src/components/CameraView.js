import React from 'react'
import "./CameraView.css"
import Webcam from "react-webcam";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
function CameraView() {
    const webcamRef = React.useRef(null);
    const capture=React.useCallback(
        () => {
          const imageSrc = webcamRef.current.getScreenshot();
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
