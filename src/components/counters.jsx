import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  
    // componentDidUpdate(prevProps, prevState){
    //     console.log("prevProps",prevProps)
    //     console.log("prevState",prevState)
    // }
    
  render() {
    console.log("Counters rendered")
      const {deleteT, reset,increment,counters, decrement} = this.props;
    return (
      <div>
        <button onClick={reset} className="btn btn-primary  m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            increment={increment}
            decrement = {decrement}
            delete={deleteT}
          >
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
