import "./Popup.css";
import warning from "../assets/advertencia.png";
import ok from "../assets/correcto.png";
import error from "../assets/error.png";
import question from "../assets/pregunta.png";

const Popup = ({
  text,
  type,
  popupActivate,
  setPopupActivate,
  onConfirm,
  onCancel,
  toConfirm,
  timer,
}) => {
  if (timer && popupActivate) {
    setTimeout(() => {
      setPopupActivate();
    }, timer);
  }

  let img =
    type === "error"
      ? error
      : type === "ok"
      ? ok
      : type === "warning"
      ? warning
      : question;

  return (
    <div className={popupActivate ? "pop" : "pup"}>
      <img className="popimg" src={img} alt="img" />
      <p>{text}</p>
      {toConfirm ? (
        <div className="popupButtonsContainer">
          <button className="popupButton" onClick={() => onCancel()}>
            Cancelar
          </button>
          <button className="popupButton" onClick={() => onConfirm()}>
            Aceptar
          </button>
        </div>
      ) : null}
    </div>
  );
};
export default Popup;