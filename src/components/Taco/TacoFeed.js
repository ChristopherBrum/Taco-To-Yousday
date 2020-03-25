import React, { useState, useEffect } from 'react';
import './Taco.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function TacoFeed(props) {
  const [ tacos, setTacos ] = useState([]);
  const [ origTacos, setOrigTacos ] = useState([])
 
  useEffect(() => {
    getAllTacos();
  }, []);

  function getAllTacos() {
    fetch('https://tacos-api-host.herokuapp.com/')
      .then(response => response.json())
      .then(data => {setTacos(data); setOrigTacos(data)});
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
        <CardGroup id="cards" style={{ width: '18rem' }}>
          <Card>
            <Card.Img variant="top" src={getImage(taco.uri)} />
            <Card.Body>
              <div>
                <Card.Title>{taco.title}</Card.Title>
                <Card.Text>{taco.description}</Card.Text>
              </div>
              <div>
                <Button onClick={() => props.addTaco(taco)}>I want this taco!</Button>
              </div>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    )
  )

  function filterTacos(arr) {
    setTacos(origTacos)
    if (arr.length === 0) {
      setTacos(origTacos)
    } else {
      var filterTacos = origTacos.filter(taco => arr.includes(taco.id))
      setTacos(filterTacos)
    }
  }

  // function filterAppetite() {

  // }

  // function filterFrequency() {

  // }

  return (
    <div className="main-taco-cont">
      <div className="filter-button-container">
        <h5 className="taco-filter-title">Choose some tacos from the choices below!</h5>
        <div id="filter-button-wrap">
          <ButtonGroup>
            {/* <Button className="surprise-taco-button">Surpise Tacos!</Button> */}
            <DropdownButton as={ButtonGroup} title="Proteins" id="bg-nested-dropdown">
              <Dropdown.Item onClick={ () => filterTacos([2]) } eventKey="1">Pollo</Dropdown.Item>
              <Dropdown.Item onClick={ () => filterTacos([7]) } eventKey="2">Carne Asada</Dropdown.Item>
              <Dropdown.Item onClick={ () => filterTacos([3,4,5]) } eventKey="3">Mariscos</Dropdown.Item>
              <Dropdown.Item onClick={ () => filterTacos([1,6]) } eventKey="4">Vegetariana</Dropdown.Item>
              <Dropdown.Item onClick={ () => filterTacos([]) } eventKey="5">All</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </div>
      </div>
      <Container id="taco-feed-container" >{listTacos()}</Container>
    </div>
  );
}
export default TacoFeed;
