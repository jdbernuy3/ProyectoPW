import axios from 'axios'

const URI = 'https://ggranda-20232-prograweb-as-api.azurewebsites.net/'

const get = async (endpoint, id) => {
    try {
        const url = URI.concat(endpoint + '/' + id);

        return await axios.get(url);
    } catch(err) {
        console.error(err);
        return null;
    }
}

const post = async (endpoint, payload) => {
    try {
        const url = URI.concat(endpoint);

        return await axios.post(url, payload);
    } catch(err) {
        console.error(err);
        return null;
    }
}

const put = async (endpoint, payload) => {
    try {
        const url = URI.concat(endpoint);

        return await axios.put(url, payload);
    } catch(err) {
        console.error(err);
        return null;
    }
}

const remove = async (endpoint) => {
    try {
        const url = URI.concat(endpoint);

        return await axios.delete(url);
    } catch(err) {
        console.error(err);
        return null;
    }
}

const base = { get, post, put, remove };

export default base;