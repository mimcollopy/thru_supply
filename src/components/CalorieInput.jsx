import { useContext } from "react";
import { PackContext } from "../packContext";
import './CalorieInput.css'
export default function CalorieInput() {

const {
    days,
    cals,
    changeDays,
    changeCals
  } = useContext(PackContext);

  return (
    <div>
      <h3>How many days?</h3>
      <label>
        <input
        className="days-input"
        value={days}
        type="number"
        onChange={(e) => changeDays(e.target.value)}
        />
      </label>

      <h3> How many calories p/d? </h3>
      <label>
        <input
        className="calorie-input"
        value={cals}
        type="number"
        onChange={(e) => changeCals(e.target.value)}
        />
      </label>
    </div>
  );
}