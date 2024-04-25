import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://book-finder1.p.rapidapi.com/api',
  headers: {
    'X-RapidAPI-Key':'16be2ce0b2mshd797fc30b00ff7ap1821f4jsn766d07181d04',
    'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
  }
});

export default axiosInstance;

//'b1e9a3478amsh27404d7adf57bfdp1bc6b3jsn57a266d48683'
//'16be2ce0b2mshd797fc30b00ff7ap1821f4jsn766d07181d04'

