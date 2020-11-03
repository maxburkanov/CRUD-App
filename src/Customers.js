import React, {Component} from 'react';
import { Table } from 'reactstrap';
import {withRouter, Link} from "react-router-dom";

import './App.css';

class Customers extends Component {

  render(){
    const {customers} = this.props;
    return (
      <div>
        <Table striped className="customers">
          <thead>
            <tr>
              <th>#</th>
              <th>Avatar</th>
              <th>Full Name</th>
              <th>State</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Payment</th>
              <th>Courses</th>
              <th>Role</th>
              <th>Github</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              customers.map(customer=>{
                const { id, name, lastName, avatar, email, state, phone,
                role, github, courses, payment} = customer;
                return (
                <tr key={id}>
                  <th scope="row">{id}</th>
                  <td><img src={avatar} alt="avatar"/></td>
                  <td> <Link to={`/customers/${id}`}>{name} {lastName}</Link> </td>
                  <td>{state}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{payment}</td>
                  <td>{courses}</td>
                  <td>{role}</td>
                  <td>{github}</td>
                  <td>Actions</td>
                </tr>
                )
              })
            }
            
          </tbody>
        </Table>
      </div>
    )
  }
}




export default withRouter(Customers );











































/*
const data = [
  {countryName: "USA", currency:"dollar", products:[
    {name: "apple", active:true, subProducts:[
      {name: "iPhone", price: 40, sold:4},
      {name: "iPad", price: 530, sold:4},
      {name: "watch", price: 530},
    ]}
  ]},
  {countryName: "Russia", currency:"rubl", products:[
    {name: "apple", active:true, subProducts:[
      {name: "iPhone", price: 40, sold:4},
      {name: "iPad", price: 530, sold:4},
      {name: "watch", price: 530},
    ]}
  ]}
]
*/