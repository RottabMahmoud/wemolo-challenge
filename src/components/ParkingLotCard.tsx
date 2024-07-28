import React from 'react';

interface ParkingLotCardProps {
  name: string;
  address: string;
  image: string;
  onRate: (rating: 'good' | 'bad') => void;
}

const ParkingLotCard: React.FC<ParkingLotCardProps> = ({ name, address, image, onRate }) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        onClick={() => onRate('bad')}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Bad
      </button>
      <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex flex-col items-center justify-between bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={image} alt={name} className="w-full h-3/4 object-cover" />
        <div className="p-4 w-full text-center">
          <h2 className="text-lg font-bold">{name}</h2>
          <p>{address}</p>
        </div>
      </div>
      <button
        onClick={() => onRate('good')}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Good
      </button>
    </div>
  );
};

export default ParkingLotCard;
