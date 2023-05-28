import React from 'react'
import { useMode } from './themes';
import { Navbar } from './shared/widgets/layout';
import routes from "./shared/routes";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './shared/pages/home';
import SignIn from './shared/pages/sign-in'
import NewSignUp from './client/pages/NewSignUp'
import ClientApp from './client/ClientApp';
import BankerApp from './banker/BankerApp'
import Loan from './client/pages/Loan/Loan';
import Transfer from './client/pages/Transfers/Transfer';
import DomesticStepper from './client/pages/Transfers/DomesticStepper';
import PersonalLoanForm from './client/pages/Loan/PersonalLoanForm';
import DomesticTransfer from './client/pages/Transfers/DomesticTransfer';
import InternationalTransfer from './client/pages/Transfers/InternationalTransfer'
import BackButton from './shared/components/BackButton';
import AdminApp from './admin/AdminApp';
function App() {

  return (
    <div>
      {/* <NewSignUp /> */}
      {/* <SignIn /> */}
      {/* <DomesticStepper></DomesticStepper> */}

      {/* <InternationalTransfer /> */}
      {/* <Transfer /> */}
      {/* <ClientApp /> */}
      {/* <BackButton /> */}
      {/* <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <Navbar routes={routes} />
      </div> */}
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path='signUp' element={<NewSignUp/>}/>
        <Route path='client/*' element={<ClientApp/>}/>
        <Route path='banker/*' element={<BankerApp/>}/>
        <Route path='admin/*' element={<AdminApp/>}/>
      </Routes> 
    </div>
  )
}

export default App


