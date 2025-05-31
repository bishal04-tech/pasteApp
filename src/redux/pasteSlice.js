import { createSlice } from '@reduxjs/toolkit'
import {toast} from 'react-hot-toast';
const initialState = {
  pastes:localStorage.getItem('pastes') ? JSON.parse(localStorage.getItem('pastes')) : []
}

export const pasteSlice = createSlice({
  name: 'pastes',
  initialState,
  reducers: {
    addToPastes: (state,action) => {
      const paste = action.payload;
      // Check if paste with same ID already exists
      const existingPasteIndex = state.pastes.findIndex((item) => item._id === paste._id);
      if (existingPasteIndex >=0) {
        
        state.pastes[existingPasteIndex] = paste;
        toast.success('Paste updated successfully!');
        return;
      }
      state.pastes.push(paste);
      localStorage.setItem('pastes', JSON.stringify(state.pastes));
      toast.success('Paste added successfully!');
    },
    updateToPastes: (state,action) => {
      const paste = action.payload;
      // Find the index of the paste to update
      const existingPasteIndex = state.pastes.findIndex((item)=> item._id === paste._id);
      if (existingPasteIndex >=0) {
        // Update the existing paste
        state.pastes[existingPasteIndex] = paste;
        localStorage.setItem('pastes', JSON.stringify(state.pastes));
        toast.success('Paste updated successfully!');
      } else {
        toast.error('Paste not found for update!');
      }
      
    },
    resetAllPastes: (state, action) => {
       state.pastes = [];
        localStorage.removeItem('pastes');
    },
    
     removeFromPastes: (state, action) => {
       const pasteId = action.payload;
       console.log(pasteId);
       const index = state.pastes.findIndex((item) => item._id === pasteId);
       if (index >= 0) {
         state.pastes.splice(index, 1);
         localStorage.setItem('pastes', JSON.stringify(state.pastes));
         toast.success('Paste removed successfully!');
       } else {
         toast.error('Paste not found for removal!');
       }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes,removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer