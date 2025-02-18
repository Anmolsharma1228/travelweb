import React, { useEffect, useState } from 'react';
import { fetchHotelsData } from '../Action/Action';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import Card from '../components/cards/Card'

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [Hoteldata, setHoteldata] = useState([]);

  useEffect(() => {
    dispatch(fetchHotelsData());
  }, [dispatch]);

  useEffect(() => {
    if (data && data.data) {
      setHoteldata(data.data);
      setLoading(false);
    }
  }, [data]);

  return (
      <div className='grid md:grid-cols-3 gap-8 justify-items-center'>
      {loading ? (
        <CircularProgress/>
      ) : (
        Hoteldata.slice(0,10).map((hotel) => (
          <React.Fragment key={hotel.id}>
            <Card image={hotel.main_photo} name={hotel.name} rating={`rating:${hotel.rating}`}/>
          </React.Fragment>
        ))
      )}
      </div>
  );
};

export default Dashboard;
