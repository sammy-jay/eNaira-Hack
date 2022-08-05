import {Routes, Route} from "react-router-dom";
import { Auth, CreatePassword, Onboarding, Success, Verify } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/createPassword" element={<CreatePassword />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
