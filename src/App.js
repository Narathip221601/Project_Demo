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
import Blue1 from './Component/blue1';
import Blue2 from './Component/blue2';
import Blue3 from './Component/blue3';
import Blue4 from './Component/blue4';
import Blue5 from './Component/blue5';
import Blue6 from './Component/blue6';
import Blue7 from './Component/blue7';
import Blue8 from './Component/blue8';
import Blue9 from './Component/blue9';
import Blue10 from './Component/blue10';
import Pak from './Component/pak';

import Red1 from './Component/red1';
import Red2 from './Component/red2';
import Red3 from './Component/red3';
import Red4 from './Component/red4';
import Red5 from './Component/red5';
import Red6 from './Component/red6';
import Red7 from './Component/red7';
import Red8 from './Component/red8';
import Red9 from './Component/red9';
import Red10 from './Component/red10';
import Pak2 from './Component/pak2';

import Green1 from './Component/green1';
import Green2 from './Component/green2';
import Green3 from './Component/green3';
import Green4 from './Component/green4';
import Green5 from './Component/green5';
import Green6 from './Component/green6';
import Green7 from './Component/green7';
import Green8 from './Component/green8';
import Green9 from './Component/green9';
import Green10 from './Component/green10';
import Pak3 from './Component/pak3';

import Color from './Component/color';

import Totall1 from './Component/totall1';
import Totall2 from './Component/totall2';
import Totall3 from './Component/totall3';
import Alltotall from './Component/alltotall';
import Totallsum from './Component/totallsum';

import Quicktest3 from './Component/quicktest3';
import Quicktest4 from './Component/quicktest4';

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
        <Route path="/blue1" component={Blue1} />
        <Route path="/blue2" component={Blue2} />
        <Route path="/blue3" component={Blue3} />
        <Route path="/blue4" component={Blue4} />
        <Route path="/blue5" component={Blue5} />
        <Route path="/blue6" component={Blue6} />
        <Route path="/blue7" component={Blue7} />
        <Route path="/blue8" component={Blue8} />
        <Route path="/blue9" component={Blue9} />
        <Route path="/blue10" component={Blue10} />
        <Route path="/pak" component={Pak} />

        <Route path="/color" component={Color} />

        <Route path="/red1" component={Red1} />
        <Route path="/red2" component={Red2} />
        <Route path="/red3" component={Red3} />
        <Route path="/red4" component={Red4} />
        <Route path="/red5" component={Red5} />
        <Route path="/red6" component={Red6} />
        <Route path="/red7" component={Red7} />
        <Route path="/red8" component={Red8} />
        <Route path="/red9" component={Red9} />
        <Route path="/red10" component={Red10} />
        <Route path="/pak2" component={Pak2} />

        <Route path="/green1" component={Green1} />
        <Route path="/green2" component={Green2} />
        <Route path="/green3" component={Green3} />
        <Route path="/green4" component={Green4} />
        <Route path="/green5" component={Green5} />
        <Route path="/green6" component={Green6} />
        <Route path="/green7" component={Green7} />
        <Route path="/green8" component={Green8} />
        <Route path="/green9" component={Green9} />
        <Route path="/green10" component={Green10} />
        <Route path="/pak3" component={Pak3} />

        <Route path="/totall1" component={Totall1} />
        <Route path="/totall2" component={Totall2} />
        <Route path="/totall3" component={Totall3} />
        <Route path="/totallsum" component={Totallsum} />

        <Route path="/alltotall" component={Alltotall} />

        <Route path="/quicktest3" component={Quicktest3} />
        <Route path="/quicktest4" component={Quicktest4} />
        </div>
      </div>
    )
  }
}
export default App;
