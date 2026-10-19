
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ListOfOrchids from './ListOfOrchids';

function Detail() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const orchid = ListOfOrchids.find(
    (item) => item.id === id
  );

  if (!orchid) {
    return (
      <div className="container my-4">
        <h2>Orchid not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h1>{orchid.name}</h1>

      <img
        src={orchid.image}
        alt={orchid.name}
        style={{
          width: '100%',
          maxWidth: '400px',
          borderRadius: '12px'
        }}
      />

      <p>Rating: {orchid.rating}</p>
      <p>Color: {orchid.color}</p>
      <p>Origin: {orchid.origin}</p>
      <p>Category: {orchid.category}</p>
      <p>Special: {orchid.isSpecial ? 'Yes' : 'No'}</p>
      <p>Natural: {orchid.isNatural ? 'Yes' : 'No'}</p>

      <a href={orchid.source} target="_blank" rel="noreferrer">
        View source
      </a>

      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Detail;
