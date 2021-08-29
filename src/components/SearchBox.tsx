interface SearchBoxProps {
  searchValue: string;
  setSearchValue: any;
}

const SearchBox = (props: SearchBoxProps) => {
  return (
    <div
      className="col col-sm-4"
      style={{
        textAlign: "center",
      }}
    >
      <input
        style={{
          color: "black",
          textAlign: "center",
          fontSize: "40px",
          marginLeft: "1%",
          marginTop: "1%",
        }}
        type="text"
        className="form-control"
        placeholder="Search here..."
        value={props.searchValue}
        onChange={(event) => props.setSearchValue(event.target.value)}
      ></input>
    </div>
  );
};

export default SearchBox;
