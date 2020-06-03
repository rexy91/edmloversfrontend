import React, {useState} from 'react'
import { Button, Header, Image, Modal, Form, Checkbox} from 'semantic-ui-react'

const ModalLogin = () => {
  const [userName, setUsername] = useState('')
  const [passWord, setPassword] = useState('')

  // fetch(`https://http//localhost:3000/users`, {
  //   method:'POST',
  //   headers:{
  //     'Content-type':'application/json',
  //     accept:'application/json'
  //   },
  //   body:JSON.stringify({
  //     test:'testing'
  //   })
  //   .then(res => res.json())
  //   .then(console.log)
  // })

  const submitLogin = (e) => {
    console.log('submitted')
  }

  console.log(userName,passWord)
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