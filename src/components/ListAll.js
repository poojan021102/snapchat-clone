import React from 'react'
import "./ListAll.css";
import { useSelector } from "react-redux";
import { Avatar } from '@mui/material';
import AllUserPhoto from './AllUserPhoto';
import { getAuth, signOut } from "firebase/auth";
import { PhotoTwoTone } from '@mui/icons-material';
import { useNavigate } from "react-router-dom"
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

function ListAll() {
    const photo = useSelector(root => root);
    const navigate = useNavigate();
    const signOutNow = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            console.log(error);
        });
    }
    const goCamera=()=>{
        navigate("/camera");
    }

    return (
        <div className='listAll'>
            <div className="listAll__header">
                <div className="listAll__header__avatar">
                    <Avatar onClick={signOutNow} alt={photo.user.displayName} src={photo.user.photoURL} />
                </div>
                <div className="listAll__header__name">
                    {photo.user.displayName}
                </div>
            </div>
            <div className="listAll__allPhotoes">
                <AllUserPhoto
                    photoURL={photo.user.photoURL}
                    displayName={photo.user.displayName}
                />
            </div>
            <footer className='listAll__footer'>
                <CircleOutlinedIcon fontSize="large" onClick={goCamera} className='listAll__footer__go'/>
            </footer>
        </div>
    )
}

export default ListAll
