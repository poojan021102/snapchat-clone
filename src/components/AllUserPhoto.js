import React from 'react'
import { Avatar } from '@mui/material'
import "./AllUserPhoto.css"
function AllUserPhoto(props) {
    const showPhoto=()=>{
        //now we will show photo
    }
    return (
        <div onClick={showPhoto} className='allUserPhoto'>
            <div className="allUserPhoto__avatar">
                <Avatar alt={props.displayName} src={props.photoURL}/>
            </div>
            <div className="allUserPhoto__name">
                {props.displayName}
            </div>
        </div>
    )
}

export default AllUserPhoto
