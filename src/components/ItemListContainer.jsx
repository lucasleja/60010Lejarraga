import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import { getFirestore, getDocs, where, query, collection } from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const {id} = useParams();
  
  useEffect(()=> {
    const db = getFirestore();

    const ref = !id 
      ? collection(db, "productos")
      : query(collection (db, "productos"), where("category", "==", id));

    getDocs(ref)
      .then((snapshot) => {
        setItems(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data( ) };
          })
        );
      })
      .finally(() => setLoading(false));
  }, [id]);

if (loading) return "Cargando...";

    return  (
    <Container className="mt-4 mb-4">
      <Row>
      {items.map((i) => (
        <Col key={i.id} xs={12} sm={4} md={3} lg={2.4} xl={1.5}>
      <Card key={i.id} style={{ width: '18rem' }} className="mt-2">
      <Card.Img variant="top" src={i.img} />
      <Card.Body>
        <Card.Title>{i.brand} {i.model}</Card.Title>
        <Card.Text>{i.description.substring (0, 60)+" ..."}
        </Card.Text>
        <Link to={`/item/${i.id}`}>
<Button variant="primary">Ver</Button>
</Link>
      </Card.Body>
    </Card> 
    </Col>
  ))}
  </Row>
  </Container>
    );}

