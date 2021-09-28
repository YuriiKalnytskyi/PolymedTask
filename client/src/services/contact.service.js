import axios from "axios";

let options = {
    baseURL: 'http://localhost:5000/api/',
}
let axiosInstance = axios.create(options);

export const sendData = async (data)=>{
    try {
        console.log(data)
        const response = await axiosInstance.post('contact', data);
        console.log(response)

        return response.data
    } catch (e) {
        // alert(JSON.stringify(e.response.data, null, 2))
        alert(JSON.stringify("error"))

    }
}