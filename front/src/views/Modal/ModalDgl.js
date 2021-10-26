import React, { useState } from 'react';
import { Modal, Button, Form, InputGroup, SplitButton, Dropdown, FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { addProduct, updateProduct } from '../../actions/productAction';
import './ModalDevis.css';
import { devisInput } from '../../actions/devisAction';

const ModalEdit = ({ products, check }) => {
  const [show, setShow] = useState(false);
  const user = useSelector(state => state.auth.user);
  const [input, setInput] = useState({
    name: '',
    description: '',
    image: '',
  });
  const [detailDevis, setDetailDevis] = useState({
    name: `${user.username} ${user.lastname}`,
    type: '',
    materiau: '',
    epaisseur: '',
    quantité: '',
    peinture: '',
    conception: '',
  });
  const [files, setFiles] = useState([]);
  const handleChange = e => {
    setDetailDevis({ ...detailDevis, [e.target.name]: e.target.type });
    console.log('first', detailDevis);
  };
  const handleChangee = e => {
    setDetailDevis({ ...detailDevis, [e.target.name]: e.target.value });
    console.log('second', detailDevis);
  };
  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     if (products) {
  //       dispatch(updateProduct(products._id, input));
  //     } else {
  //       dispatch(addProduct(input));
  //     }
  //     setShow(false);
  //   };
  const dispatch = useDispatch();
  const handleEdit = () => {
    setShow(true);
    setInput(products);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log('handleSubmit', files, detailDevis);
    dispatch(devisInput(detailDevis, files));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <>
        {check ? (
          <Button variant="primary" onClick={handleEdit}>
            Découpe et gravure laser
          </Button>
        ) : (
          <Button variant="primary" onClick={handleShow}>
            Add product
          </Button>
        )}

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Découpe et gravure laser</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit="{handleSubmit}">
              <InputGroup className="mb-3">
                <SplitButton
                  className="dropDownButton"
                  variant="outline-secondary"
                  title="Choix du type :"
                  id="segmented-button-dropdown-1"
                >
                  <Dropdown.Item className="dropDownButton" name="type" type="Découpe" onClick={handleChange}>
                    Découpe
                  </Dropdown.Item>

                  <Dropdown.Divider />

                  <Dropdown.Item className="dropDownButton" name="type" type="Gravure" onClick={handleChange}>
                    Gravure
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item name="type" type="Découpe et gravure" onClick={handleChange}>
                    Découpe et gravure
                  </Dropdown.Item>
                </SplitButton>
              </InputGroup>
              {/* <InputGroup className="mb-3">
                <SplitButton
                  className="dropDownButton"
                  variant="outline-secondary"
                  title="Choix de matériau :"
                  id="segmented-button-dropdown-1"
                >
                  <Dropdown.Item className="dropDownButton" name="materiau" type="Bois" onClick={handleChange}>
                    Bois
                  </Dropdown.Item>
                  <Dropdown.Divider />

                  <Dropdown.Item className="dropDownButton" name="materiau" type="Alucobond" onClick={handleChange}>
                    Alucobond
                  </Dropdown.Item>
                </SplitButton>
              
              </InputGroup> */}
              <InputGroup className="mb-3">
                <SplitButton
                  className="dropDownButton"
                  variant="outline-secondary"
                  title="Choix du matériau :"
                  id="segmented-button-dropdown-1"
                >
                  <Dropdown.Item className="dropDownButton" name="materiau" type="MDF 3mm" onClick={handleChange}>
                    MDF 3mm
                  </Dropdown.Item>

                  <Dropdown.Divider />
                  <Dropdown.Item className="dropDownButton" name="materiau" type=" MDF stratifié 3mm" onClick={handleChange}>
                    MDF stratifié 3mm
                  </Dropdown.Item>

                  <Dropdown.Divider />
                  <Dropdown.Item className="dropDownButton" name="materiau" type="MDF 5mm" onClick={handleChange}>
                    MDF 5mm
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className="dropDownButton" name="materiau" type="MDF stratifié 5mm" onClick={handleChange}>
                    MDF stratifié 5mm
                  </Dropdown.Item>

                  <Dropdown.Divider />
                  <Dropdown.Item className="dropDownButton" name="materiau" type="Plexiglas transparent 3mm" onClick={handleChange}>
                    Plexiglas transparent 3mm
                  </Dropdown.Item>

                  <Dropdown.Divider />
                  <Dropdown.Item className="dropDownButton" name="materiau" type="Plexiglas blanc 3mm" onClick={handleChange}>
                    Plexiglas blanc 3mm
                  </Dropdown.Item>

                  <Dropdown.Divider />
                  <Dropdown.Item className="dropDownButton" name="materiau" type="Plexiglas noir 3mm" onClick={handleChange}>
                    Plexiglas noir 3mm
                  </Dropdown.Item>
                </SplitButton>
              </InputGroup>
              <div className="mb-3">
                <SplitButton
                  className="dropDownButton"
                  variant="outline-secondary"
                  title="La conception :"
                  id="segmented-button-dropdown-1"
                >
                  <Dropdown.Item className="dropDownButton" name="conception" type="Avec conception" onClick={handleChange}>
                    Avec conception
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className="dropDownButton" name="conception" type="Sans conception" onClick={handleChange}>
                    Sans conception
                  </Dropdown.Item>
                </SplitButton>
              </div>

              <Form.Group>
                <Form.Label>Quantité :</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Nombre en chiffre ..."
                  name="quantité"
                  value={detailDevis.quantité}
                  onChange={handleChangee}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>upload files :</Form.Label>
                <Form.Control type="file" onChange={e => setFiles(e.target.files)} multiple />
              </Form.Group>
              <Form.Group>
                <Form.Label>user Name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre en chiffre ..."
                  name="name"
                  value={detailDevis.name}
                  onChange={handleChangee}
                />
                {/* {user.username} */}
              </Form.Group>

              <Button type="submit" onClick={handleSubmit} variant="primary">
                Save
              </Button>
            </Form>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Save</Button>
          </Modal.Footer> */}
        </Modal>
      </>
    </div>
  );
};

export default ModalEdit;
