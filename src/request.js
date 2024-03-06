import axiosInstance from './axios.js';

const getBooks = async () => {
  try {
    const response = await axiosInstance.get('/search', {
      params: {
        series: 'Wings of fire',
        book_type: 'Fiction',
        lexile_min: '600',
        lexile_max: '800',
        results_per_page: '25',
        page: '1'
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getBooks;
