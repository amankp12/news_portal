import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Image } from 'react-bootstrap';

const ArticlePage = () => {
  const { id } = useParams();
  const article = useSelector((state) =>
    state.articles.articles.find((article) => article.url === decodeURIComponent(id))
  );

  return (
    <Container className="my-5">
      {article ? (
        <>
          <h1>{article.title}</h1>
          {article.urlToImage && (
            <Image src={article.urlToImage} alt={article.title} fluid className="mb-3" />
          )}
          <p>{article.content}</p>
        </>
      ) : (
        <p>Article not found</p>
      )}
    </Container>
  );
};

export default ArticlePage;
