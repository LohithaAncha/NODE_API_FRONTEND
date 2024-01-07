import { Routes, Route ,Link} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Createpage from "./pages/Createpage";
import Editpage from "./pages/Editpage";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const App = () => {
  return (
    <div>
       
      <nav className="bg-blue-500">
        <div className="container mx-auto p-2">
          <Link to="/"><h2 className="text-white yext-2xl font-bold">React CRUD</h2></Link>
        </div>
      </nav>
      <div className="container mx-auto pt-2 h-full">
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="/create" element={<Createpage />}></Route>
          <Route path="/edit/:id" element={<Editpage />}></Route>
        </Routes>

      </div>

      <ToastContainer/>
    </div>
  );
}
export default App
