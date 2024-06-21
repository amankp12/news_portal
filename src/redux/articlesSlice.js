import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '46956fb801fb4cfc876fad77fb3a66e0';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ category, page }) => {
    const response = await axios.get(BASE_URL, {
      params: {
        category,
        page,
        pageSize: 10,
        language: 'en',
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default articlesSlice.reducer;
