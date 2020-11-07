import React from "react";
import {withRouter} from "react-router-dom";

import EditBtn from "./EditBtn";
import "./App.css";

class Customer extends React.Component {
  constructor(props) {
    const {id} = props.match.params
    const customer = props.customers.find(i => i.id === Number(id))
    const originalData = JSON.parse(JSON.stringify(customer))
    super(props);
    this.state = {
      customer,
      isEdit: false,
      originalData,
    };
  }
  handleCancel = () => {
    const {originalData, isEdit} = this.state;
    this.setState({ customer: originalData })
    this.setState({isEdit: !isEdit})
  }
  handleChange = () => {
    const {isEdit} = this.state;
    this.setState({isEdit: !isEdit})
  }
  handleInput = (e, key) => {
    const {customer} = this.state
    customer[key] = e.target.value
    this.setState({customer})
  }

  render() {
    const {customer} = this.state;
    const {id} = this.props.match.params;
    this.props.history.action = 'edit'
    console.log('params params', this.props.history)
    return (
      <div style={{ margin:"20px" }}>
      {
        Object.keys(customer).map(i=>{
          const customerI = this.state.isEdit? <input autoFocus value={customer[i]} onChange={(e)=>this.handleInput(e,i)} /> : customer[i];
          if(i === 'avatar'){
            return (
            <div className='single-customer' key={i} > {i} <span>:  </span>  
              <img src={customer[i]} alt="avatar" className="single-customer-img" />
            </div>
            )
          }
          if (i === 'id') return 
          else {return (
            <div  key={i} className='single-customer'>
              <div className='single-customer-inner'>
                <div> { i } : </div>
                <div> {customerI} </div>
              </div>
            </div>
          )}
        })
      
      }
      <EditBtn state={this.state} handleCancel={this.handleCancel} handleChange={this.handleChange} />
      </div>
    )
  }
}

export default withRouter(Customer);