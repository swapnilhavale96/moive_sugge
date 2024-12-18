"use server";

const fetchTitleDetails = async (titleId) => {
  const apiKey = "QKtaYxSz0Bm6voJz2gyGCfmFfvOadTLseaVOuVOF";
  if (!apiKey) {
    throw new Error("WATCHMODE_API_KEY is not set in environment variables");
  }

  const url = `https://api.watchmode.com/v1/title/${titleId}/details/?apiKey=${apiKey}`;

  https: try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const movie_data = await response.json();
    return {
      id: movie_data.imdb_id,
      title: movie_data.title,
      plot_overview: movie_data.plot_overview,
      type: movie_data.type,
      release_date: movie_data.release_date,
      genre_names: movie_data.genre_names,
      backdrop: movie_data.backdrop,
      trailer: movie_data.trailer,
      trailer_thumbnail: movie_data.trailer_thumbnail,
    };
  } catch (error) {
    console.error("Error fetching title details:", error);
    throw error;
  }
};

export { fetchTitleDetails };
