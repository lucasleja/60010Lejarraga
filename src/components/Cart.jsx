import { useContext, useState } from "react";
import { ItemsContext } from "../context/ItemsContext";
import  Container  from "react-bootstrap/Container";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Form, Button, Card } from 'react-bootstrap';

const initialValues = {
  phone: "",
  email: "",
  name: "",
};

export const Cart = () => {
  const [buyer, setBuyer] = useState(initialValues);
  const { items, removeItem, reset } = useContext(ItemsContext);
  const handleChange = (ev) => {
    setBuyer(prev => {
      return {
        ...prev,
        [ev.target.name]: ev.target.value
      }
    })
  }

  const total = items.reduce((acc,act)=> acc + act.price * act.quantity, 0);

  const validateForm = () => {
    const { name, phone, email } = buyer;
    if (!name || !phone || !email) {
      alert("Por favor, complete todos los campos");
      return false;
    }
    return true;
  };

  const sendOrder = () => {
    if (validateForm()) {
      const order = {
        buyer,
        items,
        total,
      };

      const db = getFirestore();
      const orderCollection = collection(db, "orders");

      addDoc(orderCollection, order).then (({id}) => {
        if (id) {
          alert("Su orden: " + id + " ha sido completada")
        }
      })
      .finally(() => {
        reset();
        setBuyer(initialValues);
      });
    }
  };

  if(items.length === 0)
    return "Ve al inicio"

  return (
    <Container>
    {items.map((item) => {
      return (
        <Card key={item.id} className="mb-3">
        <Card.Img className="img-fluid" variant="top" src={item.img} height={200} />
        <Card.Body>
          <Card.Title>{item.brand} {item.line} {item.model}</Card.Title>
          <Card.Text>Cantidad: {item.quantity}</Card.Text>
          <Button variant="secondary" size="sm" onClick={() => removeItem(item.id)}>
            Eliminar {item.line} {item.model}
          </Button>
        </Card.Body>
      </Card>
    );
  })}

  <br></br>

<Button variant="secondary" onClick={ reset }>Vaciar carrito</Button>

  <br />
  <div>Total $ {total}</div>
  <br />

  <Form>
  <Form.Group className="mb-3">
    <Form.Label>Nombre</Form.Label>
    <Form.Control 
      type="text" 
      value={buyer.name} 
      name="name" 
      onChange={handleChange} 
      placeholder="Ingrese su nombre"
    />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Teléfono</Form.Label>
    <Form.Control 
      type="tel" 
      value={buyer.phone} 
      name="phone" 
      onChange={handleChange} 
      placeholder="Ingrese su teléfono"
    />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>E-mail</Form.Label>
    <Form.Control 
      type="email" 
      value={buyer.email} 
      name="email" 
      onChange={handleChange} 
      placeholder="Ingrese su e-mail"
    />
  </Form.Group>
  <Button variant="primary" onClick={sendOrder}>
    Comprar
  </Button>
</Form>
    </Container>
  );
};
