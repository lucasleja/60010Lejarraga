import { useContext, useState } from "react";
import { ItemsContext } from "../context/ItemsContext";
import  Container  from "react-bootstrap/Container";

const initialValues = {
  phone: "",
  email: "",
  name: "",
};

export const Cart = () => {
  const [buyer, setbuyer] = useState(initialValues);
  const { items, removeItem, reset } = useContext(ItemsContext);
  const handleChange = (ev) => {
  setBuyer(prev => {
    return {
      ...prev,
      [ev.target.name]: ev.target.value
    }
  })
  }



const total = item.reduce((acc,act)=> acc + act.price * act.quantity, 0)

  return (
    <Container>
      <button onClick={ reset }>Vaciar</button>
    {items.map((item) => {
      return (
      <div key={item.id}>
        <h1>{item.brand} {item.line} {item.model}</h1>
        <img src={item.img} height={200} />
        <p> Cantidad: {item.quantity}</p>
        <p onClick={() => removeItem(item.id)}>X</p>
      </div>
    );
  })}

  <br />
  <div>Total $ {total}</div>
  <br />

<form>
<div>
<label>Nombre</label>
<input value={buyer.name} name="name" onChange={handleChange} />
</div>
<div>
<label>Teléfono</label>
<input value={buyer.phone} name="phone" onChange={handleChange} />
</div>
<div>
<label>Email</label>
<input value={buyer.email} name="email" onChange={handleChange} />
</div>
{/* <button type="button" onClick={sendOrder}>
Comprar
</button> */}
</form>
  </Container>);
};