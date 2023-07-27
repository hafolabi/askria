import { lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignUp from './pages/SignUp';

const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<SignUp />}></Route>
    <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
