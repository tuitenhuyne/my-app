import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function OrchidCard({ orchid }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="orchid-card">
      <img
        src={orchid.image}
        alt={orchid.name}
        className="orchid-image"
      />

      <div className="orchid-info">
        <h2>{orchid.name}</h2>

        <p>⭐ Rating: {orchid.rating}</p>
        <p>🎨 Color: {orchid.color}</p>
        <p>🌍 Origin: {orchid.origin}</p>
        <p>🌸 Category: {orchid.category}</p>

        {orchid.isSpecial && (
          <span className="special">Special Orchid</span>
        )}

        <br />

        <Button
          variant="primary"
          className="mt-3"
          onClick={handleShow}
        >
          Detail
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{orchid.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={orchid.image}
            alt={orchid.name}
            className="img-fluid rounded mb-3"
          />

          <p>
            <strong>Rating:</strong> {orchid.rating}
          </p>

          <p>
            <strong>Color:</strong> {orchid.color}
          </p>

          <p>
            <strong>Origin:</strong> {orchid.origin}
          </p>

          <p>
            <strong>Category:</strong> {orchid.category}
          </p>

          <p>
            <strong>Special:</strong>{' '}
            {orchid.isSpecial ? 'Yes' : 'No'}
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default OrchidCard;