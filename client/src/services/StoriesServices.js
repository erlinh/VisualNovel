import axios from "../axios";

const getALLStories =()=>{
    return axios.get('/stories');
};

export default {
    getALLStories
}