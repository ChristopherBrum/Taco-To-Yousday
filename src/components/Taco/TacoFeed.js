import React, { useState, useEffect } from 'react';
import './Taco.css';

function TacoFeed() {
  const [tacos, setTacos] = useState([]);

  function getAllTacos() {
    fetch('https://taco-api.herokuapp.com/tacos')
      .then(response => response.json())
      .then(data => setTacos(data));
  }

  useEffect(() => {
    getAllTacos();
  }, []);

  const tacoName = () => 
    tacos.map(taco => (
      <div>
        <li>{taco.title}</li>
      </div>
    ));

  return (
    <div>
      <p>taco feed</p>
      <ol>
        {tacoName()}
      </ol>
    </div>
  );
}
export default TacoFeed;
