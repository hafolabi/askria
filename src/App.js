import { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const SignUp = lazy(() => import("./pages/SignUp"));

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
