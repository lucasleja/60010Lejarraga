import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { ItemCount } from "./ItemCount";
import { ItemsContext } from "../context/ItemsContext";
import { Container, Card, ListGroup, Row, Col } from 'react-bootstrap';

export const ItemDetailsContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addItem } = useContext(ItemsContext)

  const {id} = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "productos", id);

    getDoc(refDoc)
      .then((snapshot) => {
      setItem({ ...snapshot.data(), id: snapshot.id });
      })
      .finally(() => setLoading(false));
  }, [id]);

  const onAdd = (quantity) => {
    addItem({...item, quantity} );
  };

  if(loading) return "wait"

  if (!item) return "Producto no encontrado";

  return (
    <Container className='mt-4'>
  <Card className='shadow-sm'>
    <Card.Img variant='top' src={item.img} alt={item.model} />
    <Card.Body>
      <Card.Title>{item.brand} {item.line} {item.model}</Card.Title>
      <Card.Text>{item.description}</Card.Text>
      <ListGroup variant='flush'>
        <ListGroup.Item>Precio: ${item.price}</ListGroup.Item>
        <ListGroup.Item>Stock disponible: {item.stock}</ListGroup.Item>
      </ListGroup>
      <ItemCount stock={item.stock} onAdd={onAdd} />
    </Card.Body>
  </Card>
</Container>
  );
};
