import { React, useEffect, useState } from 'react';
import './style.css';
import axios from '../../services/Api';

export default function Music() {
  const [genres, setgenres] = useState([]);
  useEffect(() => {
    axios
      .get('/genre')
      .then((res) => {
        setgenres(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='container mt-4'>
      <div className='result'>
        {genres.map((genre, i) => {
          return (
            <div className='genre' key={i}>
              <img src={genre.picture_big} alt='album art' />
              <div>
                <h5>{genre.name}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
