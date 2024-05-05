import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // todo log some info here
  }
};

const getData = async (key: string) => {
  try {
    const val = await AsyncStorage.getItem(key);
    if (val) {
      return val;
    }
  } catch (e) {
    // todo log some info here
  }
};

export {storeData, getData};
