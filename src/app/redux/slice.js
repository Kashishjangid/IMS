const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState={
    users:[]
};

const Slice=createSlice({
    name:"addUserSlice",
    initialState,
    reducers:{
        addUser:(state, action)=>{
            console.log(action);
            // djdhio
            const data={
                id:nanoid(),
                name:action.payload
            }
            state.users.push(data);

        }
        ,
        removeUser:(state,action)=>{
            const data=state.users((item)=>{
                return item.id!==action.payload
            });
            state.users=data;
        }
    }
});
export const {addUser, removeUser}=Slice.actions
export default Slice.reducer;