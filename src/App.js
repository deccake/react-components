// import React, { Component } from "react";
// import "./App.css";
// import Movies from "./components/movies";
// import Counters from "./components/counters";
// import {NavBar} from "./components/navbar";

// class App extends Component {
//   state = {
//     counters: [
//       { id: 1, value: 0 },
//       { id: 2, value: 4 },
//       { id: 3, value: 0 },
//       { id: 4, value: 0 }
//     ]
//   };

//   constructor(){
//       super()
//       console.log("App - consturctor")
//   }

//   componentDidMount(){
//     console.log("App - mount")
//   }

// //   componentDidUpdate(prevProps, prevState){
// //     console.log("prevProps",prevProps)
// //     console.log("prevState",prevState)
// // }

//   handleDelete = e => {
//     // console.log("delete", e);
//     const counters = this.state.counters.filter(c => c.id !== e);
//     this.setState({ counters });
//     //   this.setState({})
//   };

//   handleReset = () => {
//     const counters = this.state.counters.map(c => {
//       c.value = 0;
//       return c;
//     });

//     this.setState({ counters });
//   };

//   handleIncrement = counter => {
//     // console.log("count", counter);
//     const counters = [...this.state.counters];
//     let index = counters.indexOf(counter);
//     counters[index].value++;
//     // const imcrCont = counters.map(c => {
//     //   if (c.id === counter.id) c.value++;
//     //   return c;
//     // });
//     // console.log("increment", counters);

//     this.setState({ counters });
//   };

//   handleDecrement = (counter) => {
//     const counters = [...this.state.counters];
//     let index = counters.indexOf(counter);
//     counters[index].value--;
//     this.setState({counters})
//   }

//   render() {
//     console.log("App - rendered")
//     return (
//       <React.Fragment>
//         <NavBar totalCounters={this.state.counters.filter(c => c.value>0).length} />
//         <main className="container">
//           <Counters counters={this.state.counters} deleteT={this.handleDelete} decrement={this.handleDecrement}  increment={this.handleIncrement} reset={this.handleReset} />
//         </main>
//       </React.Fragment>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import {NavBar} from './components/navbar';
import Movies from "./components/movies";
import { Switch, Route, Redirect } from "react-router";
import Rentals from './components/rentals';
import Login from './components/login';
import Customers from './components/customers';
import Register from "./common/register";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
          <Switch>
              <Route path='/movies' component={Movies}/>
              <Route path='/customers' component={Customers}/>
              <Route path='/rentals' component={Rentals}/>
              <Route path='/login' component={Login}/>
              <Route path='/register' component={Register}/>
              <Redirect from='/' exact to='/movies' />
          </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
