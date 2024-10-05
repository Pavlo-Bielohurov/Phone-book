import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectFilter } from "../filters/filtersSlice";

const hundlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const hundleRejected = (state, actions) => {
  state.loading = false;
  state.error = actions.payload;
};

const slice = createSlice({
  name: "contacs",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, hundlePending)
      .addCase(fetchContacts.fulfilled, (state, actions) => {
        state.loading = false;
        state.items = actions.payload;
      })
      .addCase(fetchContacts.rejected, hundleRejected)
      .addCase(addContact.pending, hundlePending)
      .addCase(addContact.fulfilled, (state, actions) => {
        state.loading = false;
        state.items.push(actions.payload);
      })
      .addCase(addContact.rejected, hundleRejected)
      .addCase(deleteContact.pending, hundlePending)
      .addCase(deleteContact.fulfilled, (state, actions) => {
        state.loading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== actions.payload.id
        );
      })
      .addCase(deleteContact.rejected, hundleRejected);
  },
});

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectVisibileContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
export default slice.reducer;
