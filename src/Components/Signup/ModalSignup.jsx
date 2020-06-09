import React, {Component} from 'react'
import { Button, Header, Image, Modal, Form, Checkbox} from 'semantic-ui-react'

export class ModalSignup extends Component(){
      
   render(){ return(
        <Modal trigger={<Button>Sign Up</Button>} centered={false}>
          <Modal.Header>Please Login</Modal.Header>
          <Modal.Content>
              <Form>
              <Form.Field>
                <label>Username</label>
                <input placeholder='Username' name='username' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Enter password' />
              </Form.Field>
              <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>
        )
      }
}

export default ModalSignup