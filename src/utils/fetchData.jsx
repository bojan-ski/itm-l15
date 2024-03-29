import axios from "axios";

const fetchData = async (latitude, longitude) => {
    // console.log(latitude, longitude);

    try {
        const response = await axios(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
        const data = response.data
        console.log(data.address.town);
    } catch (error) {
        console.log(`There was an error: ${error}`);
    }
}

export default fetchData;