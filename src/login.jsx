import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {withRouter} from "react-router-dom";

export default withRouter (class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        userName: "maksat",
        password: 'maksat',
        name: "Maksat Burkanov" 
      },
      userName: '',
      password: '',
    }
  }
  handleLogin = (e) => {
    let name = e.target.name
    let val = e.target.value
    this.setState({ [name]: val })
  }

  handleSubmit = () => {
    const {userInfo, userName, password} = this.state;
    if (userInfo.userName === userName && userInfo.password === password) {
      this.props.setUser(userInfo);
      localStorage.setItem('user', JSON.stringify(userInfo))
      console.log('matches', localStorage.getItem('user'))

      this.props.history.push("/customers")
    }
    else {
      console.log('does not match')
    }
  }
  
  render() {
    console.log(this.state.userName, this.state.password)
    const {userName, password} = this.state;
    return (
      <div>
        <Form inline>
          <FormGroup>
            <Label for="exampleEmail" hidden>Email</Label>
            <Input onChange={this.handleLogin} value={userName} type="email" name="userName" id="exampleEmail" placeholder="Email" />
          </FormGroup>
          {' '}
          <FormGroup>
            <Label for="examplePassword" hidden>Password</Label>
            <Input onChange={this.handleLogin} value={password} type="password" name="password" id="examplePassword" placeholder="Password" />
          </FormGroup>
          {' '}
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </div>
    )
  }
})