import axios from 'axios';
import {BASE_API_URL} from './constants';

const getStory = async (id) => {
    try {
        return axios.get(`${BASE_API_URL}/item/${id}.json`);
    } catch(error) {
        console.log(`Failed fetching story ${id}`);
    }
}

export const getStories = async (type) => {
    try {
        const { data: storyIds } = await axios.get(`${BASE_API_URL}/${type}stories.json?limitToFirst=30&orderBy="$key"`);
        return Promise.all(storyIds.map(getStory));
    } catch(error) {
        console.log('Error getting list of stories');
    }
}
