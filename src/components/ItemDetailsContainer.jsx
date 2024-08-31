import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { ItemCount } from "./ItemCount";
import { ItemsContext } from "../context/ItemsContext";

import { Container, Row, Col } from 'react-bootstrap';

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
        <h1>{item.brand} {item.line} {item.model}</h1>
        <img src={item.img} alt={item.model} />
        <p>{item.description}</p>
        <p>Precio: ${item.price}</p>
        <p>Stock disponible: {item.stock}</p>
        <ItemCount stock={item.stock} onAdd={onAdd} />
    </Container>
  );
};