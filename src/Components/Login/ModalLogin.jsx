import React, {useState} from 'react'
import { Button, Header, Image, Modal, Form, Checkbox} from 'semantic-ui-react'



const ModalLogin = () => {

  const [userName, setUsername] = useState('')
  const [passWord, setPassword] = useState('')

  const handleOnchange = (e) => {
        // Controlling the username input
        setUsername(e.value)
  }

  return(
  <Modal trigger={<Button>Login</Button>} centered={false}>
    <Modal.Header>Please Login</Modal.Header>
    <Modal.Content>
        <Form>
        <Form.Field>
          <label>Username</label>

          <input placeholder='Username' name='username' onChange={handleOnchange} value={userName} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder='Enter password' name='password' onChange={handleOnchange} value={passWord}  />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </Modal.Content>
  </Modal>)
}

export default ModalLogin