import React from 'react';
import { Form } from 'react-bootstrap';

const CategoryFilter = ({ setCategory }) => {
  const categories = ['general', 'business', 'technology', 'entertainment'];

  return (
    <Form.Group className="mb-3">
      <Form.Label>Filter by Category</Form.Label>
      <Form.Control as="select" onChange={(e) => setCategory(e.target.value)}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default CategoryFilter;
