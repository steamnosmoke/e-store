
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthModalOpen: false,
  isRegisterModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openAuthModal: (state) => {
      state.isAuthModalOpen = true;
      state.isRegisterModalOpen = false;
    },
    openRegisterModal: (state) => {
      state.isAuthModalOpen = false;
      state.isRegisterModalOpen = true;
    },
    closeModals: (state) => {
      state.isAuthModalOpen = false;
      state.isRegisterModalOpen = false;
    },
  },
});

export const { openAuthModal, openRegisterModal, closeModals } = modalSlice.actions;
export default modalSlice.reducer;
