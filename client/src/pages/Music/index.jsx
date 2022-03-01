import { React, useEffect, useState } from 'react';
import './style.css';
// import SearchBar from '../../components/SearchBar';
import axios from '../../services/Api';

export default function Music() {
  const [genres, setgenres] = useState([]);
  useEffect(() => {
    axios
      .get('/all-music')
      .then((res) => {
        setgenres(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='container'>
      <div className='search mx-5'>{/* <SearchBar /> */}</div>
      <section className='top'>
        <div className='popular'>
          {genres.map((genre, i) => {
            return (
              <div
                className='card_'
                key={i}
                style={{ backgroundImage: `url(${genre.picture_medium})` }}
              >
                <div className='holder hidden'>
                  <p>{genre.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
