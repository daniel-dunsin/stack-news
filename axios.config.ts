import axios from "axios";

const apiKey = process.env.NEWS_API_KEY;

const http = axios.create({
  baseURL: "https://newsapi.org/v2",
});

http.interceptors.request.use((req) => {
  if (req.url) {
    req.url += req.url?.includes("?") ? `&apiKey=${apiKey}` : `?apiKey=${apiKey}`;
  }

  return req;
});
