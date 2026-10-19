import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import ListOfOrchids from "../LAB1-2-3/ListOfOrchids";

function Naturals() {
  const [searchParams] = useSearchParams();

  const isNatural = searchParams.get("isNatural") !== "false";

  const naturalOrchids = ListOfOrchids.filter(
    (orchid) => orchid.isNatural === isNatural
  );

  return (
    <div className="container my-4">
      <h1 className="mb-3">Natural Orchids</h1>

      <p className="text-muted">
        Explore orchids according to their natural status.
      </p>

      <div className="mb-4">
        <Link
          to="/naturals?isNatural=true"
          className="btn btn-success me-2"
        >
          Natural
        </Link>

        <Link
          to="/naturals?isNatural=false"
          className="btn btn-outline-secondary"
        >
          Not Natural
        </Link>
      </div>

      {naturalOrchids.length === 0 ? (
        <p>
          No orchids found.
        </p>
      ) : (
        <div className="row g-4">
          {naturalOrchids.map((orchid) => (
            <div className="col-12 col-md-6 col-lg-4" key={orchid.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={orchid.image}
                  alt={orchid.name}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <h5 className="card-title">{orchid.name}</h5>
                  <p className="card-text">
                    <strong>Color:</strong> {orchid.color}
                  </p>
                  <p className="card-text">
                    <strong>Origin:</strong> {orchid.origin}
                  </p>
                  <p className="card-text">
                    <strong>Category:</strong> {orchid.category}
                  </p>

                  <Link
                    to={`/detail?id=${orchid.id}`}
                    className="btn btn-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Link to="/" className="btn btn-secondary mt-4">
        Back to Home
      </Link>
    </div>
  );
}

export default Naturals;
