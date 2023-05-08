import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./ListInputs.css";
import { context } from "../contexts/Contexts";
import Categorias from "./Categorias";
import API from "../api/apiUrl";

const ListInputs = () => {
  const [inputs, setInputs] = useState([0]);
  const [modificar, setModificar] = useState(false);
  const [idElemento, setIdElemento] = useState("");

  let { reset, setReset } = useContext(context);

  const clearTrue = async () => {
    if (window.confirm("SEGURO queres eliminar todas las Entradas?"))
      if (window.confirm("Seguro?, no hay vuelta atras!"))
        await axios
          .delete(API + "/deleteall", {
            withCredentials: true,
          })
          .then(() => setReset(!reset))
          .catch((err) => {
            console.log(err.response.data);
            window.alert(
              "Error al borrar los datos del servidor, contacte al administrador"
            );
          });
  };

  const deleteItem = async (id) => {
    if (window.confirm("Eliminar Item?"))
      await axios
        .delete(API + "/delete/" + id, {
          withCredentials: true,
        })
        .then(() => setReset(!reset))
        .catch((err) => {
          console.log(err.response.data);
          window.alert(
            "Error al eliminar los datos del servidor, contacte al administrador"
          );
        });
  };

  const updateItem = async (e) => {
    e.preventDefault();
    await axios
      .put(
        API + "/update/" + idElemento,
        {
          tipo: e.target.tipo.value,
          input: e.target.input.value,
          detalle: e.target.detalle.value,
        },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        setReset(!reset);
        setModificar(false);
      })
      .catch((err) => {
        console.log(err.response.data);
        window.alert(
          "Error al actualizar los datos del servidor, contacte al administrador"
        );
      });
  };

  const get = async () =>
    await axios
      .get(API + "/getall", {
        withCredentials: true,
      })
      .then((data) => setInputs(data.data))
      .catch((err) => {
        console.log(err);
        window.alert(
          "Error al cargar los datos del servidor, contacte al administrador"
        );
      });
  get();

  return (
    <div className="listcontainer">
      Entradas:
      {inputs.map((element, key) => (
        <div key={key} className="listElement">
          <button onClick={() => deleteItem(element._id)}>Eliminar</button>
          <button
            onClick={() => {
              setModificar(true);
              setIdElemento(element._id);
            }}
          >
            Modificar
          </button>
          <p>{element.tipo}</p>
          <p>{element.input}</p>
          {element.detalle !== "" ? <p>{element.detalle}</p> : null}
        </div>
      ))}
      {modificar ? (
        <>
          <form onSubmit={(e) => updateItem(e)} className="homeform">
            <Categorias />
            <div>
              <button type="submit">Aplicar</button>
              <button onClick={() => setModificar(false)}>Cancelar</button>
            </div>
          </form>
        </>
      ) : null}
      <button onClick={() => clearTrue()}>Limpiar todo</button>
    </div>
  );
};
export default ListInputs;
