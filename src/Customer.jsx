import React from "react";
import {withRouter} from "react-router-dom";

import "./App.css";

class Customer extends React.Component {

  render() {
    const {id} = this.props.match.params
    const customer = this.props.customers.find(i => i.id === Number(id))
    return (
      <div className="single-customer">
      {
        Object.keys(customer).map(i=>{
          return (
            <div key={i} >
              <div>{i}</div>
              <div>{ customer[i] }</div>
            </div>
          )
        })
      }
      </div>
    )
  }
}

export default withRouter(Customer);