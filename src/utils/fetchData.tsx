export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "58474f9329msh85cfbc6244d1d21p11616cjsnb6134b306a24",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url: string, options: {}) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
