import axios from 'axios';

const ROOT = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=1234R'
export const FETCH_POSTS = 'fetch_posts';

export function fetchPosts() {
  const request = axios.get(`${ROOT}/posts${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
