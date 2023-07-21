import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = ["New York", "Mumbai", "Bangalore", "Helsinki", "Tokyo"];

  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    //return items.length === 0 ? <p>No items found</p> : null;
    // a better alternative approach would be
    return items.length === 0 && <p>No items found</p>;
  };

  //an event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            onClick={() => {
              setSelectedIndex(index);
            }}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
