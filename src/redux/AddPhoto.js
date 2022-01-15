const initialState={
    photo:"",
    user:null
};
const AddPhoto=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_PHOTO":
            state.photo=action.photo;
            return state;
            break;
        case "ADD_USER":
            initialState.user = action.user;
            return initialState;
            break;
        case "REMOVE_PHOTO":
            state.photo="";
            return state;
            break;
        default:
            return state;
            break;
    }
}
export default AddPhoto;