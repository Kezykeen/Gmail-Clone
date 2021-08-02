import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    messageModalIsOpen: false,
    selectedMail: null,
  },
  reducers: {
    openMessageModal: (state) => {
      state.messageModalIsOpen = true;
    },
    closeMessageModal: (state) => {
      state.messageModalIsOpen = false;
    },
    openMail: (state, action) => {
      state.selectedMail = action.payload;
    },
  },
});

export const { openMail, openMessageModal, closeMessageModal } =
  mailSlice.actions;

export const selectMessageModalIsOpen = (state) =>
  state.mail.messageModalIsOpen;
export const selectMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;
