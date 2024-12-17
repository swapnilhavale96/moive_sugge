const API_KEY = '3d158574e427b05b2c016e3b8ac81f4f';

export async function fetchPoster(tmdbId) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${tmdbId}?api_key=${API_KEY}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.poster_path) {
      return `https://image.tmdb.org/t/p/w500${data.poster_path}`;
    }
    return null;
  } catch (error) {
    console.error('Error fetching poster:', error);
    return null;
  }
}

