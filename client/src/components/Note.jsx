import "./Note.css";
import del from "../assets/eliminar.png";
import modify from "../assets/modificar.png";
import axiosDeleteNote from "../api/axiosDeleteNote";
import useGlobalStore from "../store/Store";
import { useState } from "react";
import axiosUpdateNote from "../api/axiosUpdateNote";
import ok from "../assets/correcto.png";
import cancel from "../assets/cancelar.png";
import axiosCheckNote from "../api/axiosCheckNote";
import done from "../assets/hecho.png";

const Note = ({ title, text, id, check }) => {
  const setNoteDeletedOrUpdate = useGlobalStore(
    (state) => state.setNoteDeletedOrUpdate
  );
  const [updateMenu, setUpdateMenu] = useState(false);
  const [titleUpdate, setTitleUpdate] = useState(title);
  const [textUpdate, setTextUpdate] = useState(text);

  const deleteNote = async (id) => {
    await axiosDeleteNote(id).then((e) => {
      setNoteDeletedOrUpdate();
    });
  };

  const updateNote = async (id, title, text) => {
    await axiosUpdateNote(id, title, text).then((e) => {
      setUpdateMenu(false);
      setNoteDeletedOrUpdate();
    });
  };

  const checkNote = async (id) => {
    await axiosCheckNote(id).then((e) => {
      setNoteDeletedOrUpdate();
    });
  };

  return (
    <div className="noteContainer">
      {updateMenu ? (
        <div className="noteInputs">
          <input
            type="text"
            placeholder="Title:"
            value={titleUpdate}
            onChange={(e) => setTitleUpdate(e.target.value)}
            className="inputTitleUpdate"
          />
          <input
            type="text"
            placeholder="Text:"
            value={textUpdate}
            onChange={(e) => setTextUpdate(e.target.value)}
            className="inputTextUpdate"
          />
          <div className="buttonsNoteUpdate">
            <img
              className="del"
              onClick={() => {
                setUpdateMenu(false);
              }}
              src={cancel}
              alt="x"
            />
            <img
              className="okUpdate"
              src={ok}
              onClick={() => updateNote(id, titleUpdate, textUpdate)}
              alt="ok"
            />
          </div>
        </div>
      ) : (
        <>
          <div
            className={check ? "checkNoteGreen" : "checkNoteGray"}
            onClick={() => checkNote(id)}
          >
            {check ? <img className="done" src={done} alt="" /> : null}
          </div>
          <div className="buttonsSavedNote">
            <img
              className="deleteImg"
              src={del}
              alt=""
              onClick={() => deleteNote(id)}
            />
            <img
              className="modifyImg"
              src={modify}
              alt=""
              onClick={() => setUpdateMenu(true)}
            />
          </div>
          <h1 className="noteTitle">{title}</h1>
          <p className="noteText">{text}</p>
        </>
      )}
    </div>
  );
};
export default Note;