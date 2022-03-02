import { React, useEffect, useState } from 'react';
import './style.css';
import axios from '../../services/Api';

export default function Albums() {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    axios
      .get('/album')
      .then((res) => {
        setAlbums(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='container mt-4'>
      <div className='result'>
        {albums.map((album, i) => {
          return (
            <div className='album' key={i}>
              <img src={album.album.cover_xl} alt='album cover' />
              <div>
                <h5>{album.album.title}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
