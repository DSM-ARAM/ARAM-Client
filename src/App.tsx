import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LoginPage } from './Pages/Login';
import { MainPage } from './Pages/Main';
import { SignupPage } from './Pages/Signup';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/main' element={<MainPage />} />
    </Routes>
  );
}

export default App;
