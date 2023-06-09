import AreaGraph from "../components/AreaGraph";
import ColumnGraph from "../components/ColumnGraph";
import Input from "../components/Input";
import ListInputs from "../components/ListInputs";
import Total from "../components/Total";
import useGlobalStore from "../store/Store";
import DolarBlue from "../components/DolarBlue";
import Interest from "../components/Interest";
import ProfitsAndLosses from "../components/ProfitsAndLosses";
import NoLogged from "../components/NoLogged";
import "./Home.css";
import axiosCheckVerify from "../api/axiosCheckVerify";
import Verify from "./Verify";

const Home = () => {
  const login = useGlobalStore((state) => state.login);
  const verify = useGlobalStore((state) => state.verify);
  const setVerify = useGlobalStore((state) => state.setVerify);

  const check = async () => {
    const checkStatus = await axiosCheckVerify();
    return checkStatus ? setVerify() : null;
  };
  check();

  return (
    <div className="homecontainer">
      {login ? (
        verify ? (
          <>
            <div className="inputsGraph">
              <div className="inputTotal">
                <Input />
                <Total />
              </div>

              <div className="graphs">
                <ColumnGraph />
                <AreaGraph />
              </div>
            </div>
            <div className="tinys">
              <ProfitsAndLosses />
              <DolarBlue />
              <Interest />
            </div>
            <ListInputs />
          </>
        ) : (
          <Verify />
        )
      ) : (
        <NoLogged />
      )}
    </div>
  );
};
export default Home;
