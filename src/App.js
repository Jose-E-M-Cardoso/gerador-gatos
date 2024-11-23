import React, { useState } from 'react';

const App = () => {
  const [catPhotos, setCatPhotos] = useState([]);

  const fetchCatPhotos = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=5');
      const data = await response.json();
      setCatPhotos(data);
    } catch (error) {
      console.error('Erro ao buscar fotos:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Gerador de Fotos de Gatos</h1>
      <button onClick={fetchCatPhotos} style={{ padding: '10px', fontSize: '16px' }}>
        Obter Fotos de Gatos
      </button>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {catPhotos.map((photo, index) => (
          <img
            key={index}
            src={photo.url}
            alt="Gato"
            style={{ width: '200px', height: '200px', margin: '10px', borderRadius: '10px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;