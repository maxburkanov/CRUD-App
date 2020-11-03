import React from "react";
import {withRouter} from "react-router-dom";

import "./App.css";

class Customer extends React.Component {

  render() {
    const {id} = this.props.match.params
    const customer = this.props.customers.find(i => i.id === Number(id))
    return (
      <div className="single-customer-wrapper">
      {
        Object.keys(customer).map(i=>{
          if(i === 'avatar'){
            return (
            <div className='single-customer'> {i} :
              <img src={customer[i]} className="single-customer-img" />
            </div>
            )
          }
          else {return (
            <div  key={i} className='single-customer' >
              <div>{ i } : { customer[i] } </div>
            </div>
          )}
        })
      }
      </div>
    )
  }
}

export default withRouter(Customer);