import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PARKING_LOTS } from '../graphql/queries';
import ParkingLotCard from './ParkingLotCard';

interface ParkingLot {
  id: string;
  name: string;
  address: string;
  image: string;
}

interface TinderViewProps {
  onEndSession: (goodLots: ParkingLot[], badLots: ParkingLot[]) => void;
}

const TinderView: React.FC<TinderViewProps> = ({ onEndSession }) => {
  const [offset, setOffset] = useState(0);
  const [parkingLots, setParkingLots] = useState<ParkingLot[]>([]);
  const [goodLots, setGoodLots] = useState<ParkingLot[]>([]);
  const [badLots, setBadLots] = useState<ParkingLot[]>([]);
  const { data, fetchMore } = useQuery(GET_PARKING_LOTS, {
    variables: { limit: 5, offset },
  });

  useEffect(() => {
    if (data) {
      setParkingLots(data.getAllParkingLots);
    }
  }, [data]);

  const handleRate = (rating: 'good' | 'bad', lot: ParkingLot) => {
    if (rating === 'good') {
      setGoodLots([...goodLots, lot]);
    } else {
      setBadLots([...badLots, lot]);
    }
    fetchMore({ variables: { offset: offset + 1 } });
    setOffset(offset + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {parkingLots.length > 0 ? (
        <ParkingLotCard
          name={parkingLots[0].name}
          address={parkingLots[0].address}
          image={parkingLots[0].image}
          onRate={(rating) => handleRate(rating, parkingLots[0])}
        />
      ) : (
        <p>No more parking lots available.</p>
      )}
      <button
        onClick={() => onEndSession(goodLots, badLots)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Stop Tinder Session
      </button>
    </div>
  );
};

export default TinderView;
