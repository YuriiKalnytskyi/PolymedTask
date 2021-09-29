import axios from "axios";

let options = {
    baseURL: ' https://b127-46-211-52-109.ngrok.io/api',
}
let axiosInstance = axios.create(options);

export const sendData = async (data)=>{
    try {
        console.log(data)
        const response = await axiosInstance.post('/contact', data);
        console.log(response)

        return response.data
    } catch (e) {
        // alert(JSON.stringify(e.response.data, null, 2))

        alert(JSON.stringify("error"))

    }
}