import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ParkingLotCard from '../components/ParkingLotCard';

describe('ParkingLotCard', () => {
  const props = {
    name: 'Sample Lot',
    address: '123 Test St',
    image: 'sample.jpg',
    onRate: jest.fn(),
  };

  test('renders ParkingLotCard with props', () => {
    render(<ParkingLotCard {...props} />);
    expect(screen.getByText('Sample Lot')).toBeInTheDocument();
    expect(screen.getByText('123 Test St')).toBeInTheDocument();
  });

  test('renders image with correct alt text', () => {
    render(<ParkingLotCard {...props} />);
    const imgElement = screen.getByAltText('Sample Lot');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', 'sample.jpg');
  });

  test('calls onRate with "good" when Good button is clicked', () => {
    render(<ParkingLotCard {...props} />);
    const goodButton = screen.getByText('Good');
    fireEvent.click(goodButton);
    expect(props.onRate).toHaveBeenCalledWith('good');
  });

  test('calls onRate with "bad" when Bad button is clicked', () => {
    render(<ParkingLotCard {...props} />);
    const badButton = screen.getByText('Bad');
    fireEvent.click(badButton);
    expect(props.onRate).toHaveBeenCalledWith('bad');
  });
});
