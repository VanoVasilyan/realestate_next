import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            'X-RapidAPI-Key': 'f26b201dc8mshb31cafc285c4670p170c46jsn66be9cb2166b',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data
}