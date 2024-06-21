import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const ArticleCard = ({ article }) => {
  return (
    <Card className="mb-3 h-100">
      {article.urlToImage && (
        <Card.Img variant="top" src={article.urlToImage} alt={article.title} />
      )}
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.description}</Card.Text>
        <Link to={`/article/${encodeURIComponent(article.url)}`}>
          <Button variant="primary">Read more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
