import AsyncStorage from '@react-native-async-storage/async-storage';

/*
* @function saveDeviceData This will write the data to disk, with a given key, this * could be written to a SQLite DB file, a flat file, AsyncStorage is an abstract 
* wrapper around this. 
* @param key {String} Key identifier
* @param data {any} Data to save for the given key
*/
export const saveDeviceData = async (key, data) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
      console.log(`Error saving data for key ${key}`, data)
      throw e;
    }
};
/*
* @param key {String} Key identifier for data to load
*/
export const loadDeviceData = async (key) => {
    try {

        return JSON.parse(await AsyncStorage.getItem(key))
    } catch (e) {
      console.log(`Error loading data for key ${key}`)
      throw e;
    }
};

export const deleteDeviceData = async (key) => {
    try {

        return JSON.parse(await AsyncStorage.removeItem(key))
    } catch (e) {
      console.log(`Error deleting data for key ${key}`)
      throw e;
    }
};

export const fetchAllItems = async () => {
  try {
      const keys = await AsyncStorage.getAllKeys()
      const result = await AsyncStorage.multiGet(keys)

      return result.map(req => JSON.parse(req[1]))
  } catch (error) {
      console.log(error, "problemo")
  }
}

export const deleteAllItems = async () => {
  try 
  {
    AsyncStorage.getAllKeys()
    .then(keys => AsyncStorage.multiRemove(keys))
    .then(() =>  console.log('all data removed'))
  }
  catch (e) 
  {
    console.log(`Error deleting data for key ${key}`)
  }
};

