import React, { useState, useEffect } from 'react';

const App = () => {
  const [joke, setJoke] = useState('');
  const [catImage, setCatImage] = useState('');

  useEffect(() => {
    // Obtener la broma de Chuck Norris
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => setJoke(data.value))
      .catch(error => console.error(error));

    // Obtener imagen de gato
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setCatImage(data[0].url);
        }
      })
      .catch(error => console.error(error));
  }, []);

  // Función para determinar si la broma es larga
  const isJokeLong = () => {
    return joke.length > 120; // Consideramos larga si tiene más de 120 caracteres
  };

  return (
    <div>
      <h1>Chuck Norris Joke</h1>
      <p>{joke}</p>
      {isJokeLong() && <p>¡Esta es una broma larga!</p>} {/* Renderizado condicional */}
      {catImage && <img src={catImage} alt="Cat" />}
    </div>
  );
};

export default App;
