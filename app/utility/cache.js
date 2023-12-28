import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment'

const prefix = "cache";
const expiredTime = 5


const storeData = async (key, value) => {
    try {
        const item = {
            value,
            timeStamp: Date.now()
        }
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item))
    } catch (error) {
        console.log(error);
    }
};

function isExpired(item) {
    const now = moment(Date.now());
    const storedTime = moment(item.timeStamp);
    return now.diff(storedTime, "minutes") > expiredTime;
}


const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(prefix + key)
        if (!value) return null;

        const item = JSON.parse(value);


        if (isExpired(item)) {
            await AsyncStorage.removeItem(prefix + key);
            return null;
        }

        return item.value;

    } catch (error) {
        console.log(error);
    }
}

export default {
    storeData,
    getData
}