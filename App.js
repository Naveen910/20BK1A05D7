import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/train/register';
const TrainSchedule = () => {
  const [trains, setTrains] = useState([]);
  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/trains`);
        setTrains(response.data);
      } catch (error) {
        console.error('Error fetching trains:', error);
      }
    };
    fetchTrains();
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      {trains.map((train) => (
        <div key={train.id}>
          <h3>{train.name}</h3>
          <p>Price: {train.price}</p>
          <p>Seat Availability: {train.seatAvailability}</p>
          {/* Add more train details as needed */}
        </div>
      ))}
    </div>
  );
};
export default TrainSchedule;