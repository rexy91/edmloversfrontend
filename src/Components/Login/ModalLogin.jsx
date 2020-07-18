import React, {useState} from 'react'
import { Button, Header, Image, Modal, Form, Checkbox} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import swal from 'sweetalert'
import { saveUserToState } from '../../Redux/actions'

const ModalLogin = (props) => {
  const [userName, setUsername] = useState('')
  const [passWord, setPassword] = useState('')
  const [modalOpen, setmodalOpen] = useState('')

  // With functional component, somehow when modalOpen state is empty string, modal will not popped up.
  // So I set modalOpen state to be empty when i want the form to be closed, and vise versa.
  const handleOpen = () => {
      setmodalOpen('true')  }

  const submitLogin = (e) => {
    setmodalOpen('')
    const username = e.target.username.value
    const password = e.target.password.value
    e.preventDefault()
    fetch(`http://localhost:3000/login`, {
      method:'POST',
      headers: {
        'content-type':'application/json',
         accept:'application/json'
      },
      body: JSON.stringify(
        {
          username,
          password
        }
      )
    })
    .then(res => res.json())
    .then(respond => {
      if (respond.error){
        swal('',`${respond.error}`,'error')
      }
      else{
          
          const user = respond.user
          const token = respond.token
          //Set token to local storage on browser
          localStorage.setItem('token', token)
          swal('','Welcome Back', 'success')
          props.saveUserToState(user)
          props.history.push(`profile/${user.id}`)
      }
    })
  }

  return(
    <div>
  <Modal 
  trigger={<span onClick = {handleOpen}>Login</span>}  centered={false} 
  open={modalOpen}
  >
    <Modal.Header >Please Login</Modal.Header >
    <Modal.Content>
        <Form onSubmit={submitLogin}>
        <Form.Field>
          <label>Username</label>
          <input placeholder='Username' name='username' onChange={ e => setUsername(e.target.value)} value={userName} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder='Enter password' name='password' type = 'password' onChange={e => setPassword(e.target.value)} value={passWord}  />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </Modal.Content>
  </Modal>
  </div>)
  
}

export default connect(null, {saveUserToState} )(withRouter(ModalLogin))


