import React from 'react';
import ListOfOrchids from './ListOfOrchids';
import OrchidCard from './OrchidCard';

function Orchids() {
  return (
    <div className="orchids-container">
      <h1>Orchid Collection</h1>

      <div className="orchids-grid">
        {ListOfOrchids.map((orchid) => (
          <OrchidCard
            key={orchid.id}
            orchid={orchid}
          />
        ))}
      </div>
    </div>
  );
}

export default Orchids;