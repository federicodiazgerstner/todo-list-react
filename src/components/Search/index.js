function Search(props) {
  function handleChange(e) {
    const { value } = e.target;

    props.handleCallback(value);
  }
  return <input onChange={handleChange}></input>;
}

export default Search;
