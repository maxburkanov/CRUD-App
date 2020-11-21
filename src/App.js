import React, {Component} from 'react';
import Customers from './Customers';
import {BrowserRouter as Router, Switch, Route, Redirect, withRouter} from 'react-router-dom';

import Login from './login';
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";
import Customer from "./Customer";
import ModalPage from "./Modal";
import Movies from "./Movies/Movies";
import './App.css';



// const customers = [
//   {
//     id: 1, name: "Seytech", lastName: "Co", avatar: "https://www.seytech.co/images/logo.png",
//     email: "support@seytech.co", state: "WA", phone: 1234567703,
//     role: "student", github: "seytechschool", courses: ["js, react, algo"],
//     payment: 12000
//   },
//   {
//     id: 2, name: "Eliza", lastName: "Co", avatar: "https://avatars1.githubusercontent.com/u/68719361?s=100&v=4",
//     email: "support@seytech.co", state: "WA", phone: 1234567703,
//     role: "student", github: "seytechschool", courses: ["js, react, algo"],
//     payment: 12000
//   },
//   {
//     id: 3, name: "Adilet", lastName: "Co", avatar: "https://avatars0.githubusercontent.com/u/55602501?s=100&v=4",
//     email: "support@seytech.co", state: "WA", phone: 1234567703,
//     role: "instructor", github: "seytechschool", courses: ["js, react, algo"],
//     payment: 12000
//   },
//   {
//     id: 4, name: "Max", lastName: "Co", avatar: "https://avatars0.githubusercontent.com/u/40704457?s=100&v=4",
//     email: "ostu.student.gmail.com", state: "MA", phone: '508-524-9108',
//     role: "student", github: "maxburkanov", courses: ["js, react, algo"],
//     payment: 12000
//   },
//   {
//     id: 5, name: "Ulan", lastName: "Co", avatar: "https://avatars1.githubusercontent.com/u/16879917?s=100&v=4",
//     email: "support@seytech.co", state: "IL", phone: 1234567703,
//     role: "admin", github: "seytechschool", courses: ["js, react, algo"],
//     payment: 12000
//   },
// ]

class App extends Component {

  constructor(){
    super();
    this.state = {
      customers: [],
      searchValue: '',
      searchBy: '',
      dropdown: ['name', 'state', 'email', 'phone'],
      data: [],
      isLogged: false,
      userInfo: {},
    }
  }

  componentDidMount() {
    const userInfo = JSON.parse(localStorage.getItem('user'))
    if (userInfo) {
      this.setState({ userInfo, isLogged: true })
      console.log('user logged', userInfo, this.state.isLogged)
      this.props.history.push('/customers')
    }
    fetch('http://localhost:5000/api/customers')
      .then(response => response.json())
      .then(data => this.setState({customers: data}, ()=>{console.log('data from backend ', this.state.customers)}))
      .catch(err=>console.log('this error', err))
  }

  handleStudentSubmit = (singlestudent) => {
  //   const data = {
  //     "name": "Aziz",
  //     "lastName": "Abdullaev",
  //     "avatar": "url",
  //     "email": "test@test.com",
  //     "state": "CA",
  //     "phone": 123321,
  //     "role": "student",
  //     "github": "github/user",
  //     "courses": ["js", "react"],
  //     "payment": 10
  // }
    console.log('submit was clicked', singlestudent )

    fetch('http://localhost:5000/api/customers',{
      method: 'POST',
      body: JSON.stringify( singlestudent ),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(result => console.log(JSON.stringify(result)))
    .catch(err => console.log(err))
  }
  
  handleSubmitSearch = (e, val, byWhat) => {
    e.preventDefault();
    const {customers} = this.state;
    const arr = customers.filter(i=>{
      return i[byWhat].toLowerCase().includes(val.trim().toLowerCase())
    })
    this.setState({customers: arr}, ()=>{
      console.log('this is value', this.state.customer)
    } 
    )
  }
  handleSelection = (val) => {
    this.setState({searchBy: val},()=>{
      console.log('this.state.searchBy',this.state.searchBy)
    })
  }
  
  setUser = (userInfo) => {
    this.setState({ isLogged: true, userInfo })
  }

  handleLoggout = () => {
    this.setState({ isLogged: false, userInfo: {} })
    localStorage.removeItem('user')
  }


  render(){
    const {customers, isLogged,userInfo} = this.state;
    console.log('customerscustomerscustomers',customers)
    return (
      // <Router>
        <div>
          <Navigation isLogged={isLogged} handleLoggout={this.handleLoggout} />
          <div> 
            <Switch>
              <Route path="/customers/:id" >
                <Customer searchValue={this.state.searchValue}  customers={this.state.customers} />
              </Route>
              <Route path="/customers">
                { isLogged? <div> <div className="search-bar">
                  <SearchBar searchBy={this.state.searchBy} dropdown={this.state.dropdown} handleSelection={this.handleSelection} handleSubmitSearch={this.handleSubmitSearch}/>
                  <ModalPage handleStudentSubmit={this.handleStudentSubmit} />
                </div>
                <div className="container">
                  <h1> Welcome {userInfo.name} </h1>
                  <Customers customers={this.state.customers} />
                </div> </div> : <Redirect to="/login" />}
              </Route>
              <Route path="/about">
                <div>about</div>                
              </Route>
              <Route path="/login">
                <Login setUser={this.setUser} />                
              </Route>
              <Route path="/topics">
                <div>topics</div>                
              </Route>
              <Route exact path="/movies">
                <Movies />                
              </Route>
              <Route path="/">
                <div>home</div>                
              </Route>
            </Switch>
          </div>
        </div>
      // </Router>
    )
  }
}




export default withRouter(App);
















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