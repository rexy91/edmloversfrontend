import React, {Component} from 'react'
import { Button, Header, Image, Modal, Form, Checkbox} from 'semantic-ui-react'

export class ModalSignup extends Component{

  state={
    username:'',
    password:''
  }

  // Class component function doenst need a identifier.
  handleAllchange=(e)=>{
    // set state as input changes.
    console.log(e.target.name)
    this.setState({
      // state keys need to match inputs names to make this dynamic, to use one handleOnchangefunction.
      // [e.name] will evulate depends on the input, then it matches the state key and set the value for the key.
      // [] is es6 syntax to set key dynamically.
      [e.target.name]:e.target.value
    })
  }

  submitSignup = (e) => {
      console.log(e.target)
  }
      
   render(){ return(
        <Modal trigger={<Button>Sign Up</Button>} centered={false}>
          <Modal.Header>Welcome</Modal.Header>
          <Modal.Content>
              <Form onSubmit={this.submitSignup}>
              <Form.Field>
                  <label>Username</label>
                  <input placeholder='Username' name='username' 
                    value={this.state.username}
                    onChange={this.handleAllchange} />
              </Form.Field>
              <Form.Field>
                  <label>Password</label>
                  <input placeholder='Enter password' name='password'
                    value={this.state.username}
                    onChange={this.handleAllchange} />
              </Form.Field>
              <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
              </Form.Field>
              <Button type='submit'>Signup</Button>
            </Form>
          </Modal.Content>
        </Modal>
        )
      }
}

export default ModalSignup