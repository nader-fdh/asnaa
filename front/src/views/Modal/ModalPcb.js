import React, { useState } from 'react';
import { Modal, Button, Form, InputGroup, SplitButton, Dropdown, FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { addProduct, updateProduct } from '../../actions/productAction';
import './ModalDevis.css';
import { devisInput } from '../../actions/devisAction';

const ModalEdit = ({ products, check }) => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({
    name: '',
    description: '',
    image: '',
  });
  const user = useSelector(state => state.auth.user);
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
            Cartes électroniques ( PCB )
          </Button>
        ) : (
          <Button variant="primary" onClick={handleShow}>
            Add product
          </Button>
        )}

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>PCB : Printed Circuit Board , Cartes électroniques</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit="{handleSubmit}">
              <div className="row">
                <div className="col-6">
                  <label>Type de la carte :</label>
                </div>
                <div className="col-6">
                  <select name="type" onChange={handleChangee}>
                    <option></option>
                    <option>Simple face</option>
                    <option>Double face</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <label>Type de la carte :</label>
                </div>
                <div className="col-6">
                  <select name="type" onChange={handleChangee}>
                    <option></option>
                    <option>Simple face</option>
                    <option>Double face</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <label>Les composants :</label>
                </div>
                <div className="col-6">
                  <select name="peinture" onChange={handleChangee}>
                    <option></option>
                    <option>Avec composants</option>
                    <option>Sans composants</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <label>La conception :</label>
                </div>
                <div className="col-6">
                  <select name="conception" onChange={handleChangee}>
                    <option></option>
                    <option>Avec conception</option>
                    <option>Sans conception</option>
                  </select>
                </div>
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
