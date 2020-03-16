import React from 'react';
import Form from 'react-bootstrap/Form';  
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import Card from 'react-bootstrap/Card';  
import Accordion from 'react-bootstrap/Accordion';  
import Button from 'react-bootstrap/Button';  
import './Menu.css';

function Menu() {

  return(
    <div className="menu-container">
      <h5 className="menu-title">Taco Menu</h5>
      <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">Protein Preferences</Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Form>
              <Form.Group as={Row} controlId="formHorizontalEmail"> 
                <fieldset>
                  <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2}>
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="Pollo"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
                      <Form.Check
                        type="radio"
                        label="Carne Asada"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                      />
                      <Form.Check
                        type="radio"
                        label="Mariscos"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                      />
                      <Form.Check
                        type="radio"
                        label="Vegetariana"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                      />
                    </Col>
                  </Form.Group>
                </fieldset>
              </Form.Group>
            </Form>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">Appetite Level</Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail"> 
                  <fieldset>
                    <Form.Group as={Row}>
                      <Form.Label as="legend" column sm={2}>
                      </Form.Label>
                      <Col sm={10}>
                        <small className="size-description">Pequeño: 2 Tacos/$3.99</small><br></br>
                        <small className="size-description">Medio: 3 Tacos/$4.99</small><br></br>
                        <small className="size-description">Grande: 4 Tacos/$5.99</small><br></br>
                        <small className="size-description">Gordi: 5 Tacos/$6.99</small><br></br><br></br>
                        <Form.Check
                          type="radio"
                          label="Pequeño"
                          name="pequeno"
                          id="formHorizontalRadios1"
                        />
                        <Form.Check
                          type="radio"
                          label="Medio"
                          name="medio"
                          id="formHorizontalRadios2"
                        />
                        <Form.Check
                          type="radio"
                          label="Grande"
                          name="grande"
                          id="formHorizontalRadios3"
                        />
                        <Form.Check
                          type="radio"
                          label="Gordi"
                          name="gordi"
                          id="formHorizontalRadios2"
                        />
                      </Col>
                    </Form.Group>
                  </fieldset>
                </Form.Group>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card> 
        <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">How Often?</Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail"> 
                  <fieldset>
                    <Form.Group as={Row}>
                      <Form.Label as="legend" column sm={2}>
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Check
                          type="radio"
                          label="Every Tuesday!"
                          name="everyTuesday"
                          id="formHorizontalRadios1"
                        />
                        <Form.Check
                          type="radio"
                          label="Every other Tuesday"
                          name="everyOther"
                          id="formHorizontalRadios2"
                        />
                        <Form.Check
                          type="radio"
                          label="Once a month"
                          name="onceMonth"
                          id="formHorizontalRadios3"
                        />
                        <Form.Check
                          type="radio"
                          label="Just this time"
                          name="once"
                          id="formHorizontalRadios2"
                        />
                      </Col>
                    </Form.Group>
                  </fieldset>
                </Form.Group>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card> 
      </Accordion>
    </div>
  );
}

export default Menu;