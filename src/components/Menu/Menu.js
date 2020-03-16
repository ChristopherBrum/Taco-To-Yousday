import React from 'react';
import Form from 'react-bootstrap/Form';  
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import './Menu.css';

function Menu() {

  return(
    <div className="menu-container">
      <h5>Taco Preferences</h5>
      <Form>
        <Form.Group as={Row} controlId="formHorizontalEmail"> 
          <fieldset>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
              </Form.Label>
              <Col sm={10}>
                <h6>Protein Prefernces</h6>
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
    </div>
  );
}

export default Menu;