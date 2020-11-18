import React, {useState} from "react";
import { Button } from 'reactstrap';
import {useParams, withRouter} from 'react-router-dom';

import "./App.css";

export default withRouter( ({state, handleChange, handleCancel, match})  => {
  const handleEdit = () => {
      setEdit(!edit)
      handleChange()
    }
  const handleSaveBtn = () => {
    setEdit(!edit)
    handleChange()
    // handleSave(state.customer)
  } 
  const onCancel = () => {
    setEdit(!edit)
    handleCancel()
  } 
  const [edit, setEdit] = useState(false)
  const saveBtn = edit && <Button color="success" onClick={handleSaveBtn} >Save</Button>;
  const cancelBtn = edit && <Button color="danger" onClick={onCancel} >Cancel</Button>;
  const editBtn = !edit && <Button color="info" onClick={handleEdit} >Edit</Button>;  
  return (
    <div className="edit-btn">

      {editBtn}  {saveBtn} {cancelBtn}
  </div>
  )
})