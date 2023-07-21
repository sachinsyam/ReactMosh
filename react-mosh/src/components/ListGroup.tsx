import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = ["New York", "Mumbai", "Bangalore", "Helsinki", "Tokyo"];

  //useState is a hook, but the entire line is not referred to as a hook.
  //Instead, it's a destructuring assignment that utilizes the useState hook.
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    //return items.length === 0 ? <p>No items found</p> : null;
    //above code works fine but a better approach would be
    return items.length === 0 && <p>No items found</p>; //return <p> if conditon is true
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
