import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";

import { Container, Row, Col } from 'react-bootstrap';


export const ItemDetailsContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

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


  
  if(loading) return "wait"

  if (!item) return "Producto no encontrado";

  return (
    <Container className='mt-4'>
        <h1>{item.brand} {item.line} {item.model}</h1>
        <img src={item.img} alt={item.model} />
        <p>{item.description}</p>
        <p>Precio: ${item.price}</p>
        <p>Stock disponible: {item.stock}</p>
    </Container>
  );
}



/*         useEffect(() => {
          const db = getFirestore();
          const ref = doc(db, "productos", id);
          getDoc(ref)
            .then((snapshot) => {
              if (snapshot.exists()) {
                setItem(snapshot.data());
              } else {
                setItem(null);
              }
            })
            .finally(() => setLoading(false));
        }, [id]); */


/*         <Container className='mt-4'>
        <h1>{item.marca} {item.modelo}</h1>
        <img src={item.img} alt={item.marca} />
        <p>{item.detalle}</p>
        <p>Precio: ${item.precio}</p>
        <p>Stock disponible: {item.stock}</p>
    </Container> */


      /* useEffect(()=> {
    new Promise ((resolve) => setTimeout(() => resolve (data), 2000))
    .then(response => {
        const finded = response.find((i) => i.id === Number (id));
        setItem(finded);
    })
    .finally(() => setLoading(false));
  }, [id]) */



 /*  <Container className='mt-4'>
            <h1>{productos.brand} {productos.model}</h1>
            <img src={productos.img} alt={productos.model} />
            <p>{productos.description}</p>
            <p>Precio: ${productos.price}</p>
            <p>Stock disponible: {productos.stock}</p>
        </Container>
  ); */