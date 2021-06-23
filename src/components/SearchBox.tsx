interface SearchBoxProps {
  searchValue: string;
  setSearchValue: any;

}

const SearchBox = (props: SearchBoxProps) => {
  return (
    <div className="col col-sm-4">
      <input
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
