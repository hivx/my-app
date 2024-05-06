import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './auth/Login';

function App() {
  return (
    <Routes>
      <Route path="/login" 
        element={
          <Login />
        } 
      />
      <Route path="/admin" 
        element={
          <></>
        } 
      />
  </Routes>
  );
}

export default App;
