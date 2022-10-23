import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            'X-RapidAPI-Key': '8a8f2f4613msh2f3fafd34dc9761p1919f3jsn129817ad8649',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data
}