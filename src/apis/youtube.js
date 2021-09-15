import axios from 'axios';
const KEY = 'AIzaSyAZg_L0uDpcKyOkTRp2wCNdqWGBSO3eEkk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { part: 'snippet', type: 'video', maxResults: 5, key: KEY },
});
