// App.jsx

import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RedirectLogin from './components/RedirectLogin'; // Assuming you already have this component

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="redirect" element={<RedirectLogin />} />
      </Route>
    </Routes>
  );
}

export default App;
