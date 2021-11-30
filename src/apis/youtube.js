import axios from 'axios';

const KEY = 'AIzaSyDwxUWu51j9FPrMmrDh8MtW-9zlH7nYpkU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY,
    type: 'video',
  },
});
