import React from 'react'
import { useSelector } from "react-redux"
import "./PhotoPreview.css"
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import UndoSharpIcon from '@mui/icons-material/UndoSharp';
import { useNavigate } from "react-router-dom";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore"; 

function PhotoPreview() {
    const navigate=useNavigate();
    const photo = useSelector(root=>root);
    
    const getBack=()=>{
        navigate("/camera");
    }
    const sendDatabase=()=>{
        try {
            const docRef = addDoc(collection(db, "snaps"), {
              user:"Hello",
              photo:photo.photo,
            });
            console.log("Photo Added");
          } catch (e) {
            console.error("Error adding document");
          }
          navigate("/listall")
    }
    return (
        <div className='photoPreview'>
            <div className="photoPreview__image">
            <img src={photo.photo} alt={photo.user} />
            <div className="photoPreview__bottom">
                <SendRoundedIcon onClick={sendDatabase} fontSize="medium"/>
                    
            </div>
            <div className="photoPreview__top">
                <UndoSharpIcon onClick={getBack}fontSize="medium"/>
            </div>
            </div>
        </div>
    )
}

export default PhotoPreview
