import "./SearchInputs.css";
import { setEmailFilter, setNameFilter, setPhoneFilter, setUsernameFilter } from "../filtersSlice";
import { useAppDispatch } from "../hooks";

function SearchInputs() {
  const dispatch = useAppDispatch();

  return (
    <div className="input-container">
      <input type="text" placeholder="Search by name" onChange={(e) => dispatch(setNameFilter(e.target.value))}></input>
      <input
        type="text"
        placeholder="Search by username"
        onChange={(e) => dispatch(setUsernameFilter(e.target.value))}
      ></input>
      <input
        type="text"
        placeholder="Search by email"
        onChange={(e) => dispatch(setEmailFilter(e.target.value))}
      ></input>
      <input
        type="text"
        placeholder="Search by phone"
        onChange={(e) => dispatch(setPhoneFilter(e.target.value))}
      ></input>
    </div>
  );
}

export default SearchInputs;
