import {configureStore} from '@reduxjs/toolkit';
import langReducer from '@/stores/modules/langStore';

const store = configureStore({
  reducer: {
    lang: langReducer,
  },
});

export default store;
