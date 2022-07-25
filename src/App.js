import "./App.css";
import { Route, Routes } from "react-router-dom";
import ErpModel from "./Components/ErpModel";
import Inventory from "./Components/Inventory/GRN/Inventory/Inventory";
import ExecutiveDashboard from "./Components/Inventory/GRN/ExecutiveDashboard/ExecutiveDashboard";
import Purchase from "./Components/Inventory/GRN/Purchase/Purchase";
import Billing from "./Components/Inventory/GRN/Billing/Billing";
import HumanResources from "./Components/Inventory/GRN/HumanResources/HumanResources";
import StakeholderMGT from "./Components/Inventory/GRN/StakeholderMGT/StakeholderMGT";
import EstimationTenderMGT from "./Components/Inventory/GRN/EstimationTenderMGT/EstimationTenderMGT";
import ProjectMGT from "./Components/Inventory/GRN/ProjectMGT/ProjectMGT";
import Planning from "./Components/Inventory/GRN/Planning/Planning";
import FinanceAccounts from "./Components/Inventory/GRN/FinanceAccounts/FinanceAccounts";
import { useState } from "react";
import Login from "./Components/Authentication/Login.js/Login";

function App() {
  const [grn, setGrn] = useState("");
  const [gin, setGin] = useState("");
  const [transferNote, setTransferNote] = useState("");
  const [stockStatement, setStockStatement] = useState("");
  const [AgewiseANofStock, setAgewiseANofStock] = useState("");
  return (
    <div>
      <div className='body-background-color'>
      <Routes>
        <Route path="/dashboard" element={<ErpModel />} />
        <Route>
          <Route
            path="/dashboard"
            element={
              <ErpModel
                setGin={setGin}
                setGrn={setGrn}
                setTransferNote={setTransferNote}
                setStockStatement={setStockStatement}
                setAgewiseANofStock={setAgewiseANofStock}
              ></ErpModel>
            }
          >
            <Route
              path='inventory'
              element={
                <Inventory
                  setGin={[gin, setGin]}
                  setGrn={[grn, setGrn]}
                  setTransferNote={[transferNote, setTransferNote]}
                  setStockStatement={[stockStatement, setStockStatement]}
                  setAgewiseANofStock={[AgewiseANofStock, setAgewiseANofStock]}
                ></Inventory>
              }
            ></Route>
            <Route
              index
              element={<ExecutiveDashboard></ExecutiveDashboard>}
            ></Route>
            <Route path="purchase" element={<Purchase></Purchase>}></Route>
            <Route path="billing" element={<Billing></Billing>}></Route>
            <Route
              path="humanResources"
              element={<HumanResources></HumanResources>}
            ></Route>

            <Route
              path="stakeholderMGT"
              element={<StakeholderMGT></StakeholderMGT>}
            ></Route>

            <Route
              path="estimationTenderMGT"
              element={<EstimationTenderMGT></EstimationTenderMGT>}
            ></Route>

            <Route
              path="projectMGT"
              element={<ProjectMGT></ProjectMGT>}
            ></Route>

            <Route path="planning" element={<Planning></Planning>}></Route>

            <Route
              path="financeAccount"
              element={<FinanceAccounts></FinanceAccounts>}
            ></Route>
          </Route>
        </Route>
        <Route path="/" element={<Login></Login>}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
