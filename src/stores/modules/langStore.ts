import {createSlice} from '@reduxjs/toolkit';
import {getData, storeData} from '@/utils/local';

const langKey = 'LANG';

const getLocalLang = async () => {
  const val = await getData(langKey);
  return val || 'en';
};

const langStore = createSlice({
  name: 'lang',
  initialState: {
    lang: getLocalLang(),
  },
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
      storeData(langKey, action.payload);
    },
  },
});

const {setLang} = langStore.actions;

export {setLang};

const reducer = langStore.reducer;

export default reducer;
