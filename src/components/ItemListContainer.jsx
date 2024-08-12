import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

import data from '../data/productos.json'

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const {id} = useParams();
  
  useEffect(()=> {
    new Promise((resolve, reject) => setTimeout(resolve(data), 2000))
    .then((response) => {
      if(!id) {
      setItems(response);
    } else {
      const filtered = response.filter(i =>i.categoria === id);
      setItems(filtered);
    }
  })
    .finally(() => setLoading(false));
  }, [id]);

if (loading) return "wait";

    return  (
    <Container className="mt-4 mb-4">
      <Row>
      {items.map((i) => (
        <Col key={i.id} xs={12} sm={4} md={3} lg={2.4} xl={1.5}>
      <Card key={i.id} style={{ width: '18rem' }} className="mt-2">
      <Card.Img variant="top" src={i.img} />
      <Card.Body>
        <Card.Title>{i.marca}</Card.Title>
        <Card.Text>{i.detalle.substring (0, 60)+" ..."}
        </Card.Text>
        <Link to={`/item/${i.id}`}>
<Button variant="primary">Ver</Button>
</Link>
      </Card.Body>
    </Card> 
    </Col>
  ))};
  </Row>
  </Container>
    );}