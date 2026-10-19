
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import ListOfOrchids from "../LAB1-2-3/ListOfOrchids";

function Detail() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const orchid = ListOfOrchids.find(
    (item) => String(item.id) === id
  );

  if (!orchid) {
    return (
      <div className="container my-4">
        <h2>Orchid not found</h2>
        <p>The orchid you are looking for does not exist.</p>
        <Link className="btn btn-primary" to="/">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h1 className="mb-4">{orchid.name}</h1>

      <img
        src={orchid.image}
        alt={orchid.name}
        className="img-fluid rounded mb-4"
        style={{
          maxWidth: "450px",
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover"
        }}
      />

      <div className="card p-4">
        <p><strong>ID:</strong> {orchid.id}</p>
        <p><strong>Rating:</strong> {orchid.rating} / 5</p>
        <p><strong>Color:</strong> {orchid.color}</p>
        <p><strong>Origin:</strong> {orchid.origin}</p>
        <p><strong>Category:</strong> {orchid.category}</p>
        <p>
          <strong>Special:</strong>{" "}
          {orchid.isSpecial ? "Yes" : "No"}
        </p>

        <p>
          <strong>Natural:</strong>{" "}
          {orchid.isNatural === undefined
            ? "Not specified"
            : orchid.isNatural
              ? "Yes"
              : "No"}
        </p>

        <a
          href={orchid.source}
          target="_blank"
          rel="noreferrer"
          className="mb-3"
        >
          View scientific source
        </a>

        <div>
          <Link to="/" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Detail;
