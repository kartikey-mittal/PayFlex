import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MyProSidebarProvider } from "./pages/global/sidebar/sidebarContext";
import { useLocation } from "react-router-dom";
import Topbar from "./pages/global/Topbar";

import Dashboard from "./pages/dashboard";
import Team from "./pages/transaction";

import Contacts from "./pages/contacts";
import Form from "./pages/form";
import Calendar from "./pages/calendar";
import Bar from "./pages/bar";
import Line from "./pages/line";
import Pie from "./pages/pie";
import FAQ from "./pages/faq";
import Geography from "./pages/geography";
import SendPay from "./pages/sendpay";
import Payment from "./pages/payment";
import Transaction from "./pages/transaction";
import CardDetail from "./pages/CardDetail";
import Tick from "./components/Tick";

import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import Bills from "./pages/bills";
import Billstwo from "./pages/bills/index2";
import BillCard from "./pages/bills/BillCard";
import Lakshay from "./pages/jain/lakshay";

const App = () => {
  const [theme, colorMode] = useMode();
 const location = useLocation();
 const isLoginOrSignupPage = () => location.pathname === "/login" || location.pathname === "/signup";
 
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
       
        {isLoginOrSignupPage() ? (
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        ) : (
          <MyProSidebarProvider>
            <div style={{ height: "100%", width: "100%" }}>
              <main>
                <Topbar />
                <Routes>
                 <Route path="/" element={<Dashboard />} />
                 <Route path="/team" element={<Team />} />
                 <Route path="/contacts" element={<Contacts />} />
                 <Route path="/payment" element={<Payment />} />
                 <Route path="/transactions" element={<Transaction />} />
                 <Route path="/bar" element={<Bar />} />
                 <Route path="/pie" element={<Pie />} />
                 <Route path="/line" element={<Line />} />
                 <Route path="/faq" element={<FAQ />} />
                 <Route path="/calendar" element={<Calendar />} />
                 <Route path="/geography" element={<Geography />} />
                 <Route path="/bills" element={<Bills />} />
                 <Route path="/billstwo" element={<Billstwo />} />
                 <Route path="/sendpay" element={<SendPay />} />
                 <Route path="/form" element={<Form />} />
                 <Route path="/carddetail" element={<CardDetail />} />
                 <Route path="/tick" element={<Tick />} />
                 <Route path="/login" element={<LoginPage />} />
                 <Route path="/signup" element={<SignupPage />} />
                 <Route path="/billcard" element={<BillCard />} />
                 <Route path="/Lakshay" element={<Lakshay/>} />
                </Routes>
              </main>
            </div>
          </MyProSidebarProvider>
        )}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
