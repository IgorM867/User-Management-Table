import "./Spinner.css";
import spinnerSvg from "../assets/spinner.svg";

function Spinner() {
  return (
    <tr className="spinner">
      <td colSpan={4}>
        <img src={spinnerSvg} alt="loading spinner" />
      </td>
    </tr>
  );
}

export default Spinner;
