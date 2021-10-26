import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, updateProduct } from '../../actions/productAction';

const ModalEdit = ({ products, check }) => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({
    name: '',
    description: '',
    image: '',
    prix: '',
    category: '',
    longDescription: '',
    createdAt: Date.now(),
  });
  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (products) {
      dispatch(updateProduct(products._id, input));
    } else {
      dispatch(addProduct(input, files));
    }
    setShow(false);
  };
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();
  const handleEdit = () => {
    setShow(true);
    setInput(products);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <>
        {check ? (
          <Button variant="primary" onClick={handleEdit}>
            update
          </Button>
        ) : (
          <Button variant="primary" onClick={handleShow}>
            Add product
          </Button>
        )}

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Name Procuct</Form.Label>
                <Form.Control type="text" placeholder="Enter name of product ..." name="name" value={input.name} onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Descreption</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the description ..."
                  name="description"
                  value={input.description}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Description longue</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the description ..."
                  name="longDescription"
                  value={input.longDescription}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the description ..."
                  name="category"
                  value={input.category}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Prix</Form.Label>
                <Form.Control type="text" placeholder="donner le prix" name="prix" value={input.prix} onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Url Image</Form.Label>
                <Form.Control type="text" value={input.image} placeholder="Enter url image" name="image" onChange={handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>upload files :</Form.Label>
                <Form.Control type="file" onChange={e => setFiles(e.target.files)} multiple />
              </Form.Group>
              <Button type="submit" variant="primary">
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
