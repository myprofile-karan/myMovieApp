import axios from "axios";
import React from "react";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjFmNTdmODQ3NjRmMWQyY2U1NjVmYzdhMzUzNGMyMSIsInN1YiI6IjY1NGY0ZDc0NjdiNjEzMDEzYzRjMmZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HfI5IoijrwHku0-GTa4rQFz7W4nkJ7pLMy90aH0kCrc'

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default fetchDataFromApi;
