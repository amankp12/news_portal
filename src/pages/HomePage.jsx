import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../redux/articlesSlice';
import ArticleCard from '../components/ArticleCard';
import CategoryFilter from '../components/CategoryFilter';
import PaginationComponent from '../components/Pagination';

const HomePage = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles);
  const loading = useSelector((state) => state.articles.loading);
  const [category, setCategory] = useState('general');
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchArticles({ category, page }));
  }, [category, page, dispatch]);

  return (
    <div className="container my-5">
      <CategoryFilter setCategory={setCategory} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {articles.map((article) => (
            <div className="col-md-4 mb-4 d-flex" key={article.url}>
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      )}
      <PaginationComponent currentPage={page} setPage={setPage} />
    </div>
  );
};

export default HomePage;
