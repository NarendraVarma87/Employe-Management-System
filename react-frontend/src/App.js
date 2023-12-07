import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import ListEmployee from './Components/ListEmployee';
import AddEmployee from './Components/AddEmployee';
import UpdateEmployee from './Components/UpdateEmployee';


function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <Router>

<div className="container">
  <Routes>
      <Route exact path="/" element={<ListEmployee/>}/>
      <Route path="/employees" element={<ListEmployee/>}/>
      <Route path="/add-employee" element={<AddEmployee/>}></Route>
      <Route path="/update-employee/:id" element={<UpdateEmployee/>}></Route>
  </Routes>
</div>

</Router> 
      <FooterComponent/>
    </div>
  );
}

export default App;
