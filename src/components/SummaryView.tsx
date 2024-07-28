import React, { useState } from 'react';

interface ParkingLot {
  id: string;
  name: string;
  address: string;
  image: string;
}

interface SummaryViewProps {
  goodLots: ParkingLot[];
  badLots: ParkingLot[];
}

const SummaryView: React.FC<SummaryViewProps> = ({ goodLots, badLots }) => {
  const [filter, setFilter] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');

  const filterAndSortLots = (lots: ParkingLot[]) => {
    return lots
      .filter((lot) => lot.name.toLowerCase().includes(filter.toLowerCase()) || lot.address.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  };

  const filteredGoodLots = filterAndSortLots(goodLots);
  const filteredBadLots = filterAndSortLots(badLots);

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by name or address"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-2 py-1 border rounded"
        />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="ml-2 px-2 py-1 border rounded">
          <option value="name">Name</option>
          <option value="address">Address</option>
        </select>
      </div>
      <h2>Good Lots</h2>
      <ul>
        {filteredGoodLots.map((lot) => (
          <li key={lot.id}>{lot.name} - {lot.address}</li>
        ))}
      </ul>
      <h2>Bad Lots</h2>
      <ul>
        {filteredBadLots.map((lot) => (
          <li key={lot.id}>{lot.name} - {lot.address}</li>
        ))}
      </ul>
    </div>
  );
};

export default SummaryView;
