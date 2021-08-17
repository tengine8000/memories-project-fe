import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload.sort((a, b) => a - b);
    case CREATE:
      return [...posts, action.payload].sort((a, b) => a - b);
    case UPDATE:
    case LIKE:
      return posts.map((post) => post._id === action.payload._id ? action.payload : post).sort((a, b) => a - b);
    case DELETE:
      return posts.filter((post) => (post._id !== action.payload._id)).sort((a, b) => a - b);
    default:
      return posts.sort((a, b) => a - b);
  }
};