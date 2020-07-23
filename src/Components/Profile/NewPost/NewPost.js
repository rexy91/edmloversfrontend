import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import newpostGif from '../../../photos/newpost.gif'
import {useState} from 'react'
import './Newpost.scss'

const NewPost = () => {
    
    const [photos, setPhotos] = useState([])
    
    const handlePhotoUpload = (e) => {
            setPhotos([...e.target.files])
            // Here photos will still be empty, but outside this function photo will be updated.
            handleChosenPhotos()
    }
    
    const handleChosenPhotos = () => {
        // e.target.file is a file lists, not an array, but we can spread and store in an array.
        // With ES6 syntax.
        console.log(photos)
        const chosenFilesArray = [...photos]
        console.log(chosenFilesArray)
    }

    return(
        <Modal trigger={<Button>New Post</Button>} centered={false} class='newpostModal'>
            <Modal.Header>Post something!</Modal.Header>
            <Modal.Content image>
            <Image wrapped size='medium' src={newpostGif} />
            <Modal.Description>
                <Header>Modal Header</Header>
                <p id='111'>Content</p>
                <textarea rows={6} cols={60}></textarea>
                <br/>
                <input onChange={handlePhotoUpload} type="file" multiple="multiple" name="file" id="file" class="inputfile" />
                <label for="file"><img id='addPhotoButton' src='https://img.icons8.com/officel/2x/add-image.png'></img></label>
            </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
            <Button primary>
                Proceed <Icon name='right chevron' />
            </Button>
            </Modal.Actions>
        </Modal>
  )
}

export default NewPost