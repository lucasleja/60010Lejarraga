import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    if (count < stock) setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  const handleAdd = () => {
    onAdd(count);
    setCount(1);
  };

  return (
    <>
      <ButtonGroup className="mb-2">
        <Button variant="outline-secondary" onClick={handleDecrease}>
          -
        </Button>
        <Button variant="outline-secondary">{count}</Button>
        <Button variant="outline-secondary" onClick={handleIncrease}>
          +
        </Button>
      </ButtonGroup>
      <br />
      <Button variant="primary" onClick={handleAdd}>
        Comprar
      </Button>
    </>
  );
};