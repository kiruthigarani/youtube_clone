const API_KEY = 'AIzaSyAD2y7UTCLJFF3wqsvn-fFT11AzPvR3d1c';

export const apiURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;

export const videoURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}`;

export const playListURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGg&key=${API_KEY}`;