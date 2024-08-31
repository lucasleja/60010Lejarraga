import { createContext, useState } from "react";

export const ItemsContext = createContext();

export const Provider = ({ children }) => {
  const [items, setItems] = useState([]);

const reset =  () => setItems([]);

const addItem = (item) => {
  const alreadyExists = items.some((i) => i.id === item.id);
  
  if (alreadyExists) {
    const newItems = items.map((i) => {
      if (i.id === item.id) {
        return { ...i, quantity: i.quantity + item.quantity };
      } else {
        return i;
        }
      });
      setItems(newItems);
      } else {
      setItems((prev) => [...prev, item]);
  }
};


const removeItem = (id) => {
  const filter = items.filter((i) => i.id !== id);
  setItems(filter);
};


console.log(items)

  return (
    <ItemsContext.Provider value={{ addItem, items, removeItem, reset }}>
      { children }
    </ItemsContext.Provider>
  );
};



/* const addItem = (item) => {
  alert("ctx");
}; */

/* const addItem = (item) => {
  const alreadyExists = items.some((i) => i.id === item.id);
  
  if (alreadyExists) {
    const newItems = items.map((i) => {
      if (i.id === item.id) {
  return { ...i, quantity: i.quantity + item.quantity };
  } else {
  return i;
  }
  });
  setItems(newItems);
  } else {
  setItems((prev) => [...prev, item]);
  }
};
 */


/* addItem */




/* import { createContext, useState } from "react";

export const ItemsContext = createContext();

export const Provider = ({ children }) => {
  const [items, setItems] = useState([]);

const reset =  () => setItems([]);

const addItem = (item) => {
  alert("ctx")
}

  return (
    <ItemsContext.Provider value={{ addItem, items, reset }}>
      { children }
    </ItemsContext.Provider>
  );
}; */


















/* import { createContext, useState } from "react";

export const ItemsContext = createContext();

export const Provider = ({ children }) => {
  const [items, setItems] = useState([]);

const reset =  () => setItems([]);

const addItem = (item) => {
  const alreadyExists = items.some((i) => i.id === item.id);
  
  if (alreadyExists) {
    const newItems = items.map((i) => {
      if (i.id === item.id) {
        return { ...i, quantity: i.quantity + item.quantity };
      } else {
        return i;
        }
      });
      setItems(newItems);
      } else {
      setItems((prev) => [...prev, item]);
  }
};

  return (
    <ItemsContext.Provider value={{ addItem, items, reset }}>
      { children }
    </ItemsContext.Provider>
  );
}; */