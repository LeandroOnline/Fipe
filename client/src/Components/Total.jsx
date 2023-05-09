import { useEffect, useState } from "react";
import "./Total.css";
import { useGlobalStore } from "../store/store";
import axiosGetAllInputs from "../api/axiosGetAllInputs";

const Total = () => {
  const [inputs, setInputs] = useState([]);
  const [porcent, setPorcent] = useState();
  const { reset } = useGlobalStore();

  const total = () => {
    let value = 0;
    inputs.map((element) => (value += element.input));
    return value;
  };

  useEffect(() => {
    axiosGetAllInputs().then((data) => setInputs(data));
  }, [reset]);

  const Porcent = (e) => {
    const total = result();
    const porcent = e.target.value;
    const subtotal = (porcent * total) / 100;
    setPorcent(subtotal);
  };

  return (
    <div className="totalcontainer">
      <h1>Total: {total()}</h1>
      <div className="porcentcontainer">
        <p>%</p>
        <input type="number" placeholder="xxx" onChange={(e) => Porcent(e)} />
        <p>={porcent}</p>
      </div>
    </div>
  );
};
export default Total;
