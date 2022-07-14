import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Desktop150 from './Components/Desktop150';
import Inventory from './Components/Inventory/GRN/Inventory/Inventory';
import ExecutiveDashboard from './Components/Inventory/GRN/ExecutiveDashboard/ExecutiveDashboard';
import Purchase from './Components/Inventory/GRN/Purchase/Purchase';
import Billing from './Components/Inventory/GRN/Billing/Billing';
import HumanResources from './Components/Inventory/GRN/HumanResources/HumanResources';
import StakeholderMGT from './Components/Inventory/GRN/StakeholderMGT/StakeholderMGT';
import EstimationTenderMGT from './Components/Inventory/GRN/EstimationTenderMGT/EstimationTenderMGT';
import ProjectMGT from './Components/Inventory/GRN/ProjectMGT/ProjectMGT';
import Planning from './Components/Inventory/GRN/Planning/Planning';
import FinanceAccounts from './Components/Inventory/GRN/FinanceAccounts/FinanceAccounts';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route>
          <Route path='/dashboard' element={<Desktop150/>}>
          <Route index element={<Inventory></Inventory>}></Route>
          <Route path='executiveDashboard' element={<ExecutiveDashboard></ExecutiveDashboard>}></Route>
          <Route path='purchase' element={<Purchase></Purchase>}></Route>
          <Route path='billing' element={<Billing></Billing>}></Route>
          <Route path='humanResources' element={<HumanResources></HumanResources>}></Route>

          <Route path='stakeholderMGT' element={<StakeholderMGT></StakeholderMGT>}></Route>

          <Route path='estimationTenderMGT' element={<EstimationTenderMGT></EstimationTenderMGT>}></Route>

          <Route path='projectMGT' element={<ProjectMGT></ProjectMGT>}></Route>

          <Route path='planning' element={<Planning></Planning>}></Route>

          <Route path='financeAccount' element={<FinanceAccounts></FinanceAccounts>}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
