import React, { useState } from 'react';
import { Modal, Button, Form, InputGroup, SplitButton, Dropdown, FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { devisInput } from '../../actions/devisAction';
import './ModalDevis.css';

const ModalEdit = ({ products, check }) => {
  const user = useSelector(state => state.auth.user);

  console.log(user.username);
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({
    name: '',
    description: '',
    image: '',
  });
  const [detailDevis, setDetailDevis] = useState({
    name: `${user.username} ${user.lastname}`,
    type: '',
    materiau: '',
    epaisseur: 'user.username',
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
    e.preventDefault();
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
            Usinage CNC
          </Button>
        ) : (
          <Button variant="primary" onClick={handleShow}>
            ...
          </Button>
        )}

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Usinage CNC</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit="{handleSubmit}">
              <div className="row">
                <div className="col-6">
                  <label>Choix du type :</label>
                </div>
                <div className="col-6">
                  <select name="type" onChange={handleChangee}>
                    <option></option>
                    <option>Usinage</option>
                    <option>Gravure</option>
                    <option>Usinage et gravure</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <label>Peinture :</label>
                </div>
                <div className="col-6">
                  <select name="peinture" onChange={handleChangee}>
                    <option></option>
                    <option> Avec peinture</option>
                    <option> Sans peinture</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <label>Choix de matériau :</label>
                </div>
                <div className="col-6">
                  <select name="materiau" onChange={handleChangee}>
                    <option></option>
                    <option> Bois</option>
                    <option> Alucobond</option>
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
                    <option> Avec conception</option>
                    <option> Sans conception</option>
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
              <h3>{detailDevis.type}</h3>
              <h3>{detailDevis.peinture}</h3>
              <h3>{detailDevis.materiau}</h3>
              <h3>{detailDevis.conception}</h3>
              <h3>{detailDevis.quantité}</h3>

              <Button type="submit" onClick={handleSubmit} variant="primary">
                Save
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default ModalEdit;
