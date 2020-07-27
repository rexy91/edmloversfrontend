import React, {useState} from 'react'
import { Button, Header, Image, Modal, Form, Checkbox} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import swal from 'sweetalert'
import { saveUserToState } from '../../Redux/actions'

const EditProfileModal = (props) => {

  const [modalOpen, setmodalOpen] = useState('')

  // With functional component, somehow when modalOpen state is empty string, modal will not popped up.
  // So I set modalOpen state to be empty when i want the form to be closed, and vise versa.
  const handleOpen = () => {
      setmodalOpen('true')  }
    
  const handleClose = () => setmodalOpen('')

  const profileOnchange = (e) => {
      console.log(e.target.files[0])
  }

  return(
    <div>
  <Modal 
  trigger={<span onClick = {handleOpen}>Edit</span>}  centered={false} 
  open={modalOpen}
  >
    <Modal.Header >Please Login</Modal.Header >
    <Modal.Content>
        <Form>
        <Form.Field>
          <label>Profile Pic</label>
          <input type='file' onChange={profileOnchange}></input>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
        
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
        <Button onClick={handleClose}>Close</Button>
      </Form>
    </Modal.Content>
  </Modal>
  </div>)
  
}

export default EditProfileModal


