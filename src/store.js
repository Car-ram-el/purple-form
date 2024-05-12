import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    section1: {},
    section2: {},
    section3: {},
    section4: {},
    section5: {},
    section6: {},
  },
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_FORM_DATA':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.section]: action.data,
        },
      };
    default:
      return state;
  }
}

const store = configureStore({reducer:rootReducer})

export default store;
