import './App.css';
import Login from './components/Login';
import ChatRoom from './components/Chatroom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
