import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email:'',
  phone: '',
  address: '',
  avatar: '',
  acess_token:'',
  id:'',
}
export const userSlide = createSlice({
  name: 'user',
  initialState,
  
  reducers: {
    updateUser: (state, action) => {
      const {name='', email='',phone='', address='', avatar='',acess_token='',_id=''} = action.payload
      state.name = name ;
      state.email = email;
      state.phone = phone;
      state.address = address;
      state.avatar = avatar;
      state.id= _id;
      state.acess_token = acess_token
    },
    resetUser: (state) => {
      
      state.name = "";
      state.email = "";
      state.email = "";
      state.phone = "";
      state.address = "";
      state.avatar = "";
      state.id= "";
      state.acess_token = "";
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlide.actions

export default userSlide.reducer