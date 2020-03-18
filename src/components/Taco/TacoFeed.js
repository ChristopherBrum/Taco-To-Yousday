import React, { useState, useEffect } from 'react';
import './Taco.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function TacoFeed(props) {
  const [ tacos, setTacos ] = useState([]);
 
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

  const listTacos = () => 
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
    )
  );

  function filterTacos() {
    
  }

  return (
    <div>
      <div className="filter-button-container">
        <h4 className="taco-filter-title">These tacos are available in your area:</h4>
        <div id="filter-button-wrap">
          <ButtonGroup>
            <DropdownButton as={ButtonGroup} title="Proteins" id="bg-nested-dropdown">
              <Dropdown.Item onClick={ () => filterTacos() } eventKey="1">Pollo</Dropdown.Item>
              <Dropdown.Item onClick={ () => filterTacos() } eventKey="2">Carne Asada</Dropdown.Item>
              <Dropdown.Item onClick={ () => filterTacos() } eventKey="3">Mariscos</Dropdown.Item>
              <Dropdown.Item onClick={ () => filterTacos() } eventKey="4">Vegetariana</Dropdown.Item>
              <Dropdown.Item onClick={ () => filterTacos() } eventKey="5">All</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
          <ButtonGroup>
            <DropdownButton as={ButtonGroup} title="Appetite" id="bg-nested-dropdown">
              <Dropdown.Item onClick={ () => filterTacos() } eventKey="1">Pequeño: 2 Tacos for $3.99</Dropdown.Item>
              <Dropdown.Item onClick={ () => filterTacos() } eventKey="2">Medio: 3 Tacos for $4.99</Dropdown.Item>
              <Dropdown.Item onClick={ () => filterTacos() } eventKey="3">Grande: 4 Tacos for $5.99</Dropdown.Item>
              <Dropdown.Item onClick={ () => filterTacos() } eventKey="4">Gordi: 5 Tacos for $6.99</Dropdown.Item>
              <Dropdown.Item onClick={ () => filterTacos() } eventKey="5">Familia: 10 Tacos for $12.99</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>        
          <ButtonGroup>
            <DropdownButton as={ButtonGroup} title="Frequency" id="bg-nested-dropdown">
              <Dropdown.Item onClick={ () => filterTacos() } eventKey="1">Every Tuesday!</Dropdown.Item>
              <Dropdown.Item onClick={ () => filterTacos() } eventKey="2">Everyother Tuesday</Dropdown.Item>
              <Dropdown.Item onClick={ () => filterTacos() } eventKey="3">Once a Month</Dropdown.Item>
              <Dropdown.Item onClick={ () => filterTacos() } eventKey="4">Just next Tuesday</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </div>
      </div>
      <Container id="taco-feed-container" >{listTacos()}</Container>
    </div>
  );
}
export default TacoFeed;
