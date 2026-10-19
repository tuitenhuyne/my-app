
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ListOfOrchids from './ListOfOrchids';

function Naturals() {
  const [searchParams] = useSearchParams();
  const isNatural = searchParams.get('isNatural') === 'true';

  const naturalOrchids = ListOfOrchids.filter(
    (orchid) => orchid.isNatural === isNatural
  );

  return (
    <div className="container my-4">
      <h1>Natural Orchids</h1>

      <div className="row">
        {naturalOrchids.map((orchid) => (
          <div className="col-md-4 mb-4" key={orchid.id}>
            <div className="card h-100">
              <img
                src={orchid.image}
                alt={orchid.name}
                className="card-img-top"
                style={{ height: '220px', objectFit: 'cover' }}
              />

              <div className="card-body">
                <h5 className="card-title">{orchid.name}</h5>
                <p>Color: {orchid.color}</p>
                <p>Origin: {orchid.origin}</p>

                <Link
                  className="btn btn-primary"
                  to={`/detail?id=${orchid.id}`}
                >
                  Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {naturalOrchids.length === 0 && (
        <p>No orchids found.</p>
      )}

      <Link to="/" className="btn btn-secondary">
        Back to Home
      </Link>
    </div>
  );
}

export default Naturals;
