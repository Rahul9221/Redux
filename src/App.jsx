import Addform from "./components/AddForm/Addform"
import { Routes, Route, } from 'react-router-dom';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import ViewData from "./components/ViewData/ViewData";
import Update from "./components/Update/Update";

function App() {


  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/employeedata" element={<Addform />} />
    <Route path="/view-data" element={<ViewData />} />
    <Route path="/Updatedata/:id" element={<Update />} />

    </Routes>
    </>
  )
}

export default App
