import React from 'react'
import { Button, Header, Image, Modal, Form, Checkbox} from 'semantic-ui-react'


const ModalLogin = () => (
  <Modal trigger={<Button>Login</Button>} centered={false}>
    <Modal.Header>Please Login</Modal.Header>
    <Modal.Content>
        <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </Modal.Content>
  </Modal>
)

export default ModalLogin