/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonGroup } from 'reactstrap';

const ModalPage = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [cSelected, setCSelected] = useState([]);

  const toggle = () => setModal(!modal);

  const [form, setForm] = useState({
    "name": "",
    "lastName": "",
    "avatar": "",
    "email": "",
    "state": "",
    "phone": 0,
    "role": "",
    "github": "",
    "courses": [],
    "payment": 0
  })

  const handleInput = (e) => {
      setForm({...form, [e.target.name]: e.target.value})
      if (cSelected.length) {
        // console.log('selec', cSelected);
        setForm({...form, ['courses']: cSelected})
      }
  }

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  }
  
  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
  // console.log('form',form)
  return (
  <div>
    <Button color="danger" onClick={toggle}>Add Student</Button>
        <form onSubmit={()=>console.log('form submitted')}>
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle} close={closeBtn}>Modal title</ModalHeader>
          <ModalBody className="ModalBody">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={form.name} onChange={(e)=>handleInput(e)} />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" onChange={(e)=>handleInput(e)} />
            <label htmlFor="avatar">Avatar</label>
            <input type="text" name="avatar"onChange={(e)=>handleInput(e)}/>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={(e)=>handleInput(e)}/>
            <label htmlFor="state">State</label>
            <input type="text" name="state" onChange={(e)=>handleInput(e)}/>
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" onChange={(e)=>handleInput(e)}/>
            <label htmlFor="role">Role</label>
            <input type="text" name="role" onChange={(e)=>handleInput(e)}/>
            <label htmlFor="github">github</label>
            <input type="text" name="github" onChange={(e)=>handleInput(e)}/>
            <label htmlFor="courses">Select Courses</label>
            <ButtonGroup>
              <Button color="primary" onClick={() => onCheckboxBtnClick('Javascript')} active={cSelected.includes("Javascript")}>Javascript</Button>
              <Button color="primary" onClick={() => onCheckboxBtnClick("React")} active={cSelected.includes("React")}>React</Button>
              <Button color="primary" onClick={() => onCheckboxBtnClick("DSA")} active={cSelected.includes("DSA")}>DSA</Button>
            </ButtonGroup>

            <label htmlFor="payment">Payment</label>
            <input type="text" name="payment" onChange={(e)=>handleInput(e)}/>
          </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={()=>{toggle(); props.handleStudentSubmit(form)}}>Do Something</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
        </form>
  </div>
);
}

export default ModalPage;