import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from 'react-bootstrap';

import data from '../data/productos.json'

export const ItemDetailsContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const {id} = useParams();

  useEffect(()=> {
    new Promise ((resolve) => setTimeout(() => resolve (data), 2000))
    .then(response => {
        const finded = response.find((i) => i.id === Number (id));
        setItem(finded);
    })
    .finally(() => setLoading(false));
  }, [id])
  
  if(loading) return "wait"

  if (!item) return "Producto no encontrado";

  return (
    <Container className='mt-4'>
            <h1>{item.marca} {item.modelo}</h1>
            <img src={item.img} alt={item.marca} />
            <p>{item.detalle}</p>
            <p>Precio: ${item.precio}</p>
            <p>Stock disponible: {item.stock}</p>
        </Container>
  );
}