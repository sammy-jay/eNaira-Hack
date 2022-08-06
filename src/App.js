import {Routes, Route} from "react-router-dom";
import { Auth, CreatePassword, Onboarding, Success, Verify } from "./pages";
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/createPassword" element={<CreatePassword />} />
      <Route path="/success" element={<Success />} />
      <Route path="/home" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
