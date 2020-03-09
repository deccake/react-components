import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("Counter - unmount");
  }

  render() {
    let product = { id: 1 };

    console.log("Counter - render");

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()}>
              {this.formatCount()}
            </span>
          </div>
          <div className="col ">
            <button
              onClick={() => this.props.increment(this.props.counter)}
              className="btn btn-secondary btn-sm m-2"
            >
              +
            </button>
            <button
              onClick={() => this.props.decrement(this.props.counter)}
              className="btn btn-secondary btn-sm m-2"
              disabled={this.props.counter.value === 0 ? 'disabled' :''}
            >
              -
            </button>
            <button
              onClick={() => this.props.delete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-2"
            >
              x
            </button>
          </div>

          <br></br>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
