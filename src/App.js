import React from 'react';
import Header from './Component/Header/Header';
import './App.css';
import Courses from './Component/Courses/Courses'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Instructor from './Component/instructor/Instructor'
import NotFound from './Component/NotFound/NotFound'
import CourseDetails from './Component/CourseDetails/CourseDetails'
function App() {
return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/courses">
            <Courses> </Courses>
          </Route>
          <Route path="/instructor">
            <Instructor></Instructor>
          </Route>
          <Route exact path="/">
            <Courses> </Courses>
          </Route>
          {/* new route nilam id theke detail info anar jonno, topic.js er line 11 er por */}
          <Route exact path="/course/:id">
            <CourseDetails> </CourseDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

     
        
    </div>
  );
}


export default App;
