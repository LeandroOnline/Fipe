import { useContext } from "react";
import Grafica from "../Components/GraficaAnualMixto";
import GraficaTwo from "../Components/GraficaAnualNeto";
import Input from "../Components/Input";
import ListInputs from "../Components/ListInputs";
import Total from "../Components/Total";
import "./Home.css";
import { context } from "../App";

const Home = () => {
  const { logged } = useContext(context);
  return (
    <div className="homecontainer">
      {logged ? (
        <>
          <div>
            <Input />
            <Total />
            <progress max="100" value="80" />
          </div>
          <ListInputs />
          <div>
            <Grafica />
            <GraficaTwo />
          </div>
        </>
      ) : (
        <>Usuario no Logueado</>
      )}
    </div>
  );
};
export default Home;
