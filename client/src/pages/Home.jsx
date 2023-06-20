import AreaGraph from "../components/AreaGraph";
import ColumnGraph from "../components/ColumnGraph";
import Input from "../components/Input";
import ListInputs from "../components/ListInputs";
import ProfitAndLoss from "../components/ProfitAndLoss";
import useGlobalStore from "../store/Store";
import DolarBlue from "../components/DolarBlue";
import Interest from "../components/Interest";
import Difference from "../components/Difference";
import NoLogged from "../components/NoLogged";
import "./Home.css";
import Verify from "./Verify";
import { useState } from "react";
import Popup from "../components/Popup";
import Notes from "../components/Notes";
import PorcentComponent from "../components/PorcentComponent";
import Time from "../components/Time";

const Home = () => {
  const login = useGlobalStore((state) => state.login);
  const checkVerify = useGlobalStore((state) => state.checkVerify);
  const verifyMessage = useGlobalStore((state) => state.verifyMessage);
  const setVerifyMessageDone = useGlobalStore(
    (state) => state.setVerifyMessageDone
  );

  const [popupConfig, setPopupConfig] = useState({ toConfirm: true });

  const verifyCheckMessage = () => {
    if (verifyMessage) {
      setTimeout(() => {
        setPopupConfig({
          type: "ok",
          text: "Cuenta verificada",
          activate: true,
        });
        setVerifyMessageDone();
      }, 1000);
    }
  };

  return (
    <div className="allScreen">
      <div className="homecontainer">
        <Popup config={popupConfig} />
        {verifyCheckMessage()}
        {login ? (
          checkVerify ? (
            <>
              <ProfitAndLoss />
              <Input />
              <ListInputs />
              <Notes />
              <Interest />
              <PorcentComponent />
              <Difference />
              <DolarBlue />
              <ColumnGraph />
              <AreaGraph />
            </>
          ) : (
            <Verify />
          )
        ) : (
          <NoLogged />
        )}
      </div>
    </div>
  );
};
export default Home;
