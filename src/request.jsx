import axiosInstance from './axios.jsx';


const getBooks = async (bookType, lexileMin, lexileMax,  page) => {
  try {
    const response = await axiosInstance.get('/search', {
      params: {
        book_type: bookType,
        lexile_min: lexileMin,
        lexile_max: lexileMax,
        results_per_page: 50,
        page: page 
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export default getBooks;
