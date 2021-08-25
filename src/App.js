import { Home } from "@material-ui/icons";
import "./App.css";
// import {Courses} from './component/Courses';
// import{ Detail }from "./component/Counter";
// import{ToggleComps} from "../src/ToggleComps"
// import { Emicalc } from "./component/EmiCalc/Emicalc";
// import { PianoParent } from "./component/Piano/PianoParent";
// import{AudioPlayer} from "./component/AudioPlayer";
// import { CardTaskParent } from "./component/CardTaskParent";
// import{EmployeeList} from "./component/Employees/EmployeeList"
// import {Login} from "./component/Login/Login";
// import { Navigation } from "./component/NavigationBar/Navigation";
// import {ContactUs} from "./component/Routes/ContactUs"
// import {AboutUs} from "./component/Routes/AboutUs"
// import {Service} from "./component/Routes/Service"
// import {Courses} from "./component/Routes/Courses"
// import {Home} from "./component/Routes/Home";
// import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
// import motion from "./component/Calc";
// import { Clock } from "./component/Clock/Clock";
// import { Table } from "./component/Table";
// import { FetchFromReducer } from "../src/component/Redux/FetchingDataFromReducer";
// import TestingReduxData from "./component/Redux/TestingReduxData";
// import { EmpDetail} from "./component/Redux/EmpDetail"
import { Home2 } from "./component/ToDolist/Home2";

const App = () => {
  return (
    <div>
      {/* <TestingReduxData /> */}
      {/* <FetchFromReducer /> */}
      {/* <EmpDetail /> */}
      <Home2 />

      {/* <Login /> */}
      {/* <EmployeeList/> */}
      {/* <CardTaskParent /> */}
      {/* <PianoParent /> */}
      {/* <AudioPlayer/> */}
      {/* <Emicalc /> */}
      {/* <motion /> */}
      {/* <Clock /> */}
      {/* <Table /> */}

      {/* <Router>
      <Navigation/>
      <Switch>   
           <div>
             <Route path="/ContactUs">
               <ContactUs/>
               </Route>
             <Route path="/AboutUs"><AboutUs/></Route>
             <Route path="/Service"><Service/></Route>
             <Route path="/Courses"><Courses/></Route>
             <Route path="/Home"><Home/></Route>
      </div>
      </Switch>
      </Router> */}

      {/* <Login/> */}
    </div>
  );
};

export default App;
