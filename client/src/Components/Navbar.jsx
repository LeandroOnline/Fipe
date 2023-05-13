import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import useGlobalStore from "../store/Store";
import axiosDeleteUser from "../api/axiosDeleteUser";
import axiosLogout from "../api/axiosLogout";
import { memo } from "react";
import { shallow } from "zustand/shallow";

const Navbar = memo(() => {
  const { setLogged, login } = useGlobalStore(
    (state) => ({
      logged: state.logged,
      setLogged: state.setLogged,
      login: state.login,
    }),
    shallow
  );
  const navigate = useNavigate();

  const deleteUser = async () => {
    if (window.confirm("Seguro desea eliminar el usuario y sus entradas?")) {
      await axiosDeleteUser().then(() => {
        window.alert("Usuario eliminado");
        setLogged();
      });
    }
  };

  const logout = async () =>
    await axiosLogout().then(() => {
      navigate("/");
      setLogged();
    });

  console.log("Navbar");

  return (
    <div className="navcontainer">
      <h1 className="title">~ FIPE ~</h1>
      <div className="menu">
        {login ? (
          <>
            <div
              onClick={() => {
                logout();
              }}
              className="navbutton"
            >
              Salir
            </div>
            <div onClick={() => deleteUser()} className="navbutton">Eliminar Usuario</div>
          </>
        ) : (
          <>
            <Link to="/login" className="navbutton">Entrar</Link>
            <Link to="/signup" className="navbutton">Registrarse</Link>
          </>
        )}
      </div>
    </div>
  );
});
export default Navbar;
