import React, {Component} from 'react'
import { Button, Header, Image, Modal, Form, Checkbox} from 'semantic-ui-react'
import {withRouter} from 'react-router'
import swal from 'sweetalert'

export class ModalSignup extends Component{

  state={
    username:'',
    password:''
  }


  // Class component function doenst need a identifier.
  handleAllchange=(e)=>{
    // set state as input changes.
    this.setState({
      // state keys need to match inputs names to make this dynamic, to use one handleOnchangefunction.
      // [e.name] will evulate depends on the input, then it matches the state key and set the value for the key.
      // [] is es6 syntax to set key dynamically.
      [e.target.name]:e.target.value
    })
  }

  submitSignup = (e) => {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value
    fetch(`http://localhost:3000/users`, {
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
    .then(newSignupUser => {
      if(newSignupUser.error){
          const errorMessage = newSignupUser.error
          swal(`${errorMessage}`)
      }
      else{
          swal('Signup Completed')
          this.props.history.push(`/profile/${newSignupUser.id}`)
      }
    })
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
                  <input placeholder='Enter password' name='password' type='password'
                    value={this.state.password}
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

export default withRouter(ModalSignup)