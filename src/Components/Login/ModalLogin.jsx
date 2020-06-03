import React, {useState} from 'react'
import { Button, Header, Image, Modal, Form, Checkbox} from 'semantic-ui-react'

const ModalLogin = () => {
  const [userName, setUsername] = useState('')
  const [passWord, setPassword] = useState('')

  const submitLogin = (e) => {
    // console.log(e.target.username.value)
    // e.preventDefault()
    // fetch(`http://localhost:3000/users`, {
    //   method:'POST',
    //   headers: {
    //     'content-type':'application/json',
    //   },
    //   body: JSON.stringify(
    //     {
    //       key1:'1',
    //       key2:'2'
    //     }
    //   )
    // })
    // .then(res => res.json())
    // .then(console.log)
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(console.log)
  }

  return(
  <Modal trigger={<Button>Login</Button>} centered={false}>
    <Modal.Header>Please Login</Modal.Header>
    <Modal.Content>
        <Form onSubmit={submitLogin}>
        <Form.Field>
          <label>Username</label>
          <input placeholder='Username' name='username' onChange={ e => setUsername(e.target.value)} value={userName} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder='Enter password' name='password' onChange={e => setPassword(e.target.value)} value={passWord}  />
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