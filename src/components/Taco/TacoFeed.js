import React, { useState, useEffect } from 'react';
import './Taco.css';
import { render } from '@testing-library/react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';


function TacoFeed() {
  const [tacos, setTacos] = useState([]);

  useEffect(() => {
    getAllTacos();
  }, []);

  function getAllTacos() {
    fetch('https://tacos-api-host.herokuapp.com/')
      .then(response => response.json())
      .then(data => setTacos(data));
  }


  function getImage(uri) {
    if (uri === "https://i.imgur.com/p7NGATP.jpg"){
      return 'https://www.closetcooking.com/wp-content/uploads/2014/07/Cilantro-Lime-Shrimp-Tacos-with-Roasted-Corn-Slaw-and-Roasted-Jalapeno-Crema-800-0328.jpg' 
    } else {
    return uri
    }
  }

  function shuffleTacos(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  const tacoInfo = () => 
    shuffleTacos(tacos).map(taco => (
      <div id="taco-feed-container" key={taco.id}>
        <CardGroup style={{ width: '18rem' }}>
          <Card>
            <Card.Img variant="top" src={getImage(taco.uri)} />
            <Card.Body>
              <Card.Title>{taco.title}</Card.Title>
              <Card.Text>{taco.description}</Card.Text>
              <Card.Footer id="card-footer" >
                <small className="text-muted">Tags: </small>
              </Card.Footer>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    ));

  return (
    <div>
      <Container id="taco-feed-container" >{tacoInfo()}</Container>
    </div>
  );
}
export default TacoFeed;
