import Item from "../Item";

function List(props) {
  const { values } = props;

  return (
    <ul>
      {values.map((value, key) => (
        <Item value={value} key={key} />
      ))}
    </ul>
  );
}

export default List;
