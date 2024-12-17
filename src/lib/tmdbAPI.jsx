const API_KEY = "16fd9083336cbcc90159539e2d26e3bb";

export async function fetchPoster(tmdbType, tmdbId) {
  try {
    const url = `https://api.themoviedb.org/3/${tmdbType}/${tmdbId}?api_key=${API_KEY}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.poster_path) {
      return `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
    }
    return null;
  } catch (error) {
    console.error("Error fetching poster:", error);
    return null;
  }
}
