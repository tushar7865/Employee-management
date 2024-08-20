import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponents";
import ListEmployeeComponent from './components/ListEmployeeComponent'
import AddEmployeeComponent from './components/AddEmployeeComponent'
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  return (
   <BrowserRouter>
   <HeaderComponent/>
   <div className = "container">
    <Routes>
    <Route path="/" element = {<ListEmployeeComponent/>} />
    <Route path="/employee" element={<ListEmployeeComponent/>}/>
    <Route path="/add-employee" element={<AddEmployeeComponent/>}/>
    <Route path="/add-employee/:id" element={<AddEmployeeComponent/>}/> 
    </Routes>
   </div>
   <FooterComponent/>
   </BrowserRouter>
    
  );
}

export default App;
