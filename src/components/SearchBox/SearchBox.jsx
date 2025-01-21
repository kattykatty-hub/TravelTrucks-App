import style from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  const dispatcher = useDispatch();
  const filter = useSelector(selectNameFilter);
  const onSearch = (e) => dispatcher(changeFilter(e.target.value));

  return (
    <div className={style.searchBox}>
      <label>Find contacts by name</label>
      <input type="text" name="filter" value={filter} onChange={onSearch} />
    </div>
  );
};

export default SearchBox;
