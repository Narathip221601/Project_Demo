// import React from 'react';
// import Regis from './regis';
// import Butre from './Component/butre';
// import Date from './Component/date';
// import Select from './select';
// import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';
// import Start from './start';
// import Login from './login';


//  function App() {
//    const job = () => {
//      console.log('jobjab')
//    }
//   return (
//     <div className="root">
//       {/* <Start /> */}
//       <Route exact path="/" component={Start} />
//       <Route path="/login" component={Login} />
//       {/* <Link to='/login'>Home</Link>
//       <a href="/login" class="active">Michael</a> */}
//     </div>
//   )
// }

// export default App;

import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';
import Start from './start';
import Login from './login';
import Regis from './regis';
import Home from './home';
import Quicktest from './Component/quicktest';
import Quicktest2 from './Component/quicktest2';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
    }
  render() {
    return (
      <div>
        <div>
        <Route exact path="/" component={Start} />
        <Route path="/login" component={Login} />
        <Route path="/regis" component={Regis} />
        <Route path="/home" component={Home} />
        <Route path="/quicktest" component={Quicktest} />
        <Route path="/quicktest2" component={Quicktest2} />
        </div>
      </div>
    )
  }
}
export default App;
