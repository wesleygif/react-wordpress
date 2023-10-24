import axios from 'axios';

export const fetchPostData = async (postId) => {
  try {
    const response = await axios.get(`http://localhost/wordpress/wp-json/wp/v2/posts/${postId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchPageData = async (pageId) => {
  try {
    const response = await axios.get(`http://localhost/wordpress/wp-json/wp/v2/pages/${pageId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchTagsData = async () => {
  try {
    const response = await axios.get(`http://localhost/wordpress/wp-json/wp/v2/tags`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchPost = async () => {
  try {
    const response = await axios.get(`http://localhost/wordpress/wp-json/wp/v2/posts`);
    return response.data;
  } catch (error) {
    throw error;
  }
};