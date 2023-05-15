import { memo, useState } from "react";
import "./Total.css";
import useGlobalStore from "../store/Store";
import PorcentCircle from "./PorcentCircle";
import totalNeto from "../helpers/totalNeto.js";
import ahorro from "../assets/ahorro.png";

const Total = memo(() => {
  const [porcent, setPorcent] = useState(60);
  const inputs = useGlobalStore((state) => state.inputs);

  const Porcent = (porcent) => {
    if (porcent > 100) {
      setPorcent(porcent / 10);
      console.log("control: " + porcent);
    } else {
      const total = totalNeto(inputs);
      const result = (porcent * total) / 100;
      return result;
    }
  };

  console.log("Total");

  return (
    <div className="totalcontainer">
      <div className="total">
        <img className="totalimg" src={ahorro} alt="" />
        <h1>Total: ${inputs ? totalNeto(inputs) : null}</h1>
      </div>

      <div className="porcentcontainer">
        %
        <input
          type="number"
          placeholder="..."
          value={porcent}
          onChange={(e) => setPorcent(e.target.value)}
        />
        <PorcentCircle porcent={porcent} result={Porcent(porcent)} />
        <p>={Porcent(porcent)}</p>
      </div>
    </div>
  );
});
export default Total;
