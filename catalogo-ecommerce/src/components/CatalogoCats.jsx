import { useEffect, useState } from 'react';
import axios from 'axios';

function CatalogoCats() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.thecatapi.com/v1/images/search?limit=10')
      .then((response) => {
        setCats(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Galería de Gatos</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, 200px)',
          gap: '20px'
        }}
      >
        {cats.map((cat) => (
          <div key={cat.id}>
            <img
              src={cat.url}
              alt="Gato"
              width="200"
              height="200"
              style={{ objectFit: 'cover' }}
            />
            <p>ID: {cat.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogoCats;